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

sum(process.argv);
