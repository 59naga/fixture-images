var assert= require('power-assert');

var animated= require('./').animated;
var still= require('./').still;

describe('fixture-images',function(){
  it('10 files',function(){
    assert(Object.keys(animated).length === 3);
    assert(Object.keys(still).length === 8);
  });

  it('all buffer',function(){
    var keys= Object.keys(animated);
    keys.forEach(function(key){
      assert(animated[key] instanceof Buffer);
    });

    var keys= Object.keys(still);
    keys.forEach(function(key){
      assert(still[key] instanceof Buffer);
    });
  });
});