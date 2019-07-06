// https://stackoverflow.com/questions/17558085/three-js-orthographic-camera/17567292#17567292
// ortho="width: 1; height 2; near: 0.25; far: 3;"

AFRAME.registerComponent('ortho', {
  schema: {
    width: {type: 'number', default: 1.6},
    height: {type: 'number', default: 0.9},
    near: {type: 'number', default: 0.25},
    far: {type: 'number', default: 2.0}
  },
  init: function () {
    var sceneEl = this.el.sceneEl;

    if (!sceneEl.hasLoaded) {
      sceneEl.addEventListener('loaded', this.init.bind(this));
      return;
    }

    this.originalCamera = sceneEl.camera;
    this.cameraParent = sceneEl.camera.parent;

    // var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, near, far );
    this.orthoCamera = new THREE.OrthographicCamera(
      this.data.width / -2,
      this.data.width / 2,
      this.data.height / 2,
      this.data.height / -2,
      this.data.near,
      this.data.far);

    this.cameraParent.add(this.orthoCamera);
    sceneEl.camera = this.orthoCamera;
  },
  update: function () {
    var sceneEl = this.el.sceneEl;
    var threeCamera = sceneEl.camera;
    threeCamera.left = this.data.width / -2;
    threeCamera.right = this.data.width / 2;
    threeCamera.top = this.data.height / 2;
    threeCamera.bottom = this.data.height / -2;
    threeCamera.near = this.data.near;
    threeCamera.far = this.data.far;
    threeCamera.updateProjectionMatrix();
    // document.querySelector("[camera]").object3D.children[1].updateProjectionMatrix()
    // document.querySelector("[camera]").object3D.children[1].top = 1
  },
  remove: function () {
    this.cameraParent.remove(this.orthoCamera);
    this.el.sceneEl.camera = this.originalCamera;
  }
});
