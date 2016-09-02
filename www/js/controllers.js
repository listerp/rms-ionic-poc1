angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
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
    var loggedIn = false;

    switch ($scope.loginData.username)
    {
      case "123456":
        if (password === "password")
          loggedIn = true;
        break;
      case "654321":
        if (password === "password")
          loggedIn = true;
        break;
      case "123123":
        if (password === "password")
          loggedIn = true;
        break;
      case "321321":
        if (password === "password")
          loggedIn = true;
        break;
      case "112233":
        if (password === "password")
          loggedIn = true;
        break;
      case "332211":
        if (password === "password")
          loggedIn = true;
        break;
    }

    if (loggedIn)
      $scope.closeLogin();
    else
      var x = "y";  // TODO: What to do about a failed login?
  };
})

.controller('DriverScheduleCtrl', function($scope) {
  $scope.Schedules =
    [
      {
        DriverId: 123456,
        ClockInTime: "06:00",
        ClockOutTime: "15:00",
        DepotDepartTime: "06:30",
        DepotReturnTime: "14:30",
        IsConfirmed: false
      },
      {
        DriverId: 654321,
        ClockInTime: "07:00",
        ClockOutTime: "16:00",
        DepotDepartTime: "07:30",
        DepotReturnTime: "15:30",
        IsConfirmed: false
      },
      {
        DriverId: 123123,
        ClockInTime: "05:00",
        ClockOutTime: "14:00",
        DepotDepartTime: "05:30",
        DepotReturnTime: "13:30",
        IsConfirmed: false
      },
      {
        DriverId: 321321,
        ClockInTime: "06:30",
        ClockOutTime: "15:30",
        DepotDepartTime: "06:45",
        DepotReturnTime: "15:15",
        IsConfirmed: false
      },
      {
        DriverId: 112233,
        ClockInTime: "12:00",
        ClockOutTime: "21:00",
        DepotDepartTime: "11:30",
        DepotReturnTime: "20:30",
        IsConfirmed: false
      },
      {
        DriverId: 332211,
        ClockInTime: "11:00",
        ClockOutTime: "20:00",
        DepotDepartTime: "10:45",
        DepotReturnTime: "19:30",
        IsConfirmed: false
      }
    ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
