var num = 0;



var fs =require('fs')
         , http=require('http')
         , socketio=require('socket.io');






var server=http.createServer(function(req, res) {
            res.writeHead(200, { 'Content-type': 'text/html'});
            res.end(fs.readFileSync(__dirname+'/index.html'));
            }).listen(8080, function() {
            console.log('Listening at: http://localhost:8080');
 });


var five = require("johnny-five");
var board = new five.Board();	
board.on("ready", function() {
var led = new five.Led(13);	




socketio.listen(server).on('connection', function (socket) {
       socket.on('message', function (msg) {
           console.log('Message Received: ', msg);
           socket.broadcast.emit('message', msg);


if ( msg == 'motion on')
{

  // Create a new `motion` hardware instance.
  var motion = new five.Motion(3);

  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function() {
    led.on();
    console.log("motionstart");
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function() {
    led.off();
    console.log("motionend");
  });

  // "data" events are fired at the interval set in opts.freq
  // or every 25ms. Uncomment the following to see all
  // motion detection readings.
  // motion.on("data", function(data) {
  //   console.log(data);
  // });
}

else if ( msg == 'motion off')
{
console.log("motion off");
var board = new five.Board();	
board.on("ready", function() {
var led = new five.Led(13);	

}
)
}


else if ( msg == 'led on')
{
console.log("led on");
led.on();
}




else if ( msg == 'led off')
{
console.log("led off");
led.off();
};


});

});

});







