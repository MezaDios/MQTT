var mqtt = require('mqtt')
var publisher  = mqtt.connect('mqtt://test.mosquitto.org')
 
publisher.on('connect', function () {
  publisher.subscribe('tareas')
})

setInterval(function publish(){
  publisher.publish('tareas/4K', 'Tarea MQTT')
  publisher.publish('tareas/4K', 'Tarea SDN')
  publisher.publish('tareas/4K', 'Tarea xAPI')
  publisher.publish('tareas/4J', 'Tarea SNMP')
  publisher.publish('tareas/4J', 'Tarea Exposición')
  publisher.publish('tareas/4J', 'Tarea CoAP')
  publisher.publish('tareas/4D', 'Tarea Bee')
  publisher.publish('tareas/4D', 'Tarea Bluetooth')
  publisher.publish('tareas/4D', 'Tarea Exp')
  publisher.publish('tareas/', "Tarea para todos")
  console.log('Mensajes enviados con éxito')
}, 5000)