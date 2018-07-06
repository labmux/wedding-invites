routerApp.controller('loginctrl', function ($scope, $http, $state) {

    $scope.submit = function ()
    {
        $http({
            method: 'POST',
            url: 'loginpage/logincheck.php',
            data: 'username=' + $scope.username + '&password=' + $scope.password,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(
            function success(response) {
                $scope.resp = response.data;
                if(response == 1)
                    $state.go('loginsuccessful');
                else
                    $state.go('loginfail')

            },
            function error(response) {
                $scope.resp = response.statusText;

            });
    }
})