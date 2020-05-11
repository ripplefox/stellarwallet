myApp.factory('FedNameFactory', function(SettingFactory, StellarApi) {
  var fed = {
    map : {}
  };

  fed.isCached = function(address) {
    return this.map[address] ? true : false;
  };

  fed.getName = function(address) {
    return this.map[address].nick;
  };

  fed.resolve = function(address, callback) {
    var self = this;

    if (!self.map[address]) {
      self.map[address] = {
        address : address,
        nick    : ""
      }
    } else {
      return callback(new Error("resolving " + address), null);
    }

    StellarApi.getFedName(SettingFactory.getFedNetwork(), address, function(err, name){
      if (err) {
        console.error(address, err);
      } else {
        self.map[address].nick = name;
      }
      return callback(null, self.map[address])
    });
  };

  return fed;
});