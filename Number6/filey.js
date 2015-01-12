/**
 * Created by llanzo on 1/12/15.
 */
var fs = require('fs');
var path = require('path');

module.exports = function(location, extension, callback) {
    fs.readdir(location, function (err, files) {
        if (err) {
//  Removed the console statement since the callback should handle it
            //console.log("There was an error: " + err);
            return callback(err);
        }
        var matching_files = [];
        /**
         * Add the matching files a paramter passed to the callback
         */
        files.map(function(thefile) {
            if(path.extname(thefile) == '.' + extension) {
//Changed to push instead of unshift, becuase unshift cause order to to change.
            //matching_files.unshift(thefile);
            matching_files.push(thefile);
            }
        })
        callback(null, matching_files);
    })
}

/**OFFICAL SOLUTION
 solution_filter.js:

 var fs = require('fs')
 var path = require('path')

 module.exports = function (dir, filterStr, callback) {

      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }

*/
