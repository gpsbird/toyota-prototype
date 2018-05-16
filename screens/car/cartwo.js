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
        width: 300,
        height: 500
    }
});

export default class Car extends React.Component {
    requestId: *;
    state = {
        progress: 0,
        error: null
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
        //renderer.setClearColor(0x000000, 1);
        //renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));

        let camera, scene, loadModel, manager, onProgress;

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
                //console.log(Math.round(percentComplete, 2) + '% downloaded');
            }
        };


        loadModel = (name) => {
            return new Promise((resolve, reject) => {
                const mtlpath = 'https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/models%2FJWRed.mtl?alt=media&token=f8f5bc17-ddcc-4e63-9013-5dafe6c2c235';
                const objpath = 'https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/models%2FJWRed.obj?alt=media&token=45371ad5-a588-4a75-af46-48d7fc342df5';
                const mtlLoader = new THREE.MTLLoader();

                mtlLoader.setCrossOrigin(true);
                //mtlLoader.setPath(path);
                mtlLoader.load(mtlpath, (materials) => {
                    materials.preload();
                    const objLoader = new THREE.OBJLoader(manager);
                    objLoader.setMaterials(materials);
                    //objLoader.setPath(path);
                    objLoader.load(objpath, object => resolve(object), undefined, xhr => reject(xhr));
                }, onProgress, xhr => reject(xhr));
            });
        }


        function init() {
            camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1100);
            camera.position.y = 150;
            camera.position.z = 500;
            scene = new THREE.Scene();

            loadModel('JWRed').then((mesh) => {
                scene.add(mesh);
            }).catch((reason) => {
                //console.log('Error here: ' + reason);
                that.setState({
                    //error: Object.keys(reason).join(',')
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
                <Text>{this.state.progress} % downloaded</Text>
                <WebGLView
                    style={styles.webglView}
                    onContextCreate={this.onContextCreate}
                />
                <Text>{this.state.error}</Text>
            </View>
        );
    }
}
