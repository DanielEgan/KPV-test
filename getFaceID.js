var Client = require('node-rest-client').Client;
 
var client = new Client();

var args = {
    data: {"url":"https://devintxcontent.blob.core.windows.net/showcontent/speakers/daniel-egan.jpg" }, 
    headers: { "Ocp-Apim-Subscription-Key": "c3c69602aecd442987f68ba9447a7be0" } // request headers 
};

 
client.post("https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
});


//faceId: '177fad85-b474-4d4f-b69e-9a0cef1192f3'
//faceId: '7f27867a-c94e-454f-9b01-cdc9b8c49d8f'