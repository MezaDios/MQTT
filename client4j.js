var mqtt = require('mqtt')
var client4j  = mqtt.connect('mqtt://test.mosquitto.org')
 
client4j.on('connect', function () {
  client4j.subscribe('+/4J')
})
 
client4j.on('message', function (topic, message) {
  console.log(`message ${message.toString()} received from ${topic.toString()}`)
})