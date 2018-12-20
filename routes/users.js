var express = require('express');
var router = express.Router();
//const assistant = require('../modules/assistant.js')
var AssistantV2 = require('watson-developer-cloud/assistant/v2');
AssistantV2.CreateSessionParams={ assistant_id: 'ce324ac0-abef-47b4-9026-fc373f833ca4' }
var assistant = new AssistantV2({
  version: '2018-11-08',
  iam_apikey: 'lcq6io3s8vj99VI23NLAhUIh9qumCL77ZWgXWItSPWfz',
})
assistant.PROXY = process.env.PROXY

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/start', function(req,res,next) {
  assistant.createSession({
    assistant_id: 'ce324ac0-abef-47b4-9026-fc373f833ca4', 
    function (err, response) {
      if(err) console.log(err)
      console.log(JSON.stringify(response, null, 2))
    }  
  })
})

module.exports = router;
