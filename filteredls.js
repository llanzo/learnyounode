/**
 * Created by llanzo on 1/12/15.
 */
var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extension = process.argv[3]

var callme = function(err, files) {
    files.map(function(thefile) {
        console.log(thefile);
    });


}
if(dir && extension) {
    var files = fs.readdir(dir, function(err, files) {
        if(err) {
            console.log(err);
            return err;
        }

        callme(files);
    });
}
else {
    console.log('please enter a path and file extension as arguments')
}


/**
 * This should print out the names of files passed @files
 * which have file extensions matching the 2nd command line argument
 * NOTE, 2nd command line argument should not include a period or dot '.'
 * @param err
 * @param files
 */
var callme = function(files) {
    files.map(function(thefile) {
        if(path.extname(thefile) == '.' + extension)
        console.log(thefile);
    });


}

/**
 var fs = require('fs')
 var path = require('path')

 fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/
