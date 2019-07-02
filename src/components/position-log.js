AFRAME.registerComponent('position-log', {
  schema: {

  },
  init: function() {
    this.throttledFunction = AFRAME.utils.throttle(this.everySecond, 1000, this);
//          this.last = this.el.getAttribute('position');
    this.lastPosition = new THREE.Vector3();
    this.lastPosition.copy(this.el.object3D.position);
    this.velocity = new THREE.Vector3();
    this.speed = 0;
    this.lastSpeed = 0;
    this.passengers = 0;
    this.acceleration = 0;
  },
  everySecond: function() {

    AFRAME.log("******* ENTITY CONSOLE LOG *******\nCurrent Position", 'bus1');
    AFRAME.log(this.el.object3D.position, 'bus1');
    // AFRAME.log("Previous Position");
    // AFRAME.log(this.lastPosition);
    AFRAME.log("Velocity (m/s)", 'bus1');
    this.velocity.subVectors(this.el.object3D.position, this.lastPosition);
    AFRAME.log(this.velocity, 'bus1');

    this.speed = this.velocity.length()
    AFRAME.log("Speed: " + this.speed + " m/s", 'bus1');
    this.acceleration = this.speed - this.lastSpeed;
    AFRAME.log("Acceleration: " + this.acceleration + " m/s^2", 'bus1');

    AFRAME.log("Passengers: " + AFRAME.scenes[0].systems.state.state.game.bus1Peeps, 'bus1');

    // this.speed = Math.sqrt(Math.pow(this.velocity.getComponent(0), 2) + Math.pow(this.velocity.getComponent(1), 2) + Math.pow(this.velocity.getComponent(2), 2));
    // AFRAME.log(this.speed);

    this.lastPosition.copy(this.el.object3D.position);
    this.lastSpeed = this.speed;

  },
  tick: function(){
    this.throttledFunction();  // Called once a second.
  },
});
