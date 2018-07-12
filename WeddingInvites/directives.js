/**
 * DIRECTIVES
 */

routerApp.directive('addSpace', function() {
    return {
        template : "<br><br>"
    };
});

routerApp.directive('menuName', function() {
    return {
        scope: { title: '@' },
        template: '<h1>{{title}}</h1>'
    };
});

routerApp.directive('adminStatus', function() {
    return {
        template: '<p style="color: green">{{admin}}</p>'
    };
})

//isolate scope