"use strict";angular.module("uiFormatApp",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ui.router"]),angular.module("uiFormatApp").config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/event/list"),a.state("/event_layout",{url:"/event",views:{RootView:{templateUrl:"views/event/event_layout.html",controller:"EventFilterCtrl"}}}).state("/event_layout.list",{url:"/list",views:{event_main:{templateUrl:"views/event/event_list.html",controller:"EventListCtrl"},event_right:{templateUrl:"views/right_column_ad.html"}}}).state("/event_layout.calendar",{url:"/calendar",views:{event_main:{templateUrl:"views/event/event_calendar.html",controller:"EventCalendarCtrl"},event_right:{template:'<div style="dieplay:none"></div>'}}}).state("/article_layout",{url:"/article/:game_id",views:{RootView:{templateUrl:"views/article_layout.html",controller:"ArticleLayoutCtrl"}}}).state("/article_layout.arguments",{url:"/argument/",views:{article_view:{templateUrl:"views/arguments.html",controller:"ArgumentsCtrl"}}}).state("/article_layout.audio_transcript",{url:"/audio/",views:{article_view:{templateUrl:"views/audio_transcript.html",controller:"AudioTranscriptCtrl"}}})}]),angular.module("uiFormatApp").controller("ArgumentsCtrl",["$scope","$stateParams",function(a,b){a.name="sss",a.game_id=b.game_id}]),angular.module("uiFormatApp").controller("ArticleLayoutCtrl",["$scope","$stateParams",function(a,b){a.name="kk",a.game_id=b.game_id,a.argument_tab="active_tab",a.audio_transcript_tab="deactive_tab",console.log("layout id"+a.game_id)}]),angular.module("uiFormatApp").controller("AudioTranscriptCtrl",["$scope","$stateParams",function(a,b){a.game_id=b.game_id,a.name="sssssssssssss"}]),angular.module("uiFormatApp").controller("EventCalendarCtrl",["$scope",function(a){a.name="event calendar yuta"}]),angular.module("uiFormatApp").controller("EventFilterCtrl",["$scope",function(a){a.name="event filter yuta"}]),angular.module("uiFormatApp").controller("EventListCtrl",["$scope",function(a){a.name="event list yuta"}]),angular.module("uiFormatApp").controller("MainCtrl",[function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);