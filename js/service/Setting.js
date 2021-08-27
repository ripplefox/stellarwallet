/* global myApp, nw, StellarSdk */

myApp.factory('SettingFactory', function($window) {
  return {
    // To add new preset network, add new entry here and in `translationKey` to all translations.
    // P.S. Undefined entries will be asked for in user interface.
    NETWORKS: {
      xlm: {
        name: "Stellar Public Network",
        translationKey: 'public_url',
        networkType: 'xlm',
        networkPassphrase: StellarSdk.Networks.PUBLIC,
        knownHorizons: [
          'https://horizon.stellar.org',  // First one is default.
          'https://h.s1yun.com/v1',
          'https://horizon.fchain.io',
          'https://stellar-horizon.satoshipay.io'
        ],
        coin: {
          name: "lumen",
          atom: "stroop",
          code: "XLM",
          logo: "img/xlm.png"
        },
        allowHTTP: false,
        tabs: ["history", "trade", "balance", "send", "trust", "service", "ico"]
      },
      xlmTest: {
        name: "Stellar Test Network",
        translationKey: 'test_url',
        networkType: 'xlmTest',
        networkPassphrase: StellarSdk.Networks.TESTNET,
        knownHorizons: [
          'https://horizon-testnet.stellar.org',
        ],
        coin: {
          name: "lumen",
          atom: "stroop",
          code: "XLM",
          logo: "img/rocket.png"
        },
        allowHTTP: true,
        tabs: ["history", "trade", "balance", "send", "trust"]
      },
      other: {
        name: "User defined",
        translationKey: 'other_url',
        networkType: 'other',
        networkPassphrase: undefined,
        knownHorizons: [
        ],
        coin: {
          name: "lumen",  // TODO: ask in settings
          atom: "stroop",  // TODO: ask in settings
          code: undefined,
          logo: "img/rocket.png",  // TODO: ask in settings
        },
        allowHTTP: true,
        tabs: ["history", "trade", "balance", "send", "trust"]
      }
    },

    setTimeout : function(timeout) {
      return $window.localStorage['timeout'] = timeout;
    },
    getTimeout : function(timeout) {
      return $window.localStorage['timeout'] || '45';
    },

    setBasefee : function(basefee) {
      return $window.localStorage['basefee'] = basefee;
    },
    getBasefee : function(timeout) {
      return $window.localStorage['basefee'] || '100';
    },

    setLang : function(lang) {
      return $window.localStorage['lang'] = lang;
    },
    getLang : function() {
      if ($window.localStorage['lang']) {
        return $window.localStorage['lang'];
      } else {
        if (nw.global.navigator.language.indexOf('zh') >= 0) {
          return 'cn';
        } else if (nw.global.navigator.language.indexOf('fr') >= 0) {
          return 'fr';
        } else {
          return 'en';
        }
      }
    },

    setProxy : function(proxy) {
      return $window.localStorage[`proxy`] = "undefined" === proxy ? '' : proxy;
    },
    getProxy : function() {
      return $window.localStorage[`proxy`] || "";
    },

    setNetworkType : function(network) {
      return $window.localStorage[`network_type`] = network in this.NETWORKS ? network : 'xlm';
    },
    getNetworkType : function() {
      return $window.localStorage[`network_type`] || this.setNetworkType();
    },
    getCurrentNetwork : function() {
      var network = this.NETWORKS[this.getNetworkType()];
      if (this.getNetworkType() === 'other') {
        network.coin.code = this.getCoin();
      }
      return network;
    },
    setStellarUrl : function(url) {
      return $window.localStorage[`network_horizon/${this.getNetworkType()}`] = url;
    },
    getStellarUrl : function(type) {
      type = type || this.getNetworkType();
      return $window.localStorage[`network_horizon/${type}`] || this.NETWORKS[type].knownHorizons[0];
    },
    setNetPassphrase : function(val) {
      return this.getNetworkType() === 'other' ? $window.localStorage[`network_passphrase/${this.getNetworkType()}`] = val : this.NETWORKS[this.getNetworkType()].networkPassphrase;
    },
    getNetPassphrase : function(type) {
      return this.getNetworkType() === 'other' ? $window.localStorage[`network_passphrase/${type || this.getNetworkType()}`] : this.NETWORKS[this.getNetworkType()].networkPassphrase;
    },
    setCoin : function(val) {
      return this.getNetworkType() === 'other' ? $window.localStorage[`network_coin/${this.getNetworkType()}`] = val : this.NETWORKS[this.getNetworkType()].coin.code;
    },
    getCoin : function(type) {
      return this.getNetworkType() === 'other' ? $window.localStorage[`network_coin/${type || this.getNetworkType()}`] : this.NETWORKS[this.getNetworkType()].coin.code;
    },
    getAllowHttp : function() {
      return this.NETWORKS[this.getNetworkType()].allowHTTP;
    },

    setFedNetwork : function(domain) {
      $window.localStorage['fed_network'] = domain;
    },
    getFedNetwork : function(url) {
      return $window.localStorage['fed_network'] || 'fed.network';
    },
    setFedRipple : function(domain) {
      $window.localStorage['fed_ripple'] = domain;
    },
    getFedRipple : function(url) {
      return $window.localStorage['fed_ripple'] || 'ripplefox.com';
    },
    setFedBitcoin : function(domain) {
      $window.localStorage['fed_bitcoin'] = domain;
    },
    getFedBitcoin : function(url) {
      return $window.localStorage['fed_bitcoin'] || 'naobtc.com';
    },

    getTradepair : function() {
      if ($window.localStorage['tradepair']) {
        return JSON.parse($window.localStorage['tradepair']);
      } else {
        return {
          base_code   : this.getCurrentNetwork().coin.code,
          base_issuer : '',
          counter_code   : 'CNY',
          counter_issuer : 'GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX'
        }
      }
    },
    setTradepair : function(base_code, base_issuer, counter_code, counter_issuer) {
      var trade_pair = {
        base_code   : base_code,
        base_issuer : base_issuer,
        counter_code   : counter_code,
        counter_issuer : counter_issuer
      }
      $window.localStorage['tradepair'] = JSON.stringify(trade_pair);
    },

    getBridgeService : function() {
      return $window.localStorage['bridge_service'] || 'ripplefox.com';
    },
    setBridgeService : function(anchor_name) {
      $window.localStorage['bridge_service'] = anchor_name;
    }
  };
});
