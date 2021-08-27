/* global myApp */

myApp.controller("ClaimCtrl", [ '$scope', '$rootScope', '$http', 'StellarApi', 'AnchorFactory', 'SettingFactory',
  function($scope, $rootScope, $http, StellarApi, AnchorFactory, SettingFactory) {
    $scope.unclaim = {};
    $scope.working = false;
    $scope.refresh = function() {
      if ($scope.working) { return; }
      $scope.working = true;
      StellarApi.queryClaim(function(err, balance){
        $scope.working = false;
        $scope.unclaim = {};
        balance.records.forEach(item => {
          let arr = item.asset.split(":");
          item.code = arr[0];
          item.issuer = arr[1];
          item.predicate = JSON.stringify(getAvailableTime(item), null, 2).slice(2, -1);;
          $scope.unclaim[item.id] = item;
        });
        $scope.$apply();
      });
    };
    $scope.refresh();

    $scope.claim = function(id) {
      let asset = $scope.unclaim[id];
      console.debug('Claiming', asset);
      asset.claiming = true;
      StellarApi.claim(id, function(err){
        asset.claiming = false;
        if (err) {
          asset.error = StellarApi.getErrMsg(err);
        } else {
          $scope.refresh();
        }
        $scope.$apply();
      });
    }

    $scope.hasLine = function(code, issuer) {
      if (!$rootScope.lines[code] || !$rootScope.lines[code][issuer]) {
        return false;
      }
      return $rootScope.lines[code][issuer].limit > 0;
    };

    $scope.addTrust = function(code, issuer, id) {
      let amount = "100000000000";
      let asset = $scope.unclaim[id];

      asset.trusting = true;
      StellarApi.changeTrust(code, issuer, amount, function(err, data){
        asset.trusting = false;
        if (err) {
          asset.error = StellarApi.getErrMsg(err);
        }
        $scope.$apply();
      });
    };

    function getAvailableTime(asset) {
      let obj = asset.claimants.find(o => o.destination == $rootScope.address);
      console.log(obj);
      if (obj && obj.predicate) {
        return obj.predicate;
      }
    }
  } ]);
