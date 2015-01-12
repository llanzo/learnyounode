/**
Get the arguments passed in at the command line
*/
var arguments = process.argv.slice(2);
//console.log(arguments);

var sum = 0;
arguments.map(function(argument) {
	sum += Number(argument);
});

//console.log("The sum is: " + sum);
console.log(sum);

/**OFFICIAL SOLUTION
    var result = 0
    
    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i])
    
    console.log(result)
*/
