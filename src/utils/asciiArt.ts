export interface CarAsciiArt {
  art: string;
  type: 'classic' | 'sports' | 'suv' | 'truck' | 'electric' | 'luxury';
  colors: string[];
}

export const getCarAsciiArt = (carModel?: string, carType?: string): CarAsciiArt => {
  const carModels = carModel?.toLowerCase() || '';
  
  // Classic cars
  const classicCars = [
    {
      art: `
    ╭─────────────────╮
   ╱                 ╲
  ╱  ████████████████  ╲
 ╱   ████████████████   ╲
╱    ████████████████    ╲
│     ████████████████     │
│      ████████████████    │
│       ████████████████   │
│        ████████████████  │
│         ████████████████ │
│          ████████████████│
│           ███████████████│
│            ██████████████│
│             █████████████│
│              ████████████│
│               ███████████│
│                ██████████│
│                 █████████│
│                  ████████│
│                   ███████│
│                    ██████│
│                     █████│
│                      ████│
│                       ███│
│                        ██│
│                         █│
╰─────────────────────────╯
    ╭─────────╮  ╭─────────╮
    │  ███████ │  │  ███████ │
    │ ████████ │  │ ████████ │
    │█████████│  │█████████│
    ╰─────────╯  ╰─────────╯`,
      type: 'classic' as const,
      colors: ['text-yellow-400', 'text-orange-500', 'text-red-500']
    }
  ];

  // Sports cars
  const sportsCars = [
    {
      art: `
    ╭─────────────────────╮
   ╱                     ╲
  ╱  ████████████████████  ╲
 ╱   ████████████████████   ╲
╱    ████████████████████    ╲
│     ████████████████████     │
│      ████████████████████    │
│       ████████████████████   │
│        ████████████████████  │
│         ████████████████████ │
│          ████████████████████│
│           ███████████████████│
│            ██████████████████│
│             █████████████████│
│              ████████████████│
│               ███████████████│
│                ██████████████│
│                 █████████████│
│                  ████████████│
│                   ███████████│
│                    ██████████│
│                     █████████│
│                      ████████│
│                       ███████│
│                        ██████│
│                         █████│
│                          ████│
│                           ███│
│                            ██│
│                             █│
╰─────────────────────────────╯
    ╭───────────╮  ╭───────────╮
    │  █████████ │  │  █████████ │
    │ ██████████ │  │ ██████████ │
    │███████████│  │███████████│
    ╰───────────╯  ╰───────────╯`,
      type: 'sports' as const,
      colors: ['text-red-500', 'text-red-600', 'text-red-700']
    }
  ];

  // SUVs
  const suvCars = [
    {
      art: `
    ╭─────────────────────╮
   ╱                     ╲
  ╱  ████████████████████  ╲
 ╱   ████████████████████   ╲
╱    ████████████████████    ╲
│     ████████████████████     │
│      ████████████████████    │
│       ████████████████████   │
│        ████████████████████  │
│         ████████████████████ │
│          ████████████████████│
│           ███████████████████│
│            ██████████████████│
│             █████████████████│
│              ████████████████│
│               ███████████████│
│                ██████████████│
│                 █████████████│
│                  ████████████│
│                   ███████████│
│                    ██████████│
│                     █████████│
│                      ████████│
│                       ███████│
│                        ██████│
│                         █████│
│                          ████│
│                           ███│
│                            ██│
│                             █│
╰─────────────────────────────╯
    ╭───────────╮  ╭───────────╮
    │  █████████ │  │  █████████ │
    │ ██████████ │  │ ██████████ │
    │███████████│  │███████████│
    ╰───────────╯  ╰───────────╯
    ╭───────────╮  ╭───────────╮
    │  █████████ │  │  █████████ │
    │ ██████████ │  │ ██████████ │
    │███████████│  │███████████│
    ╰───────────╯  ╰───────────╯`,
      type: 'suv' as const,
      colors: ['text-blue-500', 'text-blue-600', 'text-blue-700']
    }
  ];

  // Electric cars
  const electricCars = [
    {
      art: `
    ╭─────────────────────╮
   ╱                     ╲
  ╱  ████████████████████  ╲
 ╱   ████████████████████   ╲
╱    ████████████████████    ╲
│     ████████████████████     │
│      ████████████████████    │
│       ████████████████████   │
│        ████████████████████  │
│         ████████████████████ │
│          ████████████████████│
│           ███████████████████│
│            ██████████████████│
│             █████████████████│
│              ████████████████│
│               ███████████████│
│                ██████████████│
│                 █████████████│
│                  ████████████│
│                   ███████████│
│                    ██████████│
│                     █████████│
│                      ████████│
│                       ███████│
│                        ██████│
│                         █████│
│                          ████│
│                           ███│
│                            ██│
│                             █│
╰─────────────────────────────╯
    ╭───────────╮  ╭───────────╮
    │  █████████ │  │  █████████ │
    │ ██████████ │  │ ██████████ │
    │███████████│  │███████████│
    ╰───────────╯  ╰───────────╯
    ╭───────────╮
    │  ⚡ ⚡ ⚡ ⚡  │
    │ ⚡ ⚡ ⚡ ⚡ ⚡ │
    │⚡ ⚡ ⚡ ⚡ ⚡ ⚡│
    ╰───────────╯`,
      type: 'electric' as const,
      colors: ['text-green-400', 'text-green-500', 'text-green-600']
    }
  ];

  // Luxury cars
  const luxuryCars = [
    {
      art: `
    ╭─────────────────────╮
   ╱                     ╲
  ╱  ████████████████████  ╲
 ╱   ████████████████████   ╲
╱    ████████████████████    ╲
│     ████████████████████     │
│      ████████████████████    │
│       ████████████████████   │
│        ████████████████████  │
│         ████████████████████ │
│          ████████████████████│
│           ███████████████████│
│            ██████████████████│
│             █████████████████│
│              ████████████████│
│               ███████████████│
│                ██████████████│
│                 █████████████│
│                  ████████████│
│                   ███████████│
│                    ██████████│
│                     █████████│
│                      ████████│
│                       ███████│
│                        ██████│
│                         █████│
│                          ████│
│                           ███│
│                            ██│
│                             █│
╰─────────────────────────────╯
    ╭───────────╮  ╭───────────╮
    │  █████████ │  │  █████████ │
    │ ██████████ │  │ ██████████ │
    │███████████│  │███████████│
    ╰───────────╯  ╰───────────╯
    ╭───────────╮
    │  💎 💎 💎  │
    │ 💎 💎 💎 💎 │
    │💎 💎 💎 💎 💎│
    ╰───────────╯`,
      type: 'luxury' as const,
      colors: ['text-purple-400', 'text-purple-500', 'text-purple-600']
    }
  ];

  // All car types
  const allCars = [...classicCars, ...sportsCars, ...suvCars, ...electricCars, ...luxuryCars];

  // Determine car type based on model name or provided type
  let selectedType = carType;
  
  if (!selectedType) {
    if (carModels.includes('mustang') || carModels.includes('camaro') || carModels.includes('corvette')) {
      selectedType = 'sports';
    } else if (carModels.includes('tesla') || carModels.includes('leaf') || carModels.includes('bolt')) {
      selectedType = 'electric';
    } else if (carModels.includes('range') || carModels.includes('explorer') || carModels.includes('tahoe')) {
      selectedType = 'suv';
    } else if (carModels.includes('mercedes') || carModels.includes('bmw') || carModels.includes('audi')) {
      selectedType = 'luxury';
    } else if (carModels.includes('impala') || carModels.includes('nova') || carModels.includes('chevelle')) {
      selectedType = 'classic';
    } else {
      // Random selection if no specific type is determined
      const types = ['classic', 'sports', 'suv', 'electric', 'luxury'];
      selectedType = types[Math.floor(Math.random() * types.length)];
    }
  }

  // Filter cars by type and return random one
  const carsOfType = allCars.filter(car => car.type === selectedType);
  const randomCar = carsOfType[Math.floor(Math.random() * carsOfType.length)];

  return randomCar || allCars[Math.floor(Math.random() * allCars.length)];
};

export const getRandomCarAsciiArt = (): CarAsciiArt => {
  return getCarAsciiArt();
};
