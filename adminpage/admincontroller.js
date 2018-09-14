routerApp.controller('adminctrl', function($scope, $http, Admin, List) {

    $scope.admin = Admin.isAdmin();
    $scope.status = "";
    $scope.data = "";
    $scope.list = "";
    $scope.display = "";


    $scope.displayList = function ()
    {
        List.getList().then(
            function success(response) {
                $scope.status = response.statusText;
                console.log(response);
                $scope.data = response.data;

                $scope.list = $scope.data;//JSON.parse($scope.data);
                //$scope.display = List.displayList($scope.list);
            },
            function error(response) {
                $scope.data = response.data;
                $scope.status = response.statusText;
            }
        );
    }

    $scope.addName = function ()
    {

    }

    $scope.remove = function ()
    {

    }
});