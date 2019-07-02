
// handle visual display of bus stop peeps based on number of peeps
AFRAME.registerComponent('draw-stop-peeps', {
  schema: {
    stopPeeps: {type: 'number', default: 0},
    boardingPeepId: {type: 'string'}
  },
  init: function () {
    // really inity
    this.myTimer = 0;
  },
  update: function (oldData)  {
    var peepsDelta = this.data.stopPeeps - oldData.stopPeeps;

    if (peepsDelta === 1) {
      document.getElementById(this.data.boardingPeepId).removeAttribute("animation__alight");
      document.getElementById(this.data.boardingPeepId).setAttribute("animation__alight", "property: object3D.position.x; easing: linear; from: -4; to: 0; dur: 1000");
      if (this.myTimer) {
        clearTimeout(this.myTimer);
      }
      var that = this;
      this.myTimer = setTimeout(
        function() {
          that.removePeeps()
          that.buildPeeps()
        }, 1000);
      return;
    }

    this.removePeeps()
    this.buildPeeps()

    if (peepsDelta === -1) {
      document.getElementById(this.data.boardingPeepId).emit('startBoarding');
      }
  },
  remove: function () {
    this.removePeeps();
  },
  buildPeeps: function () {
    for (i=0; i < this.data.stopPeeps; i++) {
      var peepEl = document.createElement('a-entity');
      peepEl.setAttribute("mixin", "peep1 bounce");
      this.el.appendChild(peepEl);
      peepEl.setAttribute("class", "peeps");
      peepEl.setAttribute("position", "0 0.2 " + i);
      peepEl.setAttribute("rotation", "0 270 0");
    }
  },
  removePeeps: function () {
   // var myNode = document.getElementById("peepsParent");
    var myNode = this.el;
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        // console.log("ONE REMOVED");
    }
  }
});

// passengers board the bus if bus is within threshold distance of target bus stop
AFRAME.registerComponent('board', {
  schema: {
    delay: {type: 'number', default: 1000},
    target: {type: 'string', default: "bus-stop"},
    distance: {type: 'number', default: 2},
    capacity: {type: 'number', default: 10},
    busPeeps: {type: 'number', default: 0},
    stopPeeps: {type: 'number', default: 0}
  },
  init: function () {
    this.throttledFunction = AFRAME.utils.throttle(this.everySecond, this.data.delay, this);
    this.comparisonVector = new THREE.Vector3();
    this.positionDelta = Number(this.data.distance) + 1;
    this.targetEl = document.querySelector("#" + this.data.target);
    this.positionThis = new THREE.Vector3();
    this.positionTarget = new THREE.Vector3();
  },
  everySecond: function() {
    // if distance between this element and the target element are less than distance
    // AND if current passengers is less than capacity
    // THEN subtract 1 passenger from target bus stop and add 1 passenger to bus

    // Set positionThis and positionTarget based on current location
    this.el.object3D.getWorldPosition(this.positionThis);
    this.targetEl.object3D.getWorldPosition(this.positionTarget);

    this.comparisonVector.subVectors(this.positionThis, this.positionTarget);
    this.positionDelta = this.comparisonVector.length();
    // console.log(this.positionDelta);

    // if bus is close enough to bus stop
    if (this.positionDelta < Number(this.data.distance)) {
      var busFull = Number(this.data.busPeeps) == Number(this.data.capacity);
      if (!busFull) {
        var stopEmpty = Number(this.data.stopPeeps) == 0;
        if (!stopEmpty) {
          AFRAME.scenes[0].emit('increaseBus1Peeps');
          AFRAME.scenes[0].emit('decreaseStop1Peeps');
          AFRAME.log("1 PEEPS BOARDED", 'bus1');
        } else {
          AFRAME.log("Stop Empty", 'bus1');
        }
      } else {
        AFRAME.log("Bus Full", 'bus1');
      }
    }
  },
  tick: function(){
    this.throttledFunction();  // Called once a second.
  },
});


// passengers alight the bus if bus is within threshold distance (in m) of target bus stop
AFRAME.registerComponent('alight', {
  schema: {
    delay: {type: 'number', default: 1000},
    target: {type: 'string', default: "bus-stop"},
    distance: {type: 'number', default: 2},
    busPeeps: {type: 'number', default: 0}
  },
  init: function () {
    this.throttledFunction = AFRAME.utils.throttle(this.everySecond, this.data.delay, this);
    this.comparisonVector = new THREE.Vector3();
    this.positionDelta = Number(this.data.distance) + 1;
    this.targetEl = document.querySelector("#" + this.data.target);
    this.positionThis = new THREE.Vector3();
    this.positionTarget = new THREE.Vector3();
  },
  everySecond: function() {
    // if distance between this element and the target element are less than distance
    // AND if current passengers > 0
    // THEN subtract 1 passenger from this bus and add 1 to target bus stop

    // Set positionThis and positionTarget based on current location
    this.el.object3D.getWorldPosition(this.positionThis);
    this.targetEl.object3D.getWorldPosition(this.positionTarget);

    this.comparisonVector.subVectors(this.positionThis, this.positionTarget);
    this.positionDelta = this.comparisonVector.length();
    // console.log(this.positionDelta);

    // if bus is close enough to bus stop
    if (this.positionDelta < Number(this.data.distance)) {
      var busEmpty = Number(this.data.busPeeps) <= 0;
      if (!busEmpty) {
        AFRAME.scenes[0].emit('decreaseBusPeeps', {target: "bus1"});
        AFRAME.scenes[0].emit('increaseStop2Peeps', {target: "stop2"});
        AFRAME.scenes[0].emit('increaseBus1Score', {target: "bus1"});
        AFRAME.log("1 PEEPS ALIGHTED", 'bus1');
      } else {
        AFRAME.log("Bus Empty!", 'bus1');
      }
    }
  },
  tick: function(){
    this.throttledFunction();  // Called once a second.
  },
});
