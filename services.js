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

    factory.getList = function() 
    {
        return $http({
            method: 'GET',
            url: 'adminpage/downloadList.php'
        });
    }

    factory.postList = function(namelist)
    {
        return $http({
            method: 'POST',
            url: 'homepage/uploadList.php',
            data: 'list=' + namelist,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }

    factory.displayList = function (list)
    {
        var str = "oooo";

        for(var i = 0; i < list.length; i++)
        {
            str+="yoo";
            str += list[i].name + ",";

            if(list[i].ischild === true)
                str += list[i].ischild;
            else
                str += 0 ;

            str += "\r\n";
        }

        return str;
    }



    return factory;
})