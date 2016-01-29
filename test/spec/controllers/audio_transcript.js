'use strict';

describe('Controller: AudioTranscriptCtrl', function () {

  // load the controller's module
  beforeEach(module('uiFormatApp'));

  var AudioTranscriptCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AudioTranscriptCtrl = $controller('AudioTranscriptCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
