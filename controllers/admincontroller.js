routerApp.controller('adminctrl', function($scope, $http) {

    $scope.resp = "";
    $scope.errormsg = "";

    $scope.getList = function() {
        $http({
            method: 'GET',
            url: 'adminpage/downloadList'
        }).then(
            function success(response) {
                $scope.resp = response.data;
                $scope.errormsg = "Retrieved list succesfully";
            },
            function error(response) {dfvdfvd
                $scope.resp = response.data;
                $scope.errormsg = response.statusText;
            }
        )
    }
});