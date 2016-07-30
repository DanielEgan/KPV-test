var Client = require('node-rest-client').Client;

var client = new Client();

var args = {
    data: {
        "faceId1": "177fad85-b474-4d4f-b69e-9a0cef1192f3",
        "faceId2": "7f27867a-c94e-454f-9b01-cdc9b8c49d8f"
    },
    headers: { "Ocp-Apim-Subscription-Key": "c3c69602aecd442987f68ba9447a7be0" } // request headers 
};


client.post("https://api.projectoxford.ai/face/v1.0/verify", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
});


//faceId: '177fad85-b474-4d4f-b69e-9a0cef1192f3'
//faceId: '7f27867a-c94e-454f-9b01-cdc9b8c49d8f'