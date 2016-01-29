'use strict';

angular.module('uiFormatApp')
  .controller('ArticleLayoutCtrl',[ '$scope','$stateParams',function ($scope, $stateParams) {

  	$scope.name = "kk";
    $scope.game_id = $stateParams.game_id;
    console.log("layout id" + $scope.game_id);



  }]);
