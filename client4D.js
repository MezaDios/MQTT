var mqtt = require('mqtt')
var client4d  = mqtt.connect('mqtt://test.mosquitto.org')
 
client4d.on('connect', function () {
  client4d.subscribe('+/4D')
})
 
client4d.on('message', function (topic, message) {
  console.log(`message ${message.toString()} received from ${topic.toString()}`)
})