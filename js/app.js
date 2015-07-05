'use strict';

var app = angular.module('msyncApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
      
        $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html'
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterController'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);