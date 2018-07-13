# projector-playground
Experiments with WebXR using a projector, HTC Vive, and Networked A-Frame

# What you need
* A PC with HTC Vive.
* A projector mounted about 1.5 meters off the ground pointing downward at the floor.
* Optional - a separate computer to feed the projector (or can use Vive PC for this)

# Instructions
* clone repo, npm install, npm start
* On a PC with HTC Vive, use your favorite webvr enabled browser like Firefox or Supermedium to navigate to localhost:8080/index.html (This uses local webrtc node.js server to send controller and headset position)
* On a computer hooked up to the projector, use any browser (webvr support not required) to open localhost:8080/vive-calibration.html
* Use the 2 controllers to specify 2 opposite corners of your the projected screen area from the projector pointing down at the floor.
* The bounds of the screen are now defined. (What's next?)
* Change view of projector screen output to match actual location.
