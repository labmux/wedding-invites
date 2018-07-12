routerApp.controller('homectrl', function($scope, $http, Admin, List) {

    $scope.admin = Admin.isAdmin();
    $scope.test = List.getTest();
    $scope.namelist = List.getNamelist();
    $scope.errormsg = List.getErrormsg();
    $scope.resp = List.getResp();

    $scope.addName = function() {
        List.addName();
    }

    $scope.num = function ()
    {
        List.num();
    }

    $scope.remove = function(x)
    {
        List.remove();
    }

    $scope.reset = function()
    {
        List.reset();
    }

    $scope.hasEmpty = function()
    {
        return List.hasEmpty();
    }





});