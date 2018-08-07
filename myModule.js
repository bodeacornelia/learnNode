var fs = require('fs')
var path = require('path');

var exports = module.exports = {};

exports.getDirFilesByExtension = function(dir, extension, callback){
  var newListDir = [];
  fs.readdir(dir,  (err, list) => {
    if(err){
      return callback(err);
    }else{
      for (let itemNow in list){
        if(path.extname(list[itemNow]) === "." + extension){
          newListDir.push(list[itemNow]);
        }
    }
    callback(null, newListDir);
  }
  })
}
