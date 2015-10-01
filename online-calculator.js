//Start the HTTP library
var http = require('http');
var url = require('url');

//create and load HTTP server with NODE
http.createServer(function(req, res) {
   
    //get the query string value
    var qs = url.parse(req.url, true).query;
    
    //Parse the math method type as a float value
    var method = qs.method;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);
    
    console.log(method);
    //send an ok response to the browser header
    res.writeHead(200, { 'Content-Type': 'test-plain'})
    
    //Output the value to the screen based on URL sting

    if (method === 'add') {
        console.log(method);
        var total = x + y;
        res.write('<h1>Calculator</h1>Total: ' + x + ' + ' + y + ' = ' + total);
    } else if (method === 'subtract') {
        console.log(method);
        var total = x - y;
        res.write('<h1>Calculator</h1>Total: ' + x + ' - ' + y + ' = ' + total);
    } else if (method === 'multiply') {
        console.log(method);
        var total = x * y;
        res.write('<h1>Calculator</h1>Total: ' + x + ' X ' + y + ' = ' + total);
    } else if (method === 'divide') {
        console.log(method);
        var total = x / y;
        res.write('<h1>Calculator</h1>Total: ' + x + ' / ' + y + ' = ' + total);
    } else {
        res.write('<h1>Error</h1>Invalid value entered for method');
    }
   
    

    //end the response
    res.end();
    
      
}).listen(3000);

//the site will load at http://localhost:3000/tax-calculator.js?subtotal=X
console.log('The site is now running at http://localhost:3000')