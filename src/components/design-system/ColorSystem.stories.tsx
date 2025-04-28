import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ColorSystem from "./ColorSystem";
import "@/index.css";

const meta: Meta<typeof ColorSystem> = {
  title: "Design System/Color System",
  component: ColorSystem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The Color System component provides a comprehensive view of the design system's color palette.
It includes:

- Primary Colors: The main brand colors with their various shades
- Secondary Colors: Supporting colors for UI elements
- Tertiary Colors: Additional colors for accents and highlights
- Semantic Colors: Colors used for specific states (success, warning, error, info)

Each color is displayed with its name, HSL value, and a visual representation.
The component is responsive and adapts to different screen sizes.
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the container",
      table: { type: { summary: "string" } },
    },
    showHex: {
      control: "boolean",
      description: "Show hex color values",
      table: { type: { summary: "boolean" }, defaultValue: { summary: false } },
    },
    showLabels: {
      control: "boolean",
      description: "Show color scale labels",
      table: { type: { summary: "boolean" }, defaultValue: { summary: true } },
    },
    showPrimary: {
      control: "boolean",
      description: "Show primary color group",
      table: { type: { summary: "boolean" }, defaultValue: { summary: true } },
    },
    showSecondary: {
      control: "boolean",
      description: "Show secondary color group",
      table: { type: { summary: "boolean" }, defaultValue: { summary: true } },
    },
    showTertiary: {
      control: "boolean",
      description: "Show tertiary color group",
      table: { type: { summary: "boolean" }, defaultValue: { summary: true } },
    },
    showSemantic: {
      control: "boolean",
      description: "Show semantic color group",
      table: { type: { summary: "boolean" }, defaultValue: { summary: true } },
    },
    colorCardHeight: {
      control: { type: "range", min: 50, max: 200, step: 10 },
      description: "Height of color cards in pixels",
      table: { type: { summary: "number" }, defaultValue: { summary: 100 } },
    },
    gridColumns: {
      control: { type: "select", options: [1, 2, 3, 4] },
      description: "Number of columns in the color grid",
      table: { type: { summary: "number" }, defaultValue: { summary: 4 } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorSystem>;

export const Default: Story = {
  args: {
    showHex: true,
    showLabels: false,
    showPrimary: true,
    showSecondary: true,
    showTertiary: true,
    showSemantic: true,
    colorCardHeight: 200,
    gridColumns: 4,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default Color System view showing all color groups in a responsive grid layout.",
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    className: "max-w-7xl mx-auto",
    showHex: false,
    showLabels: false,
    showPrimary: true,
    showSecondary: true,
    showTertiary: true,
    showSemantic: true,
    colorCardHeight: 190,
    gridColumns: 3,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Color System with a custom max-width class and enhanced color display options.",
      },
    },
  },
};

export const Compact: Story = {
  args: {
    showHex: false,
    showLabels: false,
    showPrimary: true,
    showSecondary: true,
    showTertiary: true,
    showSemantic: true,
    colorCardHeight: 80,
    gridColumns: 4,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A compact view of the Color System with minimal labels and smaller cards.",
      },
    },
  },
};

export const PrimaryOnly: Story = {
  args: {
    showHex: true,
    showLabels: true,
    showPrimary: true,
    showSecondary: false,
    showTertiary: false,
    showSemantic: false,
    colorCardHeight: 100,
    gridColumns: 4,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Color System showing only the primary color group with detailed information.",
      },
    },
  },
};
