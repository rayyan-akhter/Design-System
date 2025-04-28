import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ColorTokenProps {
  name: string;
  color: string;
  textColor?: string;
  showHex?: boolean;
  height?: number;
}

const ColorToken: React.FC<ColorTokenProps> = ({
  name,
  color,
  textColor = "text-foreground",
  showHex = false,
  height = 64,
}) => {
  const style = {
    backgroundColor: `hsl(var(--${color}))`,
    height: `${height}px`,
  };

  return (
    <div className="flex flex-col">
      <div
        className={cn("w-full rounded-md flex items-end p-2", textColor)}
        style={style}
      >
        {showHex && (
          <span className="text-xs opacity-80">HSL var(--{color})</span>
        )}
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
  height?: number;
}

const ColorScale: React.FC<ColorScaleProps> = ({
  title,
  colorName,
  showLabels = true,
  height = 48,
}) => {
  const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="grid grid-cols-11 gap-2">
        {scales.map((scale) => (
          <div key={scale} className="flex flex-col items-center">
            <div
              className="w-full rounded-md"
              style={{
                backgroundColor: `hsl(var(--${colorName}-${scale}))`,
                height: `${height}px`,
              }}
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
  showHex?: boolean;
  showLabels?: boolean;
  showPrimary?: boolean;
  showSecondary?: boolean;
  showTertiary?: boolean;
  showSemantic?: boolean;
  colorCardHeight?: number;
}

const ColorSystem: React.FC<ColorSystemProps> = ({
  className,
  showHex = false,
  showLabels = true,
  showPrimary = true,
  showSecondary = true,
  showTertiary = true,
  showSemantic = true,
  colorCardHeight = 96,
}) => {
  const colorGroups = [
    {
      title: "Primary Colors",
      colors: [
        {
          name: "Primary",
          value: "hsl(var(--primary))",
          text: "hsl(var(--primary-foreground))",
        },
        { name: "Primary 50", value: "hsl(var(--primary-50))" },
        { name: "Primary 100", value: "hsl(var(--primary-100))" },
        { name: "Primary 200", value: "hsl(var(--primary-200))" },
        { name: "Primary 300", value: "hsl(var(--primary-300))" },
        { name: "Primary 400", value: "hsl(var(--primary-400))" },
        { name: "Primary 500", value: "hsl(var(--primary-500))" },
        { name: "Primary 600", value: "hsl(var(--primary-600))" },
        { name: "Primary 700", value: "hsl(var(--primary-700))" },
        { name: "Primary 800", value: "hsl(var(--primary-800))" },
        { name: "Primary 900", value: "hsl(var(--primary-900))" },
        { name: "Primary 950", value: "hsl(var(--primary-950))" },
      ],
      show: showPrimary,
    },
    {
      title: "Secondary Colors",
      colors: [
        {
          name: "Secondary",
          value: "hsl(var(--secondary))",
          text: "hsl(var(--secondary-foreground))",
        },
        { name: "Secondary 50", value: "hsl(var(--secondary-50))" },
        { name: "Secondary 100", value: "hsl(var(--secondary-100))" },
        { name: "Secondary 200", value: "hsl(var(--secondary-200))" },
        { name: "Secondary 300", value: "hsl(var(--secondary-300))" },
        { name: "Secondary 400", value: "hsl(var(--secondary-400))" },
        { name: "Secondary 500", value: "hsl(var(--secondary-500))" },
        { name: "Secondary 600", value: "hsl(var(--secondary-600))" },
        { name: "Secondary 700", value: "hsl(var(--secondary-700))" },
        { name: "Secondary 800", value: "hsl(var(--secondary-800))" },
        { name: "Secondary 900", value: "hsl(var(--secondary-900))" },
        { name: "Secondary 950", value: "hsl(var(--secondary-950))" },
      ],
      show: showSecondary,
    },
    {
      title: "Tertiary Colors",
      colors: [
        {
          name: "Tertiary",
          value: "hsl(var(--tertiary))",
          text: "hsl(var(--tertiary-foreground))",
        },
        { name: "Tertiary 50", value: "hsl(var(--tertiary-50))" },
        { name: "Tertiary 100", value: "hsl(var(--tertiary-100))" },
        { name: "Tertiary 200", value: "hsl(var(--tertiary-200))" },
        { name: "Tertiary 300", value: "hsl(var(--tertiary-300))" },
        { name: "Tertiary 400", value: "hsl(var(--tertiary-400))" },
        { name: "Tertiary 500", value: "hsl(var(--tertiary-500))" },
        { name: "Tertiary 600", value: "hsl(var(--tertiary-600))" },
        { name: "Tertiary 700", value: "hsl(var(--tertiary-700))" },
        { name: "Tertiary 800", value: "hsl(var(--tertiary-800))" },
        { name: "Tertiary 900", value: "hsl(var(--tertiary-900))" },
        { name: "Tertiary 950", value: "hsl(var(--tertiary-950))" },
      ],
      show: showTertiary,
    },
    {
      title: "Semantic Colors",
      colors: [
        {
          name: "Success",
          value: "hsl(var(--success))",
          text: "hsl(var(--success-foreground))",
        },
        {
          name: "Warning",
          value: "hsl(var(--warning))",
          text: "hsl(var(--warning-foreground))",
        },
        {
          name: "Error",
          value: "hsl(var(--error))",
          text: "hsl(var(--error-foreground))",
        },
        {
          name: "Info",
          value: "hsl(var(--info))",
          text: "hsl(var(--info-foreground))",
        },
      ],
      show: showSemantic,
    },
  ];

  return (
    <div className={cn("container mx-auto px-4 py-8", className)}>
      <h1 className="text-3xl font-bold mb-8 text-primary">Color System</h1>

      <div className="space-y-8">
        {colorGroups
          .filter((group) => group.show)
          .map((group) => (
            <Card key={group.title} className="border-primary/20 shadow-lg">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-primary">{group.title}</CardTitle>
                <CardDescription>
                  Color palette for {group.title.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {group.colors.map((color) => (
                    <div
                      key={color.name}
                      className="flex flex-col rounded-lg overflow-hidden border border-border"
                    >
                      <div
                        className="w-full"
                        style={{
                          backgroundColor: color.value,
                          height: `${colorCardHeight}px`,
                        }}
                      />
                      <div className="p-4 bg-background">
                        <p className="font-medium text-foreground">
                          {color.name}
                        </p>
                        {showHex && (
                          <p className="text-sm text-muted-foreground">
                            {color.value}
                          </p>
                        )}
                        {color.text && showHex && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Text: {color.text}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ColorSystem;
