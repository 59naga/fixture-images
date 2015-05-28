var fs= require('fs');

module.exports= {
  animated: {
    gif:  fs.readFileSync(__dirname+'/animated.GIF'),
    png:  fs.readFileSync(__dirname+'/animated.PNG'),
    webp: fs.readFileSync(__dirname+'/animated.WEBP'),
  },
  still: {
    gif:  fs.readFileSync(__dirname+'/still.GIF'),
    png:  fs.readFileSync(__dirname+'/still.PNG'),
    webp: fs.readFileSync(__dirname+'/still.WEBP'),

    jpg:  fs.readFileSync(__dirname+'/still.JPG'),
    jxr:  fs.readFileSync(__dirname+'/still.JXR'),
    bmp:  fs.readFileSync(__dirname+'/still.BMP'),
    psd:  fs.readFileSync(__dirname+'/still.PSD'),
    tif:  fs.readFileSync(__dirname+'/still.TIF'),
  },
  http: {
    animated: {
      gif:  'http://cdn.rawgit.com/59naga/fixture-images/master/animated.GIF',
      png:  'http://cdn.rawgit.com/59naga/fixture-images/master/animated.PNG',
      webp: 'http://cdn.rawgit.com/59naga/fixture-images/master/animated.WEBP',
    },
    still: {
      gif:  'http://cdn.rawgit.com/59naga/fixture-images/master/still.GIF',
      png:  'http://cdn.rawgit.com/59naga/fixture-images/master/still.PNG',
      webp: 'http://cdn.rawgit.com/59naga/fixture-images/master/still.WEBP',

      jpg:  'http://cdn.rawgit.com/59naga/fixture-images/master/still.JPG',
      jxr:  'http://cdn.rawgit.com/59naga/fixture-images/master/still.JXR',
      bmp:  'http://cdn.rawgit.com/59naga/fixture-images/master/still.BMP',
      psd:  'http://cdn.rawgit.com/59naga/fixture-images/master/still.PSD',
      tif:  'http://cdn.rawgit.com/59naga/fixture-images/master/still.TIF',
    },
  },
  https: {
    animated: {
      gif:  'https://cdn.rawgit.com/59naga/fixture-images/master/animated.GIF',
      png:  'https://cdn.rawgit.com/59naga/fixture-images/master/animated.PNG',
      webp: 'https://cdn.rawgit.com/59naga/fixture-images/master/animated.WEBP',
    },
    still: {
      gif:  'https://cdn.rawgit.com/59naga/fixture-images/master/still.GIF',
      png:  'https://cdn.rawgit.com/59naga/fixture-images/master/still.PNG',
      webp: 'https://cdn.rawgit.com/59naga/fixture-images/master/still.WEBP',

      jpg:  'https://cdn.rawgit.com/59naga/fixture-images/master/still.JPG',
      jxr:  'https://cdn.rawgit.com/59naga/fixture-images/master/still.JXR',
      bmp:  'https://cdn.rawgit.com/59naga/fixture-images/master/still.BMP',
      psd:  'https://cdn.rawgit.com/59naga/fixture-images/master/still.PSD',
      tif:  'https://cdn.rawgit.com/59naga/fixture-images/master/still.TIF',
    },
  },
};