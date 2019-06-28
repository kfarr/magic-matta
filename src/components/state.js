
const initialState = {
  controls: {
    bus1ControllerId: 2,
    bus2ControllerId: 3
  },
  layout: {
    rotationY: 270,
    positionY: -0.02,
    scale: 43
  },
  gameSettings: {
    detectionRadius: 2,
    busCapacity: 5,
    bus1Color: 'red',
    bus2Color: 'blue'
  },
  game: {
    bus1Peeps: 0,
    bus2Peeps: 0,
    stop1Peeps: 10,
    stop2Peeps: 0,
    bus1Score: 0,
    bus2Score: 0,
    menu: 'main'
  },
  thisDevice: {
    mode: 'client'
  }
}


// aframe-state-component definition.
AFRAME.registerState({
  // Initial state of our application. We have the current environment and the active menu.
  initialState: initialState,

  // State changes are done via events and are handled here.
  handlers: {
    resetGameState: function (state) {
      console.log("Reset Game State Requested");  
      Object.assign(state.game, initialState.game);
      AFRAME.scenes[0].systems.broadcast.socket.emit("message", "yo");
    },
    menuBack: function (state) {
     state.game.menu = 'main';
    },
    menuController: function (state) {
      state.game.menu = 'controller';
    },
    increaseBus1Score: function (state, action) {
      state.game.bus1Score += 1;
    },
    increaseBus2Score: function (state, action) {
      state.game.bus2Score += 1;
    },
    decreaseBusPeeps: function (state, action) {
      if (action.target === "bus1") {
        state.game.bus1Peeps -= 1;
      } else if (action.target == "bus2") {
        state.game.bus2Peeps -= 1;
      }
    },
    increaseBus1Peeps: function (state, action) {
      state.game.bus1Peeps += 1;
    },
    decreaseStop1Peeps: function (state, action) {
      state.game.stop1Peeps -= 1;
    },
    increaseStop1Peeps: function (state, action) {
      state.game.stop1Peeps += 1;
    },
    increaseStop2Peeps: function (state, action) {
      state.game.stop2Peeps += 1;
    },
    increaseBus1ControllerId: function (state, action) {
      state.controls.bus1ControllerId += 1;
    },
    decreaseBus1ControllerId: function (state, action) {
      state.controls.bus1ControllerId -= 1;
    },
    increaseLayoutRotationY: function (state, action) {
      state.layout.rotationY += 1;
    },
    decreaseLayoutRotationY: function (state, action) {
      state.layout.rotationY -= 1;
    },
    increaseLayoutPositionY: function (state, action) {
      state.layout.positionY += 0.01;
    },
    decreaseLayoutPositionY: function (state, action) {
      state.layout.positionY -= 0.01;
    },
    setServerMode: function (state, action) {
      state.thisDevice.mode = 'server';
    },
    setClientMode: function (state, action) {
      state.thisDevice.mode = 'client';
    },
  },
  computeState: function (newState, payload) {
    // effective distance (radius) to monitor for door zone collision based on scale of scene
    newState.computedDistance = Number(newState.gameSettings.detectionRadius) / Number(newState.layout.scale);
    newState.computedScaleString = (1 / Number(newState.layout.scale) + " ").repeat(3);
    newState.computedPositionString = "0 " + Number(newState.layout.positionY) + " 0";
    newState.computedRotationString = "0 " + Number(newState.layout.rotationY) + " 0";
    newState.computedScoreString = "";
    newState.computedCapacityString = "";
    // console.log(newState.computedPositionString);
  }
});

function keyListener(event){
  // console.log(event.key);
  if (event.key === "t") {AFRAME.scenes[0].emit('increaseGamePositionY')};
  if (event.key === "g") {AFRAME.scenes[0].emit('decreaseGamePositionY')};
  if (event.key === "y") {AFRAME.scenes[0].emit('increaseGameRotationY')};
  if (event.key === "h") {AFRAME.scenes[0].emit('decreaseGameRotationY')};
}

window.addEventListener('keypress', keyListener, false);
