var express = require('express');
var router = express.Router();
var OnesignalService = require('../service/OnesignalService');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/notification',async function(req, res, next) {
  let {body} = req;
  // var data = { 
  //   app_id: "a5b1f657-447e-4dc4-85d9-77d4a4efa1c2",
  //   contents: {"en": "English Message"},
  //   included_segments: ['Active Users']
  //   // include_player_ids: ["cf042f8c-558e-420e-a2e5-1d5c87bb5ac7"]
  //   // filters: [
  //   //       {"field": "tag", "key": "level", "relation": "=", "value": "10"}, 
  //   //       {"operator": "OR"}, {"field": "amount_spent", "relation": ">", "value": "0"}
  //   //   ]
  // };
  const response = await OnesignalService.createNotification(body);
  res.json(response);
});
router.get('/notification/:notificationId',async function(req, res, next) {
  let {params} = req;
  const response = await OnesignalService.viewNotification(params);
  res.json(response);
});
router.get('/notifications',async function(req, res, next) {
  let {query} = req;
  const response = await OnesignalService.viewNotifications(query);
  res.json(response);
});
router.post('/add-device',async function(req, res, next) {
  let {body} = req;
  const response = await OnesignalService.addDevice(body);
  res.json(response);
});
router.get('/view-devices',async function(req, res, next) {
  let {query} = req;
  const response = await OnesignalService.viewDevices(query);
  res.json(response);
});
router.get('/view-device/:device_id',async function(req, res, next) {
  let {device_id} = req.params;
  const response = await OnesignalService.viewDevice(device_id);
  res.json(response);
});
router.put('/edit-devices/:device_id',async function(req, res, next) {
  let {body} = req;
  let {device_id} = req.params;
  const response = await OnesignalService.editDevice(device_id,body);
  res.json(response);
});
module.exports = router;
