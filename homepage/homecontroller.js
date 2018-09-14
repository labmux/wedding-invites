routerApp.controller('homectrl', function($scope, $http, Admin, List) {

    $scope.admin = Admin.isAdmin();

    $scope.namelist = [];
    $scope.errormsg = "";
    $scope.resp = "";
    $scope.number = 1;

    $scope.list = "";

     $scope.coming = function() {
        if($scope.namelist.length == $scope.number && $scope.hasEmpty() == false)
        {
            //assign iscoming property
            $scope.namelist.forEach(function(obj) { obj.iscoming = "true"; });

            //convert namelist array to string
            $scope.namelist_string = JSON.stringify($scope.namelist);

            //post list using php
            $scope.list = List.postList($scope.namelist_string).then(
                function success(response) {
                    $scope.resp = response.data;
                    $scope.errormsg = "Added names succesfully";
                    alert($scope.errormsg);
                    },
                function error(response) {
                    $scope.resp = response.statusText;
                    $scope.errormsg = "Something went wrong:" + response.statusText;
                });
            //reset
            $scope.reset();
        }
        else if($scope.namelist.length > $scope.number || $scope.hasEmpty() == true)
        {
            $scope.errormsg = "Error 101: Not all fields have been initialized\n";
            alert("Your name was not saved to the list. Not all fields have been initialized.");
            $scope.reset();
        }

        else if($scope.number <= 0)
        {
            $scope.errormsg = "Error 102: Make sure fields have been initialized";
            alert("Your name was not saved to the list. Make sure fields have been initialized");
            $scope.reset();
        }

        else
        {
            $scope.errormsg = "Error 103: Make sure unused submission areas have been cleared";
            alert("Your name was not saved to the list.  Make sure unused submission areas have been cleared");
            $scope.reset();
        }

    }

    $scope.notcoming = function () {
        if($scope.namelist.length == $scope.number && $scope.hasEmpty() == false)
        {
            //assign iscoming property
            $scope.namelist.forEach(function(obj) { obj.iscoming = "false"; });

            //convert namelist array to string
            $scope.namelist_string = JSON.stringify($scope.namelist);

            //post list using php
            $scope.list = List.postList($scope.namelist_string).then(
                function success(response) {
                    $scope.resp = response.data;
                    $scope.errormsg = "Added names succesfully";
                    alert("Your submission has been saved. Thank you for your time");
                },
                function error(response) {
                    $scope.resp = response.statusText;
                    $scope.errormsg = "Something went wrong:" + response.statusText;
                });
            //reset all values
            $scope.reset();
        }
        else if($scope.namelist.length < $scope.number || $scope.hasEmpty() == true)
        {
            $scope.errormsg = "Error 101: Not all fields have been initialized";
            alert("Your name was not saved to the list. Not all fields have been initialized");
            $scope.reset();
        }

        else if($scope.number <= 0)
        {
            $scope.errormsg = "Error 102: Make sure fields have been initialized";
            alert("Your name was not saved to the list. Make sure fields have been initialized");
            $scope.reset();
        }

        else
        {
            $scope.errormsg = "Error 103: Make sure unused submission areas have been cleared";
            alert("Your name was not saved to the list.  Make sure unused submission areas have been cleared");
            $scope.reset();
        }
    }

    $scope.getErrormsg = function ()
    {
        if($scope.errormsg === "" || $scope.errormsg === null)
            return "";
        else
            return $scope.errormsg;
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
            if(!angular.isDefined($scope.namelist[i]) || !angular.isDefined($scope.namelist[i].name) || $scope.namelist[i].name == "" ||
                $scope.namelist[i] === null)
                return true;
        }
        return false;
    }

    $scope.num = function()
    {
        return new Array($scope.number);
    }



});