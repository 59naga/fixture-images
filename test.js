var assert= require('power-assert');
var imageType= require('image-type');

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

  describe('mimetypes',function(){
    it('gif', function() {
      var type= imageType(animated.gif);

      assert(type.ext === 'gif');
      assert(type.mime === 'image/gif');
    });
    it('png', function() {
      var type= imageType(animated.png);

      assert(type.ext === 'png');
      assert(type.mime === 'image/png');
    });
    it('webp', function() {
      var type= imageType(animated.webp);

      assert(type.ext === 'webp');
      assert(type.mime === 'image/webp');
    });
    it('jpg', function() {
      var type= imageType(still.jpg);

      assert(type.ext === 'jpg');
      assert(type.mime === 'image/jpeg');
    });
    it('tif', function() {
      var type= imageType(still.tif);

      assert(type.ext === 'tif');
      assert(type.mime === 'image/tiff');
    });
    it('bmp', function() {
      var type= imageType(still.bmp);

      assert(type.ext === 'bmp');
      assert(type.mime === 'image/bmp');
    });
    it('jxr', function() {
      var type= imageType(still.jxr);

      assert(type.ext === 'jxr');
      assert(type.mime === 'image/vnd.ms-photo');
    });
    it('psd', function() {
      var type= imageType(still.psd);

      assert(type.ext === 'psd');
      assert(type.mime === 'image/vnd.adobe.photoshop');
    });
  });
});