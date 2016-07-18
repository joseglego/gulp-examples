'use strict';
angular.module('gulpExample').config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/components/main.html',
        controller: 'MainCtrl'
      });
    $urlRouterProvider.otherwise('/main');
  }
]);
    
