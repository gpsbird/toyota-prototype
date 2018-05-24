const THREE = require("three");
global.THREE = THREE;
if (!window.addEventListener)
    window.addEventListener = () => { };
require('three/examples/js/controls/OrbitControls.js');
require('three/examples/js/loaders/OBJLoader.js');
require('three/examples/js/loaders/MTLLoader.js');

if (!console.time) {
    console.time = () => { };
}
if (!console.timeEnd) {
    console.timeEnd = () => { };
}

// console.ignoredYellowBox = [
//     'THREE.WebGLRenderer',
//     'THREE.WebGLProgram',
// ];

export default THREE;