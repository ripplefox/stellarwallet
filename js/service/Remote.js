myApp.factory('RemoteFactory', function($http) {
  var remote = {};

  function getResource(url, callback){
    console.debug('GET: ' + url);
    $http({
      method: 'GET',
      url: url
    }).then(function(res) {
      if (res.status != "200") {
        callback(res, null);
      } else {
        callback(null, res.data);
      }
    }).catch(function(err) {
      callback(err, null);
    });
  }

  // Poor network in China, need a backup data source
  remote.getIcoAnchors = function(callback) {
    var url = 'https://stellarchat.github.io/ico/data/anchor.json';
    var backup = 'https://ico.stellar.chat/data/anchor.json';

    getResource(url, function(err, data) {
      if (err) {
        console.error(err);
        getResource(backup, function(err, data){
          return callback(err, data);
        });
      } else {
        return callback(null, data);
      }
    });
  };

  remote.getIcoItems = function(callback) {
    var url = 'https://stellarchat.github.io/ico/data/ico.json';
    var backup = 'https://ico.stellar.chat/data/ico.json';

    getResource(url, function(err, data) {
      if (err) {
        console.error(err);
        getResource(backup, function(err, data){
          return callback(err, data);
        });
      } else {
        return callback(null, data);
      }
    });
  };

  remote.getStellarTicker = function(callback) {
    //var url = 'http://ticker.stellar.org/';
    var url = 'https://api.stellarterm.com/v1/ticker.json';
    getResource(url, callback);
  }

  remote.getClientVersion = function(callback) {
    var url = "https://raw.githubusercontent.com/stellarchat/desktop-client/master/src/package.json";
    getResource(url, callback);
  }

  remote.getNwjsClientVersion = function(callback) {
    var url = "https://raw.githubusercontent.com/stellarchat/desktop-client/nwjs/src/package.json";
    getResource(url, callback);
  }

  return remote;
});