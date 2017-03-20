var five = require("johnny-five");
var board = new five.Board();	
board.on("ready", function() {
var led = new five.Led(13);	
  
  var motion = new five.Motion(3);


  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  
  motion.on("motionstart", function() {
    led.on();
    console.log("motionstart");
  });

  
  motion.on("motionend", function() {
    led.off();
    console.log("motionend");
  });

});
