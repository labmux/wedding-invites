routerApp.controller('homectrl', function($scope, $http, Admin, List) {

    $scope.admin = Admin.isAdmin();
    $scope.test = List.getTest();
    $scope.namelist.bind(List.getNamelist()) ;
    $scope.errormsg = List.getErrormsg();
    $scope.resp = List.getResp();
    $scope.number = 1;
console.log(List);
console.log($scope)

    $scope.List = List;

    $scope.addName = function()
    {
        List.addName();
    }

    $scope.num = function ()
    {
        return new Array($scope.number);

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