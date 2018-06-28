var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.when('', '/home');

    $stateProvider
        .state('root', {
            url: '/',
            template: 'You are at root'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'homepage/rsvp.html',
            controller: 'myController'
          })
        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: 'loginctrl'
        });
});

routerApp.controller('loginctrl', ['$scope', function($scope) {
    $scope.a = 30;
}])

routerApp.controller('myController', function($scope, $http) {
    $scope.resp = "";
    $scope.name = [""];
    $scope.list = [""];
    $scope.errormsg = "";
    $scope.addName = function()
    {
        if($scope.name.length == $scope.number && $scope.hasEmpty() == false)
        {
            $http({
                method: 'POST',
                url: 'homepage/testing.php',
                data: 'list=' + $scope.name,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function success(response) {
                    $scope.resp = response.data;
                    $scope.errormsg = "Added names succesfully";

                },
                function error(response) {
                    $scope.resp = response.statusText;
                    $scope.errormsg = "Something went wrong:" + response.statusText;
                });
        }
        else if($scope.name.length < $scope.number || $scope.hasEmpty() == true)
            $scope.errormsg = "Error 101: Not all fields have been initialized";
        else if($scope.number <= 0)
            $scope.errormsg = "Error 102: Make sure fields have been initialized";
        else
            $scope.errormsg = "Error 103: Make sure unused submission areas have been cleared";

    };
    $scope.num = function ()
    {
        return new Array($scope.number);

    }
    $scope.removeName = function(x)
    {
        $scope.name.splice(x,1);
        $scope.number--;
    }
    $scope.reset = function()
    {
        $scope.name = angular.copy($scope.list);
        $scope.number = 1;
        $scope.errormsg = "";
        $scope.resp = "";
    }
    $scope.hasEmpty = function()
    {
        for (var i = 0; i < $scope.name.length; i++)
        {
            if($scope.name[i] == "" || $scope.name[i] == null)
                return true;
        }
        return false;
    }

});