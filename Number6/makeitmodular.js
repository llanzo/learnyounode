/**
 * Created by llanzo on 1/12/15.
 */
var mod = require('./filey');

var dir = process.argv[2];
var extension = process.argv[3]

var callback = function(err, data) {
    if(err) {
        console.log("There was an error: " +err);
        return err;
    }
    data.map(function(item) {
            console.log(item);
        }
    );
}

if(dir && extension) {
    mod(dir, extension, callback)
}
else {
    console.log('please enter a path and file extension as arguments')
}

/**OFFICIAL SOLUTION
 var filterFn = require('./solution_filter.js')
 var dir = process.argv[2]
 var filterStr = process.argv[3]

 filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)

      list.forEach(function (file) {
        console.log(file)
      })
    })
*/
