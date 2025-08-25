import React, { useState, useEffect } from 'react';
import { getCarAsciiArt, getRandomCarAsciiArt, CarAsciiArt } from '@/utils/asciiArt';

interface CarAsciiArtProps {
  carModel?: string;
  carType?: string;
  className?: string;
  showTitle?: boolean;
  compact?: boolean;
  animate?: boolean;
}

export const CarAsciiArtComponent: React.FC<CarAsciiArtProps> = ({
  carModel,
  carType,
  className = '',
  showTitle = false,
  compact = false,
  animate = true
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
    if (!animate || !asciiArt) return;

    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % asciiArt.colors.length);
    }, 3000);

    return () => clearInterval(colorInterval);
  }, [animate, asciiArt]);

  if (!asciiArt) {
    return (
      <div className={`flex items-center justify-center p-4 ${className}`}>
        <div className="text-muted-foreground font-mono text-sm">Loading...</div>
      </div>
    );
  }

  const currentColor = asciiArt.colors[currentColorIndex];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {showTitle && (
        <div className="mb-2 text-center">
          <h4 className="text-sm font-mono font-bold text-foreground">
            {carModel ? carModel.toUpperCase() : 'CAR ASCII ART'}
          </h4>
        </div>
      )}

      <div className="relative">
        <pre
          className={`
            font-mono leading-tight whitespace-pre text-center select-none
            ${compact ? 'text-xs' : 'text-xs sm:text-sm md:text-base'}
            ${currentColor}
            ${animate ? 'animate-pulse' : ''}
          `}
          style={{
            textShadow: animate ? '0 0 8px currentColor' : 'none',
            filter: animate ? 'drop-shadow(0 0 4px currentColor)' : 'none'
          }}
        >
          {asciiArt.art}
        </pre>

        {animate && (
          <div 
            className="absolute inset-0 rounded-lg blur-lg opacity-10 -z-10"
            style={{
              background: `radial-gradient(circle, ${currentColor.replace('text-', '')} 0%, transparent 70%)`
            }}
          />
        )}
      </div>
    </div>
  );
};

// Responsive wrapper component
export const ResponsiveCarAscii: React.FC<CarAsciiArtProps> = (props) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <CarAsciiArtComponent {...props} />
    </div>
  );
};

// Compact version for small spaces
export const CompactCarAscii: React.FC<CarAsciiArtProps> = (props) => {
  return (
    <CarAsciiArtComponent 
      {...props} 
      compact={true} 
      showTitle={false}
      className="p-2"
    />
  );
};

export default CarAsciiArtComponent;
