var Client = require('node-rest-client').Client;
 
var client = new Client();

var args = {
    data: {"locale":"en-US" }, 
    headers: { "Ocp-Apim-Subscription-Key": "5e29fb937bcb42698c1d6a3d69789a0f", "Content-Type": "application/json" } // request headers 
};

 
client.post("https://api.projectoxford.ai/spid/v1.0/identificationProfiles", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
});


//"identificationProfileId": "697ac51e-c36b-4fe2-a32c-085c639d0e83"
//  "verificationProfileId": "c137cfd9-fe5d-4e1b-83b3-9aad5bf3fecb"

//profile id create in windows app
//Using profile Id: 1470311b-5ead-4311-bce6-d4688959b911

//phrase is my voice is my passport verify me

