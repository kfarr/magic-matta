function requireAll (req) { req.keys().forEach(req); }


require('aframe-particle-system-component');
require('aframe-environment-component');
require('aframe-gif-shader');
require('aframe-layout-component');
require('aframe-log-component');
require('aframe-look-at-component');
require('aframe-meshline-component');
require('aframe-orbit-controls');
require('aframe-particle-system-component');
require('aframe-proxy-event-component');
require('aframe-render-order-component');
require('aframe-slice9-component');
require('aframe-state-component');
require('aframe-super-hot-html-loader');
require('aframe-super-hot-loader');
require('aframe-template-component');

// Require all components.
requireAll(require.context('./components/', true, /\.js$/));

require('./scene.html');
