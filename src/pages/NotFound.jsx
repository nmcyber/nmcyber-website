import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import * as THREE from 'three';

const NotFound = () => {
  useEffect(() => {
    // Three.js animation
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x64cdf6, wireframe: true, transparency: true, opacity: 0.3 });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div id="three-container" className="absolute inset-0 z-0  overflow-hidden " />
      <motion.div
        className="z-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl mb-8">Page Not Found</h2>
        <p className="mb-8">Oops! The page you're looking for doesn't exist.</p>
        <a href="/">
          <Button className="bg-tertiary hover:bg-tertiary/90 text-white">
            Return to Home
          </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;