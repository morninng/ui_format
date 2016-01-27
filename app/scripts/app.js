
'use strict';

/**
 * @ngdoc overview
 * @name uiFormatApp
 * @description
 * # uiFormatApp
 *
 * Main module of the application.
 */
angular
  .module('uiFormatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);


angular.module('uiFormatApp')
  .config(function($stateProvider, $urlRouterProvider) {


	$urlRouterProvider.otherwise("/event_list");

	$stateProvider
	.state('/event_list', {
		url: "/event_list",
		views:{
			"RootView":{
			templateUrl: 'views/event_list.html',
			controller: 'EventListCtrl'
			}
		}
	})

});