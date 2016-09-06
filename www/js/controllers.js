angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData =
  {
    isLoggedIn: false,
    username: "",
    password: ""
  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;

    if (!$scope.isLoggedIn) {
      $scope.login();
    }

  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    var password = $scope.loginData.password;

    if ($scope.loginData.username === '123456' && password === 'password')
    {
      $scope.loginData.isLoggedIn = true;
    }

    if ($scope.loginData.isLoggedIn)
      $scope.closeLogin();
    else
      var x = "y";  // TODO: What to do about a failed login?
  };
})

.controller('DriverScheduleCtrl', function($scope) {


  $scope.DriverInfo =
      {
        DriverId: 123456,
        DriverName: 'Marty McFly',
        DriverPhone: '913-555-1212',
        Schedule: {
          ClockInTime: '06:00',
          ClockOutTime: '15:00',
          DepotDepartTime: '06:30',
          DepotReturnTime: '14:30',
          IsConfirmed: false
        }
      };

  $scope.confirmSchedule = function() {
    $scope.DriverInfo.Schedule.IsConfirmed = true;
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
