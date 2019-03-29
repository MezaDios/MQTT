var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
 
client.on('connect', function () {
  client.subscribe('+/4K')
})
 
client.on('message', function (topic, message) {
  console.log(`message ${message.toString()} received from ${topic.toString()}`)
})