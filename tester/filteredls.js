/**
 * Created by llanzo on 1/12/15.
 */
var fs = require('fs');

var dir = process.argv[2];

var callme = function(err, files) {
    files.map(function(thefile) {
        console.log(thefile);
    });


}

var files = fs.readdir(dir, function(err, files) {
    if(err) {
        console.log(err);
        return err;
    }

    callme(files);
});

/**
 * This should print out the names of txt files passed @files
 * @param err
 * @param files
 */
var callme = function(files) {
    files.map(function(thefile) {
        console.log(thefile);
    });


}