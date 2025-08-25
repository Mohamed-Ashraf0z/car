import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCarAsciiArt, getRandomCarAsciiArt, CarAsciiArt } from '@/utils/asciiArt';

interface AsciiArtDemoProps {
  carModel?: string;
  carType?: string;
  className?: string;
  showTitle?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

export const AsciiArtDemo: React.FC<AsciiArtDemoProps> = ({
  carModel,
  carType,
  className = '',
  showTitle = true,
  autoRefresh = false,
  refreshInterval = 10000
}) => {
  const [asciiArt, setAsciiArt] = useState<CarAsciiArt | null>(null);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const generateArt = () => {
    const art = carModel || carType ? getCarAsciiArt(carModel, carType) : getRandomCarAsciiArt();
    setAsciiArt(art);
  };

  useEffect(() => {
    generateArt();
  }, [carModel, carType]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      generateArt();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, carModel, carType]);

  useEffect(() => {
    if (!asciiArt) return;

    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % asciiArt.colors.length);
    }, 2000);

    return () => clearInterval(colorInterval);
  }, [asciiArt]);

  if (!asciiArt) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="animate-pulse text-muted-foreground">Loading ASCII art...</div>
      </div>
    );
  }

  const currentColor = asciiArt.colors[currentColorIndex];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-center p-4 ${className}`}
    >
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-center"
        >
          <h3 className="text-lg font-mono font-bold text-foreground mb-2">
            {carModel ? `${carModel.toUpperCase()} ASCII ART` : 'RANDOM CAR ASCII ART'}
          </h3>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs text-muted-foreground font-mono">Type:</span>
            <span className={`text-xs font-mono px-2 py-1 rounded ${currentColor} bg-background/50`}>
              {asciiArt.type.toUpperCase()}
            </span>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative"
      >
        {/* Terminal-style container */}
        <div className="bg-black/90 border border-green-500/30 rounded-lg p-4 shadow-2xl backdrop-blur-sm">
          {/* Terminal header */}
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-green-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-green-400 font-mono">
              car_ascii_art.exe
            </div>
          </div>

          {/* ASCII art content */}
          <pre
            className={`
              font-mono text-xs sm:text-sm md:text-base lg:text-lg
              leading-tight whitespace-pre
              ${currentColor}
              animate-pulse
              text-center
              select-none
            `}
            style={{
              textShadow: '0 0 10px currentColor',
              filter: 'drop-shadow(0 0 5px currentColor)'
            }}
          >
            {asciiArt.art}
          </pre>

          {/* Terminal footer */}
          <div className="mt-3 pt-2 border-t border-green-500/20">
            <div className="flex items-center justify-between text-xs text-green-400 font-mono">
              <span>Ready</span>
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-lg blur-xl opacity-20 -z-10"
          style={{
            background: `radial-gradient(circle, ${currentColor.replace('text-', '')} 0%, transparent 70%)`
          }}
        />
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 flex items-center space-x-2"
      >
        <button
          onClick={generateArt}
          className="px-3 py-1 text-xs font-mono bg-green-500/20 text-green-400 border border-green-500/30 rounded hover:bg-green-500/30 transition-colors duration-200"
        >
          REFRESH
        </button>
        <div className="text-xs text-muted-foreground font-mono">
          Auto-refresh: {autoRefresh ? 'ON' : 'OFF'}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AsciiArtDemo;
