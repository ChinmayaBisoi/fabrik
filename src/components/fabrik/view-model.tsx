import { useState, useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { CameraHelper, GridHelper } from "three";
import { render } from "@react-three/fiber";
const fs = require("fs");
function loadGLTFModel(scene: any, glbPath: any, options: any) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        console.log(obj);
        obj.name = "dinosaur";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child: any) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        console.log(error);
        reject(error);
      }
    );
  });
}

const Dinosaur = () => {
  const refContainer: any = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        25,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.setZ(0.02);
      camera.position.setY(0.4);
      camera.position.setX(2);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      const gridHelper = new GridHelper(200, 50, 0x444444, 0x444444);
      const cameraHelper = new CameraHelper(camera);
      scene.add(gridHelper);
      // scene.add(cameraHelper)
      scene.add(ambientLight);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      console.log(fs);
      loadGLTFModel(scene, "/retail-3D-models/P1.glb", {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req: any = null;

      const animate = () => {
        req = requestAnimationFrame(animate);

        controls.update();

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  return (
    <div
      style={{ height: "100vh", width: "100vw", position: "relative" }}
      ref={refContainer}
    >
      {loading && (
        <span style={{ position: "absolute", left: "50%", top: "50%" }}>
          Loading...
        </span>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div
      className="min-h-screen relative bg-[#E7F6F2]"
      style={{ width: "100%", margin: "0 auto" }}
    >
      <div className="absolute z-2 md:py-6 py-10  hover:bg-[#160040] border border-[#160040] cursor-pointer font-700 text-text-white bg-[#4C0070] md:top-100 md:left-70 left-30 top-30 rounded-12 md:px-14 px-18 duration-200 ease-in-out ">
        X
      </div>
      <Dinosaur />
    </div>
  );
}
