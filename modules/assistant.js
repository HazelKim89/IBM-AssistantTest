// const request = require('request')
var AssistantV2 = require('watson-developer-cloud/assistant/v2');
AssistantV2.CreateSessionParams={ assistant_id: 'ce324ac0-abef-47b4-9026-fc373f833ca4' }
var assistant = new AssistantV2({
  version: '2018-11-08',
  iam_apikey: 'WY0p8j2AS4KogXWaHfyASeUDE5qqyvkmqWzNMhONwHtX',
})

// assistant.CreateSessionParams
baseURL = 'https://gateway.watsonplatform.net/assistant/api'
const proxy = process.env.PROXY
//if (proxy) options.proxy = proxy
assistant.PROXY = process.env.PROXY
module.exports = {
  createSession: () => {
    assistant.createSession({
      assistant_id: 'ce324ac0-abef-47b4-9026-fc373f833ca4', 
      function (err, response) {
        if(err) console.log(err)
        console.log(JSON.stringify(response, null, 2))
      }  
    })
  }
}


// Error handling
// assistant.method(params,
//   function (err, response) {
//     // The error will be the first argument of the callback
//     if (err.code == 404) {

//       // Handle Not Found (404) error
//     } else if (err.code == 413) {

//       // Handle Request Too Large (413) error
//     } else {
//       console.log('Unexpected error: ', err.code);
//       console.log('error:', err);
//     }
//   });


// Data Handling
// assistant.methodName({
//   parameters,
//   headers: {
//     'Custom-Header': '{header_value}'
//   }
// },
//   function (err, response) {
//     if (err) {
//       console.log('error:', err);
//     } else {
//       console.log(response);
//     }
//   }
// );

// options for request api
// const options = {
//   version: '2018-11-08',
//   iam_apikey: 'lcq6io3s8vj99VI23NLAhUIh9qumCL77ZWgXWItSPWfz',
//   assistant_id: 'ce324ac0-abef-47b4-9026-fc373f833ca4',
//   headers: {
//     'X-Watson-Learning-Opt-Out': 'true'
//   },
//   username: 'apikey',
//   password: 'lcq6io3s8vj99VI23NLAhUIh9qumCL77ZWgXWItSPWfz'
// }