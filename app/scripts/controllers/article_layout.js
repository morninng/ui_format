'use strict';

angular.module('uiFormatApp')
  .controller('ArticleLayoutCtrl',[ '$scope','$stateParams',function ($scope, $stateParams) {

  	$scope.name = "kk";
    $scope.game_id = $stateParams.game_id;
    $scope.argument_tab = "active_tab";
    $scope.audio_transcript_tab = "deactive_tab";
    console.log("layout id" + $scope.game_id);



  }]);
