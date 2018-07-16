//Admin functions
routerApp.factory('Admin', function () {

    var factory = {};
    factory.isloggedin = false;

    factory.isAdmin = function() {
        if(factory.isloggedin)
            return 'Admin mode';
        else
            return 'User mode';

    }

    factory.setloggedin = function(loggedin) {
        factory.isloggedin = loggedin;
    }

    return factory;
})

//functions controller name list
routerApp.factory('List', function($http) {
    
    var factory = {};

    factory.namelist = [];
    factory.errormsg = "";
    factory.resp = "";
    factory.number = 1;

    factory.setNumber = function() {

    }
    factory.addName = function() {
        if(factory.namelist.length == factory.number && factory.hasEmpty() == false)
        {
            factory.namelist_string = JSON.stringify(factory.namelist);

            $http({
                method: 'POST',
                url: 'homepage/uploadList.php',
                data: 'list=' + factory.namelist_string,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(
                function success(response) {
                    factory.resp = response.data;
                    factory.errormsg = "Added names succesfully";

                },
                function error(response) {
                    factory.resp = response.statusText;
                    factory.errormsg = "Something went wrong:" + response.statusText;
                });
        }
        else if(factory.namelist.length < factory.number || factory.hasEmpty() == true)
            factory.errormsg = "Error 101: Not all fields have been initialized";

        else if(factory.number <= 0)
            factory.errormsg = "Error 102: Make sure fields have been initialized";

        else
            factory.errormsg = "Error 103: Make sure unused submission areas have been cleared";
    }

    factory.remove = function(x)
    {
        factory.namelist.splice(x,1);
        factory.number--;
    }

    factory.reset = function()
    {
        factory.namelist = [];
        factory.number = 1;
        factory.errormsg = "";
        factory.resp = "";
    }

    factory.hasEmpty = function()
    {
        for (var i = 0; i < factory.namelist.length; i++)
        {
            if(factory.namelist[i].name == "" || factory.namelist[i].name === undefined ||
                factory.namelist[i] === null || factory.namelist[i].name == "" )
                return true;
        }
        return false;
    }


    factory.getNamelist = function() {
        return factory.namelist;
    }

    factory.getErrormsg = function() {
        return factory.errormsg;
    }

    factory.getResp = function() {
        return factory.resp;
    }

    factory.getTest = function () {
        return factory.test;
    }


    return factory;
})