var record = require('node-record-lpcm16'),
    fs     = require('fs');

var file = fs.createWriteStream('test.wav', { encoding: 'binary' });

record.start({
  sampleRate : 16000,
  threshold : 0.5,
  verbose : true
})
.pipe(file);