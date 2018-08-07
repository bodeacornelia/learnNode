var fs = require('fs');

function asyncGetFileLinesNumber(){
  let content = fs.readFile("./simpleFile.txt", (err, data) => {
    if(err){
      console.log(err);
    }else{
      return data.toString().split('\n');
    }
  });
}

asyncGetFileLinesNumber();
