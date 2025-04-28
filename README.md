# DesignSystem

A modern design system built with React, TypeScript, and Tailwind CSS.

## Project Name: DesignSystem

DesignSystem is a comprehensive design system that provides a complete set of tools for building consistent, accessible, and beautiful user interfaces. The name reflects its core purpose:

- **Design**: A complete set of design tokens, components, and patterns
- **System**: A cohesive collection of tools and guidelines for building interfaces
- **System**: Ensures consistency and maintainability across applications

## Technologies Used

### Core Technologies

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: For type-safe code and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Vite**: Next-generation frontend tooling for faster development

### UI Components

- **Radix UI**: Unstyled, accessible components for building high‑quality design systems
- **Lucide Icons**: Beautiful & consistent icons
- **Class Variance Authority**: For managing component variants
- **Tailwind Merge**: For merging Tailwind CSS classes efficiently

### Development Tools

- **Storybook**: For component development and documentation
- **ESLint**: For code linting
- **Prettier**: For code formatting
- **PostCSS**: For processing CSS
- **Autoprefixer**: For adding vendor prefixes

### Testing & Quality

- **Jest**: For unit testing
- **React Testing Library**: For component testing
- **Playwright**: For end-to-end testing

### Build & Deployment

- **Vite**: For building and bundling
- **GitHub Actions**: For CI/CD
- **Netlify**: For hosting and deployment

## Color System Component

The Color System component provides a comprehensive view of the design system's color palette. It displays all color tokens in an organized, interactive layout.

### Features

- **Color Groups**: Displays colors organized into four main groups:

  - Primary Colors: Main brand colors with various shades
  - Secondary Colors: Supporting colors for UI elements
  - Tertiary Colors: Additional colors for accents and highlights
  - Semantic Colors: Colors for specific states (success, warning, error, info)

- **Interactive Controls**:

  - `showHex`: Toggle display of hex color values
  - `showLabels`: Toggle display of color scale labels
  - `showPrimary/Secondary/Tertiary/Semantic`: Toggle visibility of each color group
  - `colorCardHeight`: Adjust the height of color cards (default: 96px)

- **Responsive Layout**:
  - Adapts to different screen sizes
  - Grid layout: 1 column on mobile, 2 on tablet, 3 on laptop, 4 on desktop
  - Maintains consistent spacing and alignment

### Usage

```tsx
import { ColorSystem } from "@/components/design-system/ColorSystem";

// Basic usage
<ColorSystem />

// With custom props
<ColorSystem
  showHex={true}
  showLabels={false}
  showPrimary={true}
  showSecondary={true}
  showTertiary={true}
  showSemantic={true}
  colorCardHeight={120}
  className="max-w-7xl mx-auto"
/>
```

### Props

| Prop              | Type    | Default   | Description                     |
| ----------------- | ------- | --------- | ------------------------------- |
| `showHex`         | boolean | false     | Show hex color values           |
| `showLabels`      | boolean | true      | Show color scale labels         |
| `showPrimary`     | boolean | true      | Show primary color group        |
| `showSecondary`   | boolean | true      | Show secondary color group      |
| `showTertiary`    | boolean | true      | Show tertiary color group       |
| `showSemantic`    | boolean | true      | Show semantic color group       |
| `colorCardHeight` | number  | 96        | Height of color cards in pixels |
| `className`       | string  | undefined | Additional CSS classes          |

### Color Structure

Each color in the system is defined using CSS variables with HSL values:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --primary-50: 210 40% 98%;
  --primary-100: 210 40% 96.1%;
  /* ... other shades ... */
}
```

### Storybook Integration

The component is fully documented in Storybook with:

- Interactive controls for all props
- Multiple story variants
- Comprehensive documentation
- Live preview of changes

### Accessibility

- Color contrast ratios meet WCAG 2.1 standards
- Semantic color usage for different states
- Clear visual hierarchy
- Responsive text sizing

### Theme Support

The color system supports both light and dark themes through CSS variables and Tailwind's dark mode.
