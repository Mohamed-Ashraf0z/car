# 🚗 Car ASCII Art Utility

A React utility for displaying ASCII art cars in blank spaces throughout your car community application. Features terminal-style syntax highlighting, responsive design, and multiple car type variants.

## Features

- ✅ **Multiple Car Types**: Classic, Sports, SUV, Electric, Luxury
- ✅ **Responsive Design**: Adapts to mobile, tablet, and desktop
- ✅ **Terminal Aesthetic**: Retro hacker vibe with syntax highlighting
- ✅ **Auto-Detection**: Automatically detects car types from model names
- ✅ **Animation Support**: Optional pulsing and color cycling effects
- ✅ **Easy Integration**: Simple components and utility functions

## Quick Start

### 1. Basic Usage

```tsx
import { CarAsciiArtComponent } from '@/components/CarAsciiArt';

// Show specific car
<CarAsciiArtComponent carModel="Porsche 911" />

// Show random car
<CarAsciiArtComponent showRandom={true} />

// Disable animation
<CarAsciiArtComponent carModel="Tesla" animate={false} />
```

### 2. Responsive Versions

```tsx
import { ResponsiveCarAscii, CompactCarAscii } from '@/components/CarAsciiArt';

// Responsive wrapper
<ResponsiveCarAscii carModel="Mustang" />

// Compact version for small spaces
<CompactCarAscii carModel="Jeep" />
```

### 3. Utility Function

```tsx
import { getCarAsciiArt } from '@/utils/asciiArt';

// Get ASCII art for specific car
const asciiArt = getCarAsciiArt("Tesla Model S", "electric");

// Get random ASCII art
const randomArt = getCarAsciiArt();
```

## Components

### CarAsciiArtComponent

Main component for displaying ASCII art cars.

**Props:**
- `carModel?: string` - Specific car model name
- `carType?: string` - Car type (classic, sports, suv, electric, luxury)
- `className?: string` - Additional CSS classes
- `showTitle?: boolean` - Show/hide title (default: false)
- `compact?: boolean` - Use compact styling (default: false)
- `animate?: boolean` - Enable animations (default: true)

### ResponsiveCarAscii

Wrapper component that provides responsive behavior.

### CompactCarAscii

Compact version for small spaces and sidebars.

### AsciiArtDemo

Full-featured demo component with terminal styling and controls.

## Car Type Detection

The utility automatically detects car types based on model names:

- **Sports**: mustang, camaro, corvette, ferrari, porsche
- **Electric**: tesla, leaf, bolt, ev
- **SUV**: range, explorer, tahoe, wrangler
- **Luxury**: mercedes, bmw, audi, lexus
- **Classic**: impala, nova, chevelle, belair

## Styling

### Terminal Aesthetic

The ASCII art uses terminal-style colors:
- **Classic**: Yellow/Orange/Red gradient
- **Sports**: Red gradient
- **SUV**: Blue gradient  
- **Electric**: Green gradient
- **Luxury**: Purple gradient

### Responsive Breakpoints

- **Mobile**: `text-xs` (12px)
- **Tablet**: `text-sm` (14px)
- **Desktop**: `text-base` (16px)
- **Large**: `text-lg` (18px)

## Integration Examples

### 1. Car Info Page Sidebar

```tsx
// In CarInfo.tsx
<Card className="glass border-border/30 backdrop-blur-xl">
  <CardHeader>
    <CardTitle className="text-lg">Car ASCII Art</CardTitle>
  </CardHeader>
  <CardContent>
    <CarAsciiArtComponent 
      carModel={`${car.make} ${car.model}`}
      showTitle={false}
      compact={true}
      animate={true}
    />
  </CardContent>
</Card>
```

### 2. Empty State Filler

```tsx
// When no cars are found
{state.cars.length === 0 && (
  <div className="text-center py-12">
    <CarAsciiArtComponent 
      showRandom={true}
      animate={true}
      className="mb-6"
    />
    <p className="text-muted-foreground">No cars found</p>
  </div>
)}
```

### 3. Loading State

```tsx
// While loading car data
{isLoading && (
  <div className="flex items-center justify-center p-8">
    <CarAsciiArtComponent 
      carType="sports"
      animate={true}
    />
  </div>
)}
```

## Customization

### Adding New Car Types

1. Add new car type to the `CarAsciiArt` interface:

```tsx
export interface CarAsciiArt {
  art: string;
  type: 'classic' | 'sports' | 'suv' | 'truck' | 'electric' | 'luxury' | 'custom';
  colors: string[];
}
```

2. Add ASCII art and colors to the utility function:

```tsx
const customCars = [
  {
    art: `your ascii art here`,
    type: 'custom' as const,
    colors: ['text-cyan-400', 'text-cyan-500', 'text-cyan-600']
  }
];
```

### Custom Colors

You can override the default colors by passing custom CSS classes:

```tsx
<CarAsciiArtComponent 
  carModel="Custom Car"
  className="text-pink-400"
/>
```

## Performance

- ASCII art is generated on component mount
- Animations use CSS transforms for smooth performance
- Color cycling uses `setInterval` with cleanup
- Components are memoized to prevent unnecessary re-renders

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Fallback styling for older browsers
- Responsive design works on all screen sizes

## Demo

Visit `/ascii-gallery` to see all features in action!

## License

This utility is part of the CarCommunity project and follows the same license terms.
