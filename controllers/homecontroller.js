routerApp.controller('homectrl', function($scope, $http, Admin) {

    $scope.admin = Admin.isAdmin();

    $scope.namelist = [];
    $scope.errormsg = "";
    $scope.resp = "";
    $scope.number = 1;

    
    $scope.addName = function() {
        if($scope.namelist.length == $scope.number && $scope.hasEmpty() == false)
        {
            $scope.namelist_string = JSON.stringify($scope.namelist);

            $http({
                method: 'POST',
                url: 'homepage/uploadList.php',
                data: 'list=' + $scope.namelist_string,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(
                function success(response) {
                    $scope.resp = response.data;
                    $scope.errormsg = "Added names succesfully";

                },
                function error(response) {
                    $scope.resp = response.statusText;
                    $scope.errormsg = "Something went wrong:" + response.statusText;
                });
        }
        else if($scope.namelist.length < $scope.number || $scope.hasEmpty() == true)
            $scope.errormsg = "Error 101: Not all fields have been initialized";

        else if($scope.number <= 0)
            $scope.errormsg = "Error 102: Make sure fields have been initialized";

        else
            $scope.errormsg = "Error 103: Make sure unused submission areas have been cleared";
    }

    $scope.remove = function(x)
    {
        $scope.namelist.splice(x,1);
        $scope.number--;
    }

    $scope.reset = function()
    {
        $scope.namelist = [];
        $scope.number = 1;
        $scope.errormsg = "";
        $scope.resp = "";
    }

    $scope.hasEmpty = function()
    {
        for (var i = 0; i < $scope.namelist.length; i++)
        {
            if($scope.namelist[i].name == "" || $scope.namelist[i].name === undefined ||
                $scope.namelist[i] === null || $scope.namelist[i].name == "" )
                return true;
        }
        return false;
    }

    $scope.num = function()
    {
        return new Array($scope.number);
    }



});