import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AsciiArtDemo } from '@/components/AsciiArtDemo';
import { CarAsciiArtComponent, ResponsiveCarAscii, CompactCarAscii } from '@/components/CarAsciiArt';
import { Navbar } from '@/components/Navbar';

export const AsciiArtGallery: React.FC = () => {
  const [currentCar, setCurrentCar] = useState<string>('Porsche 911');
  const [showRandom, setShowRandom] = useState(false);

  const carExamples = [
    'Porsche 911',
    'Tesla Model S',
    'Mustang GT',
    'Jeep Wrangler',
    'Ferrari F40',
    'BMW M3',
    'Mercedes AMG',
    'Range Rover'
  ];

  return (
    <div className="min-h-screen bg-gradient-page bg-pattern">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 pt-6 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            🚗 ASCII Car Art Gallery
          </h1>
          <p className="text-muted-foreground text-lg">
            Fill blank spaces with retro terminal-style car drawings
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            onClick={() => setShowRandom(!showRandom)}
            variant={showRandom ? "default" : "outline"}
            className="gradient-primary hover:scale-105 transition-all duration-300"
          >
            {showRandom ? 'Show Specific Car' : 'Show Random Cars'}
          </Button>
          
          {!showRandom && (
            <div className="flex flex-wrap gap-2">
              {carExamples.map((car) => (
                <Button
                  key={car}
                  onClick={() => setCurrentCar(car)}
                  variant={currentCar === car ? "default" : "outline"}
                  size="sm"
                  className="hover:scale-105 transition-all duration-300"
                >
                  {car}
                </Button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Main ASCII Art Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <AsciiArtDemo
            carModel={showRandom ? undefined : currentCar}
            showTitle={true}
            autoRefresh={showRandom}
            refreshInterval={8000}
          />
        </motion.div>

        {/* Usage Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Example 1: Compact Version */}
          <Card className="glass border-border/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-lg">Compact Version</CardTitle>
            </CardHeader>
            <CardContent>
              <CompactCarAscii
                carModel="Tesla Model S"
                animate={false}
                className="mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Perfect for small spaces or sidebars
              </p>
            </CardContent>
          </Card>

          {/* Example 2: Sports Car */}
          <Card className="glass border-border/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-lg">Sports Car</CardTitle>
            </CardHeader>
            <CardContent>
              <CarAsciiArtComponent
                carModel="Ferrari F40"
                animate={true}
                className="mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Automatically detects sports cars
              </p>
            </CardContent>
          </Card>

          {/* Example 3: Random Car */}
          <Card className="glass border-border/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-lg">Random Car</CardTitle>
            </CardHeader>
            <CardContent>
              <CarAsciiArtComponent
                showRandom={true}
                animate={true}
                className="mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Shows random car types
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <Card className="glass border-border/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-lg">Usage Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Basic Usage:</h4>
                <pre className="bg-black/20 p-4 rounded-lg text-sm font-mono text-green-400 overflow-x-auto">
{`import { CarAsciiArtComponent } from '@/components/CarAsciiArt';

// Show specific car
<CarAsciiArtComponent carModel="Porsche 911" />

// Show random car
<CarAsciiArtComponent showRandom={true} />

// Disable animation
<CarAsciiArtComponent carModel="Tesla" animate={false} />`}
                </pre>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Responsive Versions:</h4>
                <pre className="bg-black/20 p-4 rounded-lg text-sm font-mono text-blue-400 overflow-x-auto">
{`// Responsive wrapper
<ResponsiveCarAscii carModel="Mustang" />

// Compact version for small spaces
<CompactCarAscii carModel="Jeep" />

// Utility function
import { getCarAsciiArt } from '@/utils/asciiArt';
const asciiArt = getCarAsciiArt("Tesla Model S", "electric");`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Different Car Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          <Card className="glass border-border/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-sm">Classic</CardTitle>
            </CardHeader>
            <CardContent>
              <CompactCarAscii carType="classic" animate={false} />
            </CardContent>
          </Card>

          <Card className="glass border-border/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-sm">Sports</CardTitle>
            </CardHeader>
            <CardContent>
              <CompactCarAscii carType="sports" animate={false} />
            </CardContent>
          </Card>

          <Card className="glass border-border/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-sm">SUV</CardTitle>
            </CardHeader>
            <CardContent>
              <CompactCarAscii carType="suv" animate={false} />
            </CardContent>
          </Card>

          <Card className="glass border-border/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-sm">Electric</CardTitle>
            </CardHeader>
            <CardContent>
              <CompactCarAscii carType="electric" animate={false} />
            </CardContent>
          </Card>

          <Card className="glass border-border/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-sm">Luxury</CardTitle>
            </CardHeader>
            <CardContent>
              <CompactCarAscii carType="luxury" animate={false} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AsciiArtGallery;
