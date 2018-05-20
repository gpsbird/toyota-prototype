import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { WebGLView } from "react-native-webgl";
import THREE from "../../three";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    webglView: {
        width: width,
        height: height
    }
});

export default class Monkey extends React.Component {
    requestId: *;
    state = {
        progress: 0,
        error: null
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { props, state } = this;
        return false;
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.requestId);
    }


    onContextCreate = (gl: WebGLRenderingContext) => {
        let that = this;
        const rngl = gl.getExtension("RN");

        const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
        const renderer = new THREE.WebGLRenderer({
            canvas: {
                width,
                height,
                style: {},
                addEventListener: () => { },
                removeEventListener: () => { },
                clientHeight: height
            },
            context: gl
        });
        renderer.setSize(width, height);
        renderer.setClearColor(0x555555);

        let camera, scene, manager, onProgress;

        manager = new THREE.LoadingManager();
        manager.onProgress = (item, loaded, total) => {
            console.log(item, loaded, total);
        };

        onProgress = (xhr) => {
            if (xhr.lengthComputable) {
                let percentComplete = xhr.loaded / xhr.total * 100;
                that.setState({
                    progress: Math.round(percentComplete, 2)
                });
            }
        };


        function loadModel() {
            return new Promise((resolve, reject) => {
                const monkey = 'https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/models%2Fnew-monkey.json?alt=media&token=943840ed-786f-48c8-ab36-c588e5620e83';
                const loader = new THREE.JSONLoader(manager);
                loader.load(monkey, (geometry, materials) => resolve({ geometry, materials }), onProgress, xhr => reject(xhr));
            });
        }


        function init() {
            camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 3000);
            scene = new THREE.Scene();

            let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);
            let pointLight = new THREE.PointLight(0xffffff, 0.5);

            scene.add(pointLight);

            // let light_one = new THREE.DirectionalLight(0xffffff);
            // light_one.position.set(1, 1, 1);
            // scene.add(light_one);

            // let light_two = new THREE.DirectionalLight(0x002288);
            // light_two.position.set(- 1, - 1, - 1);
            // scene.add(light_two);

            // let light_three = new THREE.AmbientLight(0x222222);
            // scene.add(light_three);

            loadModel().then((response) => {

                let { geometry } = response;
                let material = new THREE.MeshLambertMaterial({ color: 0xf3ffe2 });
                let mesh = new THREE.Mesh(geometry, material);

                scene.add(mesh);
                mesh.position.set(0, 0, -5);

            }).catch((reason) => {

                that.setState({
                    error: reason.currentTarget._response
                });

            });

        }
        const animate = () => {

            this.requestId = requestAnimationFrame(animate);

            renderer.render(scene, camera);

            gl.flush();
            rngl.endFrame();
        };

        init();
        animate();
    };
    render() {
        return (
            <View style={styles.container}>

                <WebGLView style={styles.webglView} onContextCreate={this.onContextCreate} />

            </View>
        );
    }
}
