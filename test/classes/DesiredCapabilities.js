'use strict';

describe('DesiredCapabilities', function(){
  var wd = require('../../');
  var DesiredCapabilities = wd.DesiredCapabilities;
  var caps;
  
  beforeEach(function(){
    caps = DesiredCapabilities.chrome();
  });

  describe('.setCapability()', function(){
    it('should accept values', function(){
      caps.setCapability('asdafsdf', true);
    });
  });
});
