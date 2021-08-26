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
        }
        $scope.$apply();
      });
    }


    $scope.removeState = {};
    $scope.setRemoving = function(code, issuer, state) {
      if (!$scope.removeState[code]) {
        $scope.removeState[code] = {};
      }
      $scope.removeState[code][issuer] = state;
    };
    $scope.isRemoving = function(code, issuer) {
      if ($scope.removeState[code] && $scope.removeState[code][issuer]) {
        return $scope.removeState[code][issuer];
      } else {
        return false;
      }
    }

    function getAvailableTime(asset) {
      let obj = asset.claimants.find(o => o.destination == $rootScope.address);
      console.log(obj);
      if (obj && obj.predicate) {
        return obj.predicate;
      }
    }




  } ]);
