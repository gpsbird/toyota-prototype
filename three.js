const THREE = require("three");
global.THREE = THREE;
if (!window.addEventListener)
    window.addEventListener = () => { };
require("three/examples/js/controls/TrackballControls");
require("three/examples/js/controls/OrbitControls.js");
export default THREE;