var http = require('http');
    var bf = require('browser_fingerprint');

    // these are the default options
    var options = {
        cookieKey: "__browserFingerprint",
        toSetCookie: true,
        onlyStaticElements: false,
    };

    http.createServer(function (req, res) {
        bf.fingerprint(req, options, function(fingerprint, elementHash, cookieHash){

            cookieHash['Content-Type'] = 'text/plain' // append any other headers you want
            res.writeHead(200, cookieHash);
            var remoteAddress = req.connection.remoteAddress;
            var resp = "";
            resp += 'Your Browser Fingerprint: ' + fingerprint + " & IP: " + remoteAddress + "\r\n\r\n" ;
            for(var i in elementHash){
                resp += "Element " + i + ": " + elementHash[i] + "\r\n";
            }
            
            res.end(fingerprint);

            console.log('requset from ' + req.connection.remoteAddress + ', fingerprint -> ' + fingerprint);
        });
    }).listen(3000);

    console.log('Server running' + '\r\n');