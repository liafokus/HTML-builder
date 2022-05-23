const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'text.txt');

const { stdin, stdout } = process;
stdout.write('Как тебя зовут? \n');
stdin.on('data', data => {
  fs.writeFile(filePath, data, {'flag': 'a'}, err => {
    if(err){
      throw err;
    } else if(data.includes('exit')){
      stdout.write('Была рада знакомству!');
      process.exit();
    } 
  });
});
process.on('SIGINT', function() {
  console.log('\nДо скорой встречи!');
  process.exit();
});

