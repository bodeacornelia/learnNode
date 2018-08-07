var fs = require('fs')
var path = require('path');

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

getDirFiles(process.argv[2], process.argv[3]);
