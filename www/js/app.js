var app = angular.module('spoApp', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'tabs/home.html',
            controller: 'homeController'
        })
        .when('/search', {
            templateUrl: 'tabs/search.html',
            controller: 'searchController'
        })
        .when('/downloads', {
            templateUrl: 'tabs/downloads.html',
            controller: 'downloadsController'
        })
        .when('/settings', {
            templateUrl: 'tabs/settings.html',
            controller: 'settingsController'
        })
        .otherwise({ redirectTo: '/' });
});