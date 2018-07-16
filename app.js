var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.when('', '/home');

    $stateProvider
        .state('root', {
            url: '/',
            template: 'You are at root'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'homepage/home.html',
            controller: 'homectrl'
          })
        .state('login', {
            url: '/loginpage',
            templateUrl: 'loginpage/login.html',
            controller: 'loginctrl'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'adminpage/admin.html',
            controller: 'loginctrl'
        })
        .state('loginfail', {
            url: '/loginfail',
            templateUrl: 'loginpage/loginfail.html',
            controller: 'loginctrl'
        })

});

