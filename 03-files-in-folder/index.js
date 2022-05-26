const path = require('path');
const fs = require('fs');
const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, function (err, items) {
  for (let i = 0; i < items.length; i++) {
    let file = folderPath + '/' + items[i];

    fs.lstat(file, (err, stats) => {
      if(err) throw err; 
      else if (stats.isFile()){
        console.log(path.parse(file).name + ' - ' + path.extname(file) + ' - ' + stats['size'] + 'B');
      }
    });
  }
});

