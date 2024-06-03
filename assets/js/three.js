
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { sin } from 'three/examples/jsm/nodes/Nodes.js';

const scene =       new THREE.Scene();
const camera =      new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer =    new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x131313, 0)
document.getElementById("canvas").appendChild( renderer.domElement );

//scene.add( cube );

camera.position.set( 0, 0, 10 );

const loader    =   new GLTFLoader();
const hemiLight =   new THREE.HemisphereLight( 0xffffff, 0x444444, 1 );
const dirLight  =   new THREE.DirectionalLight( 0xffffff, 5 );

hemiLight.position.set( 0, 20, 0 );
scene.add( hemiLight );

dirLight.position.set( 30, 100, 100 );
scene.add( dirLight );

loader.load('assets/models/maxwell.glb', function ( gltf ) {

	scene.add( gltf.scene );
    gltf.scene.scale.set(.25,.25,.25)
    gltf.scene.position.x = -5;
    gltf.scene.position.y = 1;

    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera ); 

        gltf.scene.rotation.y += .01
    }
        animate();

}, undefined, function ( error ) {

	console.error( error );

} );
