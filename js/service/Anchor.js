myApp.factory('AnchorFactory', ['$rootScope', 'StellarApi',
  function($scope, StellarApi) {
    var obj = {
      anchor : {
        'ripplefox.com' : {domain  : 'ripplefox.com', parsing : false, parsed  : false}
      },
      address : {
        'GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX' : {domain : 'ripplefox.com', parsing: false, parsed: false}
      }
    };

    obj.isAnchorParsed = function(domain) {
      return this.anchor[domain] && this.anchor[domain].parsed;
    }
    obj.isAccountParsed = function(address) {
      return this.address[address] && this.address[address].parsed;
    }
    obj.getAnchor = function(domainOrAddress) {
      var domain = domainOrAddress;
      if (this.address[domainOrAddress]) {
        domain = this.address[domainOrAddress].domain;
      }
      return this.anchor[domain];
    }

    obj.addAnchor = function(domain) {
      var self = this;
      if (!self.anchor[domain]) {
        self.anchor[domain] = {domain  : domain, parsing : false, parsed  : false};
      }
      if (!self.anchor[domain].parsed) {
        self.parseDomain(domain);
      }
    }

    obj.addAccount = function(address) {
      var self = this;
      if (!self.address[address]) {
        self.address[address] = {domain  : null, parsing : false, parsed  : false};
      }
      if (!self.address[address].parsed) {
        self.parseAccount(address);
      }
    }

    obj.parseAccount = function(address) {
      var self = this;
      if (self.address[address].parsing) {
        return;
      }

      console.debug('Parse domain of ' + address);
      self.address[address].parsing = true;
      StellarApi.getInfo(address).then(data => {
        self.address[address].parsed = true;
        if (data.home_domain) {
          console.debug(address, data.home_domain);
          self.address[address].domain = data.home_domain;
          self.addAnchor(data.home_domain);
        } else {
          console.debug(address + ' home_domain not set.');
        }
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        self.address[address].parsing = false;
      });
    }

    obj.parseDomain = function(domain) {
      var self = this;
      if (self.anchor[domain].parsing) {
        return;
      }

      console.debug('Parse stellar.toml of ' + domain);
      self.anchor[domain].parsing = true;
      StellarSdk.StellarTomlResolver.resolve(domain).then(function(stellarToml) {
        console.debug(domain, stellarToml);
        self.anchor[domain].parsing = false;
        self.anchor[domain].parsed = true;
        self.anchor[domain].toml = stellarToml;
        self.anchor[domain].deposit_api = stellarToml.DEPOSIT_SERVER;
        self.anchor[domain].fed_api = stellarToml.FEDERATION_SERVER;

        var currencies = stellarToml.CURRENCIES;
        currencies.forEach(function(asset){
          if (asset.host && asset.host.indexOf(domain) < 0) {
            //ignore the asset not issued by this domain
            console.warn(domain, asset);
          } else {
            self.address[asset.issuer] = {domain: domain, parsing: false, parsed: true};
          }
          $scope.gateways.updateAsset(domain, asset);
        });

        $scope.$broadcast("anchorUpdate");
      }).catch(function(err){
        self.anchor[domain].parsing = false;
        console.error('Parse ' + domain + ' fail.', err);
      });

    }

    return obj;
  } ]);