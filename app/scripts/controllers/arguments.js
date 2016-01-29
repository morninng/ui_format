'use strict';

angular.module('uiFormatApp')
  .controller('ArgumentsCtrl',['$scope','$stateParams', function ($scope, $stateParams) {
    $scope.name = "sss";
    $scope.game_id = $stateParams.game_id;

  }]);

