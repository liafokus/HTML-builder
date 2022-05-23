const path = require('path');
const fs = require('fs');
const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, function (err, items) {
  
  items.forEach(file => {
    console.log(path.parse(file).name + ' - ' + path.extname(file) + ' - ' );
  });
});
// fs.readdir(folderPath);

// const isFile = fileName => {
//   return fs.lstat(fileName).isFile();
// };
// fs.readdir(folderPath).map(fileName => {
//   return path.join(folderPath, fileName).filter(isFile);
// });

