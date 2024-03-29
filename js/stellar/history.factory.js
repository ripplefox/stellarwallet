/* global myApp, StellarSdk */

myApp.factory('StellarHistory', ['$rootScope', 'SettingFactory', function($rootScope, SettingFactory) {
  let _server;
  let _passphrase;

  return {

    setServer(server, passphrase) {
      _server = server;
      _passphrase = passphrase;
      
    },

    payments(addressOrPage, callback) {
      let page;
      let address;
      if ('string' === typeof addressOrPage) {
        address = addressOrPage;
        page = _server.payments().forAccount(address).order("desc").limit("20").call();
      } else {
        page = addressOrPage;
        address = page.address;
      }
      page.then((data) => {
        console.log(data);
        const payments = [];
        for(const r of data.records) {
          const t = {
            id: r.id,
            hash : r.transaction_hash,
            type: r.type,
            transaction: r.transaction,
            success: r.transaction_successful
          };
          switch(r.type) {
            case 'payment': 
            case 'path_payment_strict_receive':
            case 'path_payment_strict_send': {
              t.isInbound = r.to == address;
              t.counterparty = t.isInbound ? r.from : r.to;
              t.asset = r.asset_type == "native" ? {code: SettingFactory.getCoin()} : {code:r.asset_code, issuer: r.asset_issuer};
              t.amount = parseFloat(r.amount);
              break;
            }
            case 'create_account': {
              t.isInbound = r.account == address;
              t.counterparty = t.isInbound ? r.source_account : r.account;
              t.asset = {code: SettingFactory.getCoin()};
              t.amount = parseFloat(r.starting_balance);
              break;
            }
            case 'account_merge' : {
              t.isInbound = r.into == address;
              t.counterparty = t.isInbound ? r.source_account : r.into;
              t.asset = {code: SettingFactory.getCoin()};
            }
            default: {
              // add quite empty line.
            }
          }
          payments.push(t);
        }

        let nextPage = null;
        if (data.records.length >= 20) {
          nextPage = data.next();
          nextPage.address = address;
        }
        callback(null, payments, nextPage);
      }).catch((err) => {
        console.error('Payments Fail !', err);
        callback(err, null);
      });
    },

    effects(addressOrPage, callback) {
      let page;
      let address;
      if ('string' === typeof addressOrPage) {
        address = addressOrPage;
        page = _server.effects().forAccount(address).order("desc").limit("20").call();
      } else {
        page = addressOrPage;
        address = page.address;
      }
      page.then((data) => {
        console.log(data);
        let nextPage = null;
        if (data.records.length >= 20) {
          nextPage = data.next();
          nextPage.address = address;
        }
        callback(null, data.records, nextPage);
      }).catch((err) => {
        console.error('Effects Fail !', err);
        callback(err, null);
      });
    },

    transactions(addressOrPage, callback) {
      let page;
      let address;
      if ('string' === typeof addressOrPage) {
        page = _server.transactions().forAccount(addressOrPage).order('desc').limit("20").call();
        address = addressOrPage;
      } else {
        page = addressOrPage;
        address = page.address;
      }
      page.then((page) => {
        console.log(page);
        let transactions = [];

        for(const record of page.records) transactions.push(this.processTx(record, address));

        let nextPage = null;
        if (page.records.length >= 20) {
          nextPage = page.next();
          nextPage.address = address;
        }
        console.log(transactions);
        callback(null, transactions, nextPage);
      }).catch((err) => {
        console.error('Transactions Fail !', err);
        callback(err, null);
      });
    },

    processTx(record, address) {
      let envelopeXdr = StellarSdk.xdr.TransactionEnvelope.fromXDR(record.envelope_xdr, 'base64');
      let resultXdr = StellarSdk.xdr.TransactionResult.fromXDR(record.result_xdr, 'base64');
      let metaXdr = StellarSdk.xdr.TransactionMeta.fromXDR(record.result_meta_xdr, 'base64');

      console.log(envelopeXdr, resultXdr, metaXdr);

      let result = {
        date : new Date(record.created_at),
        fee  : record.fee_paid,
        source_account : record.source_account,
        source_account_sequence : record.source_account_sequence,
        operation_count : record.operation_count,
        memo_type : record.memo_type,
        memo : record.memo,
        nativeCode : SettingFactory.getCoin(),
      };

      let tx = new StellarSdk.TransactionBuilder.fromXDR(record.envelope_xdr, _passphrase);
      if (tx instanceof StellarSdk.FeeBumpTransaction) {
        console.log(tx);
        result.source_account = tx.feeSource;
        result.resultCode = resultXdr.result().switch().name;
        tx = tx.innerTransaction;
      } else {
        result.resultCode = resultXdr.result().results()[0].value().value().switch().name;
      }
      
      for(const op of tx.operations) {
        switch(op.type){
        case 'payment':
          op.isInbound = op.destination == address;
          op.counterparty = op.isInbound ? tx.source : op.destination;
          break;
        case 'createAccount':
          op.isInbound = op.destination == address;
          op.counterparty = op.isInbound ? tx.source : op.destination;
          op.asset = {code: SettingFactory.getCoin()};
          op.amount = op.startingBalance;
          break;
        case 'pathPayment':
        case 'pathPaymentStrictSend':
        case 'pathPaymentStrictReceive':
          op.isInbound = op.destination == address;
          op.isConvert = tx.source == op.destination;
          op.counterparty = op.isInbound ? tx.source : op.destination;
          break;
        case 'accountMerge' : {
          op.isInbound = op.destination == address;
          op.counterparty = op.isInbound ? tx.source : op.destination;
          op.asset = {code: SettingFactory.getCoin()};
          break;
        }
        default:

        }
      }
      result.tx = tx;

      return result;
    },

  };
} ]);
