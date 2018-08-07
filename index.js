var fs = require('fs')
var path = require('path');
var myModule = require('./myModule.js');

function sum(argv){
  let total = 0;
  for(i = 2; i < argv.length; i++){
    total = total + Number(argv[i]);
  }
  console.log(total);
}

// sum(process.argv);

function getFileLinesNumber(){
  const content = fs.readFileSync("./simpleFile.txt").toString();
  const lines = content.split('\n');
  console.log(lines.length - 1);
}

// getFileLinesNumber();

function asyncGetFileLinesNumber(){
  let content = fs.readFile("./simpleFile.txt", (err, data) => {
    if(err){
      console.log(err);
    }else{
      return data.toString().split('\n');
    }
  });
}

// asyncGetFileLinesNumber();

function getDirFiles(dir, extension){
  fs.readdir(dir,  (err, list) => {
    if(err){
      console.log(err);
    }else{
      for (let itemNow in list){
        if(path.extname(list[itemNow]) === "." + extension){
          console.log(list[itemNow]);
        }
    }
    }
  })
}

// getDirFiles(process.argv[2], process.argv[3]);

var printDirList = function(err, list){
  if(err){
    console.log(err);
  }else{
    for (let itemNow in list){
      console.log(list[itemNow]);
    }
  }
}

myModule.getDirFilesByExtension(process.argv[2], process.argv[3], printDirList);
