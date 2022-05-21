const path = require('path');
const fs = require('fs');
const way = path.join(__dirname, 'text.txt');

const stream = new fs.ReadStream(way, {
  encoding: 'utf-8',
});

stream.on('readable', function () {
  const data = stream.read();
  console.log(data);
});

stream.on('end', function () {
  console.log('Движемся дальше!');
});
