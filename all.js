var fs= require('fs');
var path= require('path');

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
  path: {
    animated: {
      gif:  path.join(__dirname,'animated.GIF'),
      png:  path.join(__dirname,'animated.PNG'),
      webp: path.join(__dirname,'animated.WEBP'),
    },
    still: {
      gif:  path.join(__dirname,'still.GIF'),
      png:  path.join(__dirname,'still.PNG'),
      webp: path.join(__dirname,'still.WEBP'),

      jpg:  path.join(__dirname,'still.JPG'),
      jxr:  path.join(__dirname,'still.JXR'),
      bmp:  path.join(__dirname,'still.BMP'),
      psd:  path.join(__dirname,'still.PSD'),
      tif:  path.join(__dirname,'still.TIF'),
    },
  },
  http: {
    animated: {
      gif:  'http://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/animated.GIF',
      png:  'http://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/animated.PNG',
      webp: 'http://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/animated.WEBP',
    },
    still: {
      gif:  'http://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.GIF',
      png:  'http://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.PNG',
      webp: 'http://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.WEBP',

      jpg:  'http://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.JPG',
      jxr:  'http://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.JXR',
      bmp:  'http://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.BMP',
      psd:  'http://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.PSD',
      tif:  'http://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.TIF',
    },
  },
  https: {
    animated: {
      gif:  'https://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/animated.GIF',
      png:  'https://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/animated.PNG',
      webp: 'https://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/animated.WEBP',
    },
    still: {
      gif:  'https://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.GIF',
      png:  'https://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.PNG',
      webp: 'https://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.WEBP',

      jpg:  'https://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.JPG',
      jxr:  'https://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.JXR',
      bmp:  'https://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.BMP',
      psd:  'https://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.PSD',
      tif:  'https://cdn.rawgit.com/59naga/fixture-images/e916c9fcaa8259cc27d733ba89abe4776ab4e955/still.TIF',
    },
  },
};