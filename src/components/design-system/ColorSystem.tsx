
import React from 'react';
import { cn } from "@/lib/utils";

interface ColorTokenProps {
  name: string;
  color: string;
  textColor?: string;
  showHex?: boolean;
}

const ColorToken: React.FC<ColorTokenProps> = ({ 
  name, 
  color, 
  textColor = "text-foreground",
  showHex = false 
}) => {
  const style = { backgroundColor: `hsl(var(--${color}))` };
  
  return (
    <div className="flex flex-col">
      <div 
        className={cn("h-16 w-full rounded-md flex items-end p-2", textColor)} 
        style={style}
      >
        {showHex && <span className="text-xs opacity-80">HSL var(--{color})</span>}
      </div>
      <div className="mt-1">
        <p className="text-sm font-medium">{name}</p>
      </div>
    </div>
  );
};

interface ColorScaleProps {
  title: string;
  colorName: string;
  showLabels?: boolean;
}

const ColorScale: React.FC<ColorScaleProps> = ({ 
  title, 
  colorName,
  showLabels = true
}) => {
  const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="grid grid-cols-11 gap-2">
        {scales.map((scale) => (
          <div key={scale} className="flex flex-col items-center">
            <div 
              className="h-12 w-full rounded-md" 
              style={{ backgroundColor: `hsl(var(--${colorName}-${scale}))` }}
            />
            {showLabels && <span className="text-xs mt-1">{scale}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

interface ColorSystemProps {
  className?: string;
}

export const ColorSystem: React.FC<ColorSystemProps> = ({ className }) => {
  return (
    <div className={cn("space-y-8", className)}>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Base Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <ColorToken name="Background" color="background" />
          <ColorToken name="Foreground" color="foreground" />
          <ColorToken name="Card" color="card" />
          <ColorToken name="Card Foreground" color="card-foreground" />
          <ColorToken name="Border" color="border" />
          <ColorToken name="Input" color="input" />
          <ColorToken name="Ring" color="ring" />
          <ColorToken name="Muted" color="muted" />
          <ColorToken name="Muted Foreground" color="muted-foreground" />
          <ColorToken name="Accent" color="accent" />
          <ColorToken name="Accent Foreground" color="accent-foreground" />
        </div>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Surface Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ColorToken name="Surface" color="surface" />
          <ColorToken name="Surface Foreground" color="surface-foreground" />
          <ColorToken name="Surface Elevated" color="surface-elevated" />
          <ColorToken name="Surface Elevated Foreground" color="surface-elevated-foreground" />
        </div>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Primary, Secondary & Tertiary</h2>
        <ColorScale title="Primary" colorName="primary" />
        <ColorScale title="Secondary" colorName="secondary" />
        <ColorScale title="Tertiary" colorName="tertiary" />
      </section>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Semantic Colors</h2>
        <ColorScale title="Success" colorName="success" />
        <ColorScale title="Warning" colorName="warning" />
        <ColorScale title="Error" colorName="error" />
        <ColorScale title="Info" colorName="info" />
      </section>
    </div>
  );
};

export default ColorSystem;
