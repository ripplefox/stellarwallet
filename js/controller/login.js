/* global myApp */

myApp.controller('LoginCtrl', ['$scope', '$rootScope', '$window', '$location', 'FileDialog', 'AuthenticationFactory', 'StellarApi',
  function($scope, $rootScope, $window, $location, FileDialog, AuthenticationFactory, StellarApi) {
    let _file;

    $scope.address="";
    $scope.showTemp = false;
    $scope.toggleTemp = function() {
      $scope.showTemp = !$scope.showTemp;
    }

    $scope.fileInputClick = function() {
      FileDialog.openFile((filepath, file) => {
        console.log(filepath, file);
        $scope.walletfile = file.name;
        _file = file;
        $scope.$apply();
      }, false);
    };

    $scope.submitForm = function(){
      if (!$scope.walletfile) {
        $scope.error = 'Please select a wallet file.';
        return;
      }
      $scope.backendMessages = [];

      const type = AuthenticationFactory.TYPE.FILESYSTEM;
      AuthenticationFactory.load(type, {path: $scope.walletfile, file: _file, password: $scope.password}, (err) => {
        if (err) {
          console.error(err);
          $scope.error = 'Login failed: ' + err.message;
          $scope.$apply();
          return;
        }
        
        $location.path('/');
      });
    }

    $scope.submitAddress = function(){
      $scope.invalidAddress = !StellarApi.isValidAddress($scope.address);
      if ($scope.invalidAddress) {
        return;
      }
      const type = AuthenticationFactory.TYPE.TEMPORARY;
      AuthenticationFactory.load(type, {address: $scope.address}, (err) => {
        $scope.$apply(() => {
          if (err) {
            console.error(err)
            $scope.error = `Login failed: ${err}`;
            return;
          }

          $location.path('/balance');
        });
      });
    }
  }
]);
