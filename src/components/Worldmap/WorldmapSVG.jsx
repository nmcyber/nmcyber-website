import React, { useEffect, useState, useRef } from 'react';
import DottedMap from 'dotted-map';
import { motion } from 'framer-motion';

const WorldMapSVG = () => {
  const [svgMap, setSvgMap] = useState('');
  const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });
  const mapRef = useRef(null);

  useEffect(() => {
    const createMap = () => {
      const map = new DottedMap({ height: 60, grid: 'diagonal' });

      // Add pin for Perth, Australia
      map.addPin({
        lat: -31.9523,
        lng: 115.8613,
        svgOptions: { color: '#00ffff', radius: 0.6 },
      });

      // Add pin for Kenya (using Nairobi coordinates)
      map.addPin({
        lat: -1.2921,
        lng: 36.8219,
        svgOptions: { color: '#ff00ff', radius: 0.6 },
      });

      const svg = map.getSVG({
        radius: 0.22,
        color: '#7683A5',
        shape: 'circle',
        backgroundColor: 'transparent',
      });

      setSvgMap(svg);
    };

    createMap();
  }, []);

  useEffect(() => {
    const updateMapDimensions = () => {
      if (mapRef.current) {
        const { width, height } = mapRef.current.getBoundingClientRect();
        setMapDimensions({ width, height });
      }
    };

    updateMapDimensions();
    window.addEventListener('resize', updateMapDimensions);

    return () => {
      window.removeEventListener('resize', updateMapDimensions);
    };
  }, []);

  const getPointPosition = (lat, lng) => {
    const x = (lng + 180) * (mapDimensions.width / 360);
    const y = (90 - lat) * (mapDimensions.height / 180);
    return { x, y };
  };

  const perthPosition = getPointPosition(-31.9523, 115.8613);
  const nairobiPosition = getPointPosition(-1.2921, 36.8219);

  return (
    <section className="relative w-full px-4 md:px-0 h-[25dvh] sm:h-[35dvh] md:h-[40dvh] lg:h-[85dvh] 2xl:h-[80dvh] flex items-center justify-center overflow-hidden">
      <div ref={mapRef} className="relative w-full lg:w-[80vw] 2xl:w-[90vw] h-full container max-h-full">
        {svgMap && (
          <div
            className="absolute inset-0"
            dangerouslySetInnerHTML={{ __html: svgMap }}
          />
        )}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute w-4 h-4 rounded-full bg-cyan-400"
            style={{ 
              top: `${(perthPosition.y / mapDimensions.height) * 100}%`, 
              left: `${(perthPosition.x / mapDimensions.width) * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-75 animate-ping"></div>
          </div>
          <div 
            className="absolute w-4 h-4 rounded-full bg-fuchsia-400"
            style={{ 
              top: `${(nairobiPosition.y / mapDimensions.height) * 100}%`, 
              left: `${(nairobiPosition.x / mapDimensions.width) * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="absolute inset-0 rounded-full bg-fuchsia-400 opacity-75 animate-ping"></div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[rgba(0,21,48,0.51)] z-[-1]"
      />
      <motion.div
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(80.5px)" }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-[-2]"
      />
    </section>
  );
};

export default WorldMapSVG;