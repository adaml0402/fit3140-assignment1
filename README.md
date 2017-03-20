# fit3140-assignment1
function
the project include a server and a website which allow user to control led and motion sensor connected to arduion uno board through the website. the website will desplay current status of led and motion sensor, and will display nunmer of motions including long motions and short motions.

structure
this project include 5 parts physical layer, data link layer, transport layer,presentation layer and application layer.
physical layer is the arduino board and the sensor 
data link allow the applicatiuon and index file create data to transfer between server and the website
transport layer make both the application and website could send and receive data
presentation layer displays status of led and sensor, and motion detected
application layer allow user control led and sensor

used packages:
johnny five
socket io
arduino ide
node js

LED connected to pin 13
PIR connected to pin 3
