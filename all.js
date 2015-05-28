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

    jpeg: fs.readFileSync(__dirname+'/still.JPEG'),
    jxr:  fs.readFileSync(__dirname+'/still.JXR'),
    bmp:  fs.readFileSync(__dirname+'/still.BMP'),
    psd:  fs.readFileSync(__dirname+'/still.PSD'),
    tiff: fs.readFileSync(__dirname+'/still.TIFF'),
  },
};