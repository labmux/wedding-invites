routerApp.controller('loginctrl', function ($scope, $http, $state, Admin) {

    $scope.admin = Admin.isAdmin();

    $scope.submit = function ()
    {
         $http({
            method: 'POST',
            url: 'loginpage/logincheck.php',
            data: 'username=' + $scope.username + '&password=' + $scope.password,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(
            function success(response) {
                console.log(response);
                $scope.data = response.data;

                if($scope.data === '1')
                {
                    $state.go('admin');
                    Admin.setloggedin(true);
                }
                else
                    $state.go('loginfail');
            },
            function error(response) {
                $scope.resp = response.statusText;

            });
    }


})