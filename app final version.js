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

var flag = 0
var times = 0

socketio.listen(server).on('connection', function (socket) {
       socket.on('message', function (msg) {
           console.log('Message Received: ', msg);
           socket.broadcast.emit('message', msg);

if (times == 0) {
  var motion = new five.Motion(3);
  var start,
    end,
    motiontime
  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function() {
    if (flag == 1) {
      led.on();
    start = Date.now();
    console.log("motionstart");}
    
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function() {
    if (flag == 1) {
    led.off();
    end = Date.now();
    console.log("motionend");}
    if (flag == 1) {
     motiontime = end - start
  if (motiontime >= 5000) {
    //event.preventDefault();
    console.log('long motion')
    socket.broadcast.emit("long motion")
    ;
    }
  else 
  {
  //event.preventDefault();
  socket.broadcast.emit("short motion")
  console.log('short motion');
}
    }

  });
  times = times + 1
}
if ( msg == 'motion on')
{ 
  flag = 1
 //var iosocket = require('socket.io');
  // Create a new `motion` hardware instance.
  socket.broadcast.emit("sensor on")

  

  // "data" events are fired at the interval set in opts.freq
  // or every 25ms. Uncomment the following to see all
  // motion detection readings.
  // motion.on("data", function(data) {
  //   console.log(data);
  // });
 
}

else if ( msg == 'motion off')
{
  
  socket.broadcast.emit("sensor off")
  flag = 0
  
  console.log('motion off')

}


else if ( msg == 'led on')
{
socket.broadcast.emit("led on")
console.log("led on");
led.on();
}




else if ( msg == 'led off')
{
socket.broadcast.emit("led off")
console.log("led off");
led.off();
};


});
});
});
