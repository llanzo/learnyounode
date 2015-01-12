/**
 * Created by llanzo on 1/12/15.
 */
var http = require('http');
var bl = require('bl');
var links = process.argv.slice(2);

var theBuff = new bl();
var linkIndex = 0;
var callback = function(theLink, nextcall) {
    http.get(theLink, function(res) {
        res.setEncoding('utf8');
        res.on('error', function(err) {
            console.log("error occured: " + err.message);
            //TODO:should I go to the next one on error?
            nextcall();
        } );
        //res.on('data', function(chi) {
        //    callback(chi)
        //});
        res.on('end', function(data, nextcall) {
            theBuff.append(data);
            nextcall();
        });

    }).on('error', function(e) {
        console.log("error occured: " + e.message);
        nextcall()
    });
    //theBuff.append(response);
    //console.log(theBuff.length);
    //console.log(theBuff.toString());
}
var lastcall = function() {
    //console.log(theBuff.length);
    //console.log(theBuff.toString());
    theBuff = new bl();

}

var newCallBack = function(theLink) {
    if(theLink) {
        theBuff = new bl();
        http.get(theLink, function(res) {
            //res.setEncoding('utf8');
            res.on('error', function(err) {
                //console.log("error occured: " + err.message);
                //TODO:should I go to the next one on error?
                newCallBack(links.shift());
            } );
            res.on('data', function(chi) {
                theBuff.append(chi);
                //console.log("got data, will append and shift")
            });
            res.on('end', function(data) {
                finalDestination();
                //console.log(theBuff.slice(0, theBuff.length - 1).toString());
                //console.log("got end, will append and shift")
                //newCallBack(links.shift());
            });

        }).on('error', function(e) {
            console.log("error occured: " + e.message);
            newCallBack(links.shift());
        });

    }
    else {
        //console.log("The end is near");
       // lastcall();
    }
}
var finalDestination = function() {
    console.log(theBuff.toString());
    theBuff = new bl();
    newCallBack(links.shift() );
}
////I'm thinking a for loop might not be the best solution.
//if(links && links.length >= 3) {
//    for(var i = 0; i < links.length; i++) {
//        if(i == (links.length - 1) ) {
//            callback(links[i], lastcall);
//        }
//        else {
//            callback(links[i], callbackd);
//        }
//    }
//
//}
//else {
//    console.log("Please enter a link to get as an argument to this program");
//}
//
//var determineCall = function() {
//}

//I'm thinking a for loop might not be the best solution.
if(links) {
   //console.log(links);
   newCallBack(links.shift());
}
else {
    console.log("Please enter a link to get as an argument to this program");
}

/**OFFICIAL SOLUTION
 var http = require('http')
 var bl = require('bl')
 var results = []
 var count = 0

 function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

 function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3) // yay! we are the last one!
            printResults()
        }))
      })
    }

 for (var i = 0; i < 3; i++)
 httpGet(i)
*/