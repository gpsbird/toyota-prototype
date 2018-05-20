import React from 'react';
import THREE from "../../three";
import Touches from '../utils/Touches';
import { ThreeView } from './index';
import { View } from 'react-native';
import Files from '../../Files';
import { car, dodge, body } from '@assets/images';
import _ from 'lodash';

class Scene extends React.Component {

    state = {
        color: null
    }

    static defaultProps = {
        onLoadingUpdated: (({ loaded, total }) => { }),
        onFinishedLoading: (() => { }),
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { props } = this;
        if (props !== nextProps) {
            return true;
        }

        return false;

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color }
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.color !== this.props.color) {
            this.changeColor(this.props.color);
        }
    }

    changeColor = (color) => {

        if (this.body !== null) {

            switch (color) {
                case 'blue':
                    this.body.color.setHex(0x0929eb);
                    break;
                case 'red':
                    this.body.color.setHex(0xeb1e09);
                    break;
                default:
                    this.body.color.setHex(0xffffff);
            }

        }
    }

    render() {
        return (
            <ThreeView
                onContextCreate={this.onContextCreate}
                render={this.animate}
            />
        );
    }


    onContextCreate = async (gl) => {

        const { innerWidth: width, innerHeight: height, devicePixelRatio: scale } = window;

        this.renderer = new THREE.WebGLRenderer({
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

        this.renderer.setPixelRatio(scale);
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0x000000, 1.0);

        this.setupScene();

        this.manager = new THREE.LoadingManager();
        this.manager.onProgress = (item, loaded, total) => {
            this.props.progress({ item, loaded, total });
        };

        // resize listener
        window.addEventListener('resize', this.onWindowResize, false);

        // setup custom world
        await this.loadAssets();

        this.props.onFinishedLoading();
    }

    setupScene = () => {
        const { innerWidth: width, innerHeight: height } = window;

        // scene
        this.scene = new THREE.Scene();

        // Standard Background
        this.scene.background = new THREE.Color(0xcccccc);
        this.scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

        /// Standard Camera
        this.camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 1000);
        this.camera.position.z = 5;
        this.camera.lookAt(new THREE.Vector3());

        // controls    
        this.controls = new THREE.OrbitControls(this.camera);
        this.controls.maxPolarAngle = 1.5; //limit vertical movement //min = 0 max = Math.PI;
        // this.controls.addEventListener('change', this._render); // remove when using animation loop
    }

    setupLights = () => {
        // lights
        let light = new THREE.DirectionalLight(0xffffff);
        light.position.set(1, 1, 1);
        this.scene.add(light);

        light = new THREE.DirectionalLight(0x002288);
        light.position.set(-1, -1, -1);
        this.scene.add(light);

        light = new THREE.AmbientLight(0x222222);
        this.scene.add(light);
    }


    loadModel = (url) => {
        return new Promise((resolve, reject) => {
            const loader = new THREE.JSONLoader(this.manager);
            //const texture = new THREE.TextureLoader().load(body);
            loader.load(url, (geometry, materials) => resolve({ geometry, materials }), undefined, xhr => reject(xhr));
        });
    }

    loadAssets = async () => {

        this.setupLights();
        this.body = null;

        _.forEach(car, (value, key) => {

            this.loadModel(value).then((response) => {

                let { geometry } = response;
                let material = null;
                let mesh = null;

                if (key === 'body') {
                    geometry.center();
                    this.body = new THREE.MeshLambertMaterial({ color: 0xf3ffe2 });
                    mesh = new THREE.Mesh(geometry, this.body);
                } else {
                    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
                    mesh = new THREE.Mesh(geometry, material);
                }


                this.scene.add(mesh);

            }).catch((reason) => {

                this.props.reportError(reason.currentTarget._response);

            });

        });

        this.scene.add(new THREE.GridHelper(4, 10));
    }

    onWindowResize = () => {
        const { innerWidth: width, innerHeight: height, devicePixelRatio: scale } = window;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setPixelRatio(scale);
        this.renderer.setSize(width, height);
    }

    animate = (delta) => {
        // Render the scene
        this.renderer.render(this.scene, this.camera);
    }
}
export default Touches(Scene);