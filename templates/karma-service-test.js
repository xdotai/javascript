'use strict';

describe('MyService', function() {

  var MyService;

  beforeEach(function () {
    module('myservice');
    inject(function (_MyService_) {
      MyService = _MyService_;
    })
  });
  
  it('My service is defined', function () {
    expect(MyService).toBeDefined();
  });

});
