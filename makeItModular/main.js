var fs = require('fs')
var path = require('path');
var myModule = require('./myModule.js');

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
