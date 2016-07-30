//var Client = require('node-rest-client').Client;
var fs = require('fs');
var path = require('path');
var request = require('request');
var querystring = require('querystring');


var imagesRoot = path.join('../', 'images');
var wavfile = 'sample.wav';  //path.join(imagesRoot,test.wav);
verifyProfile(wavfile,function(result){
    console.log(result);
});

    function verifyProfile(file, callback) {
        // List of tags requested, currently only looking for tags
        var params = querystring.stringify({
            verificationProfileId :'1470311b-5ead-4311-bce6-d4688959b911'
        });
        //TODO: Key should be held somewhere else
        var options = {
            url: 'https://api.projectoxford.ai/spid/v1.0/verify?' + params,
            headers: { 'Ocp-Apim-Subscription-Key': '5e29fb937bcb42698c1d6a3d69789a0f', 'Content-Type': 'multipart/form-data' },
            formData: {
                my_file: fs.createReadStream(file),
            }
        };
        request.post(options, function (err, httpResponse, body) {
            if (err)
                console.log('Error: ' + err);
            callback(JSON.parse(body));
        });
    }



// var args = {
//     data: fs.createReadStream(wavfile), 
//     parameters: {verificationProfileId :'1470311b-5ead-4311-bce6-d4688959b911' },
//     headers: { "Ocp-Apim-Subscription-Key": "5e29fb937bcb42698c1d6a3d69789a0f", "Content-Type": 'multipart/form-data' } // request headers 
// };

// client.post("https://api.projectoxford.ai/spid/v1.0/verify", args, function (data, response) {
//     // parsed response body as js object 
//     console.log(data);
//     // raw response 
//     //console.log(response);
// });


//"identificationProfileId": "697ac51e-c36b-4fe2-a32c-085c639d0e83"
//  "verificationProfileId": "c137cfd9-fe5d-4e1b-83b3-9aad5bf3fecb"

//profile id create in windows app
//Using profile Id: 1470311b-5ead-4311-bce6-d4688959b911

//phrase is my voice is my passport verify me