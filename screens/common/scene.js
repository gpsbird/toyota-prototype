import React from 'react';
import THREE from "../../three";
import Touches from '../utils/Touches';
import { ThreeView } from './index';
import { View } from 'react-native';
import Files from '../../Files';
import { car, mercedez, mercedez_mtl, merc } from '@assets/images';
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
        this.renderer.shadowMap.enabled = true;
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0x000000, 1.0);

        this.setupScene();

        this.manager = new THREE.LoadingManager();
        this.manager.onProgress = (item, loaded, total) => {
            this.props.progress({ item, loaded, total });
        };

        // resize listener
        window.addEventListener('resize', this.onWindowResize, false);

        this.setupLights();

        this.setupGround();

        // setup custom world
        await this.loadAssets();

        this.props.onFinishedLoading();

    }

    setupScene = () => {
        const { innerWidth: width, innerHeight: height } = window;

        // scene
        this.scene = new THREE.Scene();

        // Standard Background
        //this.scene.background = new THREE.Color(0xcccccc);
        this.scene.background = new THREE.Color(0xa0a0a0);
        //this.scene.fog = new THREE.FogExp2(0xcccccc, 0.002);
        this.scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

        /// Standard Camera
        /*this.camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 1000);
        this.camera.position.z = 5;
        this.camera.lookAt(new THREE.Vector3());*/
        this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 3000);
        this.camera.position.set(2, 4, 6);

        // controls    
        this.controls = new THREE.OrbitControls(this.camera);
        this.controls.maxPolarAngle = 1.5; //limit vertical movement //min = 0 max = Math.PI;
        //this.controls.target.set(0, 2, 2);
        this.controls.update();
        // this.controls.addEventListener('change', this._render); // remove when using animation loop
    }

    setupLights = () => {
        // lights
        /*let light = new THREE.DirectionalLight(0xffffff);
        light.position.set(1, 1, 1);
        this.scene.add(light);

        light = new THREE.DirectionalLight(0x002288);
        light.position.set(-1, -1, -1);
        this.scene.add(light);

        light = new THREE.AmbientLight(0x222222);
        this.scene.add(light);*/

        let light = new THREE.HemisphereLight(0xffffff, 0x444444);
        light.position.set(0, 200, 0);
        this.scene.add(light);

        light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 200, 100);
        light.castShadow = true;
        light.shadow.camera.top = 180;
        light.shadow.camera.bottom = -100;
        light.shadow.camera.left = -120;
        light.shadow.camera.right = 120;

        this.scene.add(light);


    }

    setupGround = () => {
        // ground
        let mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        this.scene.add(mesh);

        let grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
        grid.material.opacity = 0.2;
        grid.material.transparent = true;
        this.scene.add(grid);
    }


    loadJsonModel = (url) => {
        return new Promise((resolve, reject) => {
            const loader = new THREE.JSONLoader(this.manager);
            //const texture = new THREE.TextureLoader().load(body);
            loader.load(url, (geometry, materials) => resolve({ geometry, materials }), undefined, xhr => reject(xhr));
        });
    }

    loadMaterial = (url) => {
        return new Promise((resolve, reject) => {
            let loader = new THREE.MTLLoader(this.manager);
            loader.setCrossOrigin(true);
            loader.load(url, materials => resolve(materials), undefined, xhr => reject(xhr));
        });
    }

    loadObject = (loader, url) => {
        return new Promise((resolve, reject) => {
            loader.load(url, object => resolve(object), undefined, xhr => reject(xhr));
        });
    }

    objModel = () => {

        let materials = this.loadMaterial(mercedez_mtl);
        //let object = this.loadObject(mercedez);

        materials.then(resp => {
            resp.preload();
            let loader = new THREE.OBJLoader(this.manager);
            loader.setMaterials(resp);
            this.loadObject(loader, mercedez).then(mesh => {
                this.scene.add(mesh);
                //this.props.status(this.scene.toJSON().materials);
            }).catch(reason => this.props.reportError(reason));
        }).catch(reason => this.props.reportError(reason));

        /*Promise.all([object, materials]).then((responses) => {
            responses[1].preload();
            responses[0].setMaterials(responses[1]);
            this.scene.add(responses[0]);
        });*/
    }

    jsonModel = () => {

        this.body = null;

        _.forEach(car, (value, key) => {

            this.loadJsonModel(value).then((response) => {

                let { geometry } = response;
                let material = null;
                let mesh = null;

                if (key === 'body') {
                    geometry.center();
                    this.body = new THREE.MeshLambertMaterial({ color: 0x086004 });
                    mesh = new THREE.Mesh(geometry, this.body);
                } else {
                    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
                    mesh = new THREE.Mesh(geometry, material);
                }

                mesh.castShadow = true; //default is false
                mesh.receiveShadow = true; //default
                this.scene.add(mesh);

            }).catch((reason) => {

                this.props.reportError(reason.currentTarget._response);

            });

        });
    }

    loadAssets = async () => {

        this.jsonModel();
        //this.objModel();

        //this.scene.add(new THREE.GridHelper(4, 10));
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