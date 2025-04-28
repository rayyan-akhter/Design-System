
import React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Tabs Context
interface TabsContextValue {
  activeTab: string;
  onTabChange: (id: string) => void;
  orientation: 'horizontal' | 'vertical';
  disabled: boolean;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs compound components must be used within a Tabs component");
  }
  return context;
};

// Style variants
const tabsRootVariants = cva("", {
  variants: {
    variant: {
      default: "",
      outline: "rounded-lg border p-1",
      pills: "space-y-2",
      underline: "",
    },
    orientation: {
      horizontal: "flex flex-col",
      vertical: "flex",
    },
    size: {
      default: "",
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  compoundVariants: [
    {
      orientation: "vertical",
      variant: "outline",
      className: "rounded-lg border p-1 gap-2",
    },
    {
      orientation: "vertical",
      variant: "default",
      className: "gap-2",
    },
    {
      orientation: "vertical",
      variant: "pills",
      className: "gap-2",
    },
    {
      orientation: "vertical",
      variant: "underline",
      className: "gap-2",
    },
  ],
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
    size: "default",
  },
});

const tabsListVariants = cva("flex", {
  variants: {
    variant: {
      default: "border-b",
      outline: "mb-2",
      pills: "gap-2 mb-2",
      underline: "border-b",
    },
    orientation: {
      horizontal: "flex-row overflow-x-auto",
      vertical: "flex-col",
    },
    size: {
      default: "",
      sm: "gap-1",
      lg: "gap-3",
    },
  },
  compoundVariants: [
    {
      orientation: "vertical",
      variant: "default",
      className: "border-r border-b-0 pr-2",
    },
    {
      orientation: "vertical",
      variant: "underline",
      className: "border-r border-b-0 pr-2",
    },
    {
      orientation: "vertical",
      variant: "pills",
      className: "",
    },
    {
      orientation: "vertical",
      variant: "outline",
      className: "",
    },
    {
      variant: "pills",
      className: "border-0",
    },
    {
      variant: "outline",
      className: "border-0",
    }
  ],
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
    size: "default",
  },
});

const tabTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-b-2 border-transparent px-4 py-2 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground",
        outline: "rounded px-3 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground",
        pills: "rounded-full px-4 py-1.5 hover:bg-muted/40 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
        underline: "border-b-2 border-transparent px-4 py-2 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground",
      },
      orientation: {
        horizontal: "",
        vertical: "",
      },
      size: {
        default: "text-sm font-medium",
        sm: "text-xs px-2.5 py-1",
        lg: "text-base px-6 py-3",
      },
    },
    compoundVariants: [
      {
        orientation: "vertical",
        variant: "default",
        className: "border-b-0 border-r-2 px-2 py-2 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground",
      },
      {
        orientation: "vertical",
        variant: "underline",
        className: "border-b-0 border-r-2 px-2 py-2 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground",
      },
    ],
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
      size: "default",
    },
  }
);

const tabContentVariants = cva("mt-2", {
  variants: {
    variant: {
      default: "",
      outline: "p-1",
      pills: "",
      underline: "",
    },
    orientation: {
      horizontal: "",
      vertical: "",
    },
    size: {
      default: "",
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  compoundVariants: [
    {
      orientation: "vertical",
      className: "mt-0 ml-4",
    },
  ],
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
    size: "default",
  },
});

// Component interfaces
interface TabsProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tabsRootVariants> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tabsListVariants> {}

interface TabTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof tabTriggerVariants> {
  value: string;
}

interface TabContentProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tabContentVariants> {
  value: string;
}

// Component implementations
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({
    className, 
    variant, 
    size,
    orientation = "horizontal",
    defaultValue, 
    value, 
    onValueChange, 
    disabled = false,
    children,
    ...props
  }, ref) => {
    const [activeTab, setActiveTab] = React.useState<string>(value || defaultValue || "");
    
    React.useEffect(() => {
      if (value !== undefined) {
        setActiveTab(value);
      }
    }, [value]);
    
    const handleTabChange = React.useCallback((tabValue: string) => {
      if (value === undefined) {
        setActiveTab(tabValue);
      }
      onValueChange?.(tabValue);
    }, [onValueChange, value]);
    
    return (
      <TabsContext.Provider value={{
        activeTab,
        onTabChange: handleTabChange,
        orientation,
        disabled
      }}>
        <div
          ref={ref}
          className={cn(tabsRootVariants({ variant, orientation, size }), className)}
          data-orientation={orientation}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = "Tabs";

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant, children, ...props }, ref) => {
    const { orientation } = useTabsContext();
    
    return (
      <div
        ref={ref}
        role="tablist"
        aria-orientation={orientation}
        className={cn(tabsListVariants({ variant, orientation }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsList.displayName = "TabsList";

export const TabTrigger = React.forwardRef<HTMLButtonElement, TabTriggerProps>(
  ({ className, variant, size, value, children, ...props }, ref) => {
    const { activeTab, onTabChange, orientation, disabled } = useTabsContext();
    const isActive = activeTab === value;
    
    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        aria-controls={`tabpanel-${value}`}
        id={`tab-${value}`}
        disabled={disabled}
        data-state={isActive ? "active" : "inactive"}
        tabIndex={isActive ? 0 : -1}
        className={cn(tabTriggerVariants({ variant, orientation, size }), className)}
        onClick={() => onTabChange(value)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabTrigger.displayName = "TabTrigger";

export const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>(
  ({ className, variant, size, value, children, ...props }, ref) => {
    const { activeTab, orientation } = useTabsContext();
    const isActive = activeTab === value;
    
    if (!isActive) return null;
    
    return (
      <div
        ref={ref}
        role="tabpanel"
        aria-labelledby={`tab-${value}`}
        id={`tabpanel-${value}`}
        tabIndex={0}
        data-state={isActive ? "active" : "inactive"}
        className={cn(tabContentVariants({ variant, orientation, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabContent.displayName = "TabContent";
