'use strict';

describe('Controller: EventListCtrl', function () {

  // load the controller's module
  beforeEach(module('uiFormatApp'));

  var EventListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventListCtrl = $controller('EventListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
