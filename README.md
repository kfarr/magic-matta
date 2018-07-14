# aframe-matta
Experiments with WebXR using a projector pointed at the floor, HTC Vive, and Networked A-Frame.

## Why?
* Experimenting with different input styles -- what can you do without buttons?
* XR experience that kids can see without needing headset
* Try to have "multimodal" experience (allow simultaneous headset and projector use with synced scene)
* Try to create a fun toy that can also teach things

## What you need
* A PC with HTC Vive.
* A projector mounted about 1.5 meters off the ground pointing downward at the floor.
* Optional - a separate computer to feed the projector (or can use Vive PC for this)

## Instructions
* clone repo, npm install, npm start
* On a PC with HTC Vive, use your favorite webvr enabled browser like Firefox or Supermedium to navigate to localhost:8080/index.html (This uses local webrtc node.js server to send controller and headset position)
* On a computer hooked up to the projector, use any browser (webvr support not required) to open [SERVER IP]:8080/client.html
* Use the 2 controllers to specify 2 opposite corners of your the projected screen area from the projector pointing down at the floor.
* The bounds of the screen are now defined. (What's next?)
* Change view of projector screen output to match actual location.

## Future ideas
* feature multiple minigames, switch by shaking controller
* drawing feature (like babypi), start drawing when controller is pointed up like a pen (small end down)
