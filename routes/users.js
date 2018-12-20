var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');
var assistant = new watson.AssistantV2({
  version: '2018-11-08',
  iam_apikey: 'lcq6io3s8vj99VI23NLAhUIh9qumCL77ZWgXWItSPWfz',
  headers: {
    'X-Watson-Learning-Opt-Out': 'true'
  }
})
// assistant.PROXY = process.env.PROXY

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/start', function (req, res, next) {
  return assistant.createSession({
    assistant_id: 'WY0p8j2AS4KogXWaHfyASeUDE5qqyvkmqWzNMhONwHtX',
    function(err, response) {
      if (err) console.log(err)
      console.log(JSON.stringify(response, null, 2))
    }
  })
})

module.exports = router;
