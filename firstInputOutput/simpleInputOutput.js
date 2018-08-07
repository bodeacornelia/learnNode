var fs = require('fs')

function getFileLinesNumber(){
  const content = fs.readFileSync("./simpleFile.txt").toString();
  const lines = content.split('\n');
  console.log(lines.length - 1);
}

getFileLinesNumber();
