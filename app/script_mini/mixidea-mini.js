"use strict";angular.module("uiFormatApp",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ui.router"]),angular.module("uiFormatApp").config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/event/list"),a.state("/event_layout",{url:"/event",views:{RootView:{templateUrl:"views/event/event_layout.html",controller:"EventFilterCtrl"}}}).state("/event_layout.list",{url:"/list",views:{event_main:{templateUrl:"views/event/event_list.html",controller:"EventListCtrl"},event_right:{templateUrl:"views/right_column_ad.html"}}}).state("/event_layout.calendar",{url:"/calendar",views:{event_main:{templateUrl:"views/event/event_calendar.html",controller:"EventCalendarCtrl"},event_right:{template:'<div style="dieplay:none"></div>'}}})}]),angular.module("uiFormatApp").controller("EventCalendarCtrl",["$scope",function(a){a.name="event calendar yuta"}]),angular.module("uiFormatApp").controller("EventFilterCtrl",["$scope",function(a){a.name="event filter yuta"}]),angular.module("uiFormatApp").controller("EventListCtrl",["$scope",function(a){a.name="event list yuta"}]),angular.module("uiFormatApp").controller("MainCtrl",[function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);