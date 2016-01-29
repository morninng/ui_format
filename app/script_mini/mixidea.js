
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
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


	$urlRouterProvider.otherwise("/event/list");

	$stateProvider
	.state('/event_layout', {
		url: "/event",
		views:{
			"RootView":{
			templateUrl: 'views/event/event_layout.html',
			controller: 'EventFilterCtrl'
			}
		}
	})
	.state('/event_layout.list', {
		url: "/list",
		views:{
			"event_main":{
			templateUrl: 'views/event/event_list.html',
			controller: 'EventListCtrl'
			},
			"event_right":{
			templateUrl: 'views/right_column_ad.html'
			}
		}
	})
	.state('/event_layout.calendar', {
		url: "/calendar",
		views:{
			"event_main":{
			templateUrl: 'views/event/event_calendar.html',
			controller: 'EventCalendarCtrl'
			},
			"event_right":{
			template: '<div style="dieplay:none"></div>'
			}
		}
	})
	.state('/article_layout', {
		url:"/article",
		views: {
			"RootView":{
			templateUrl: 'views/article_layout.html',
			controller: 'ArticleLayoutCtrl'
			}
		}
	})
	.state('/article_layout.arguments', {
		url:"/argument/:id",
		views: {
			"article_view":{
			templateUrl: 'views/arguments.html',
			controller: 'ArgumentsCtrl'
			}
		}
	})
	.state('/article_layout.audio_transcript', {
		url:"/audio/:id",
		views: {
			"article_view":{
			templateUrl: 'views/audio_transcript.html',
			controller: 'AudioTranscriptCtrl'
			}
		}
	})




	;

}]);
'use strict';

angular.module('uiFormatApp')
  .controller('ArgumentsCtrl',['$scope','$stateParams', function ($scope, $stateParams) {
    $scope.name = "sss";
    $scope.game_id = $stateParams.id;

  }]);


'use strict';

angular.module('uiFormatApp')
  .controller('ArticleLayoutCtrl',[ '$scope',function ($scope) {

  	$scope.name = "kk";



  }]);

'use strict';

angular.module('uiFormatApp')
  .controller('AudioTranscriptCtrl', function ($scope) {
 
 	s@sxo "article_view": !"::::::::::::::::"


    $scope.name = "sssssssssssss";
  });

'use strict';

angular.module('uiFormatApp')
  .controller('EventCalendarCtrl',['$scope', function ($scope) {


  	$scope.name = "event calendar yuta";

  }]);

'use strict';

angular.module('uiFormatApp')
  .controller('EventFilterCtrl',['$scope', function ($scope) {


  	$scope.name = "event filter yuta";

  }]);
  

'use strict';

angular.module('uiFormatApp')
  .controller('EventListCtrl',['$scope', function ($scope) {


  	$scope.name = "event list yuta";

  }]);

'use strict';

/**
 * @ngdoc function
 * @name uiFormatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiFormatApp
 */
angular.module('uiFormatApp')
  .controller('MainCtrl',[ function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
