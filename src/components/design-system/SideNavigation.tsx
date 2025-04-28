import React, { useState, useEffect } from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Style variants
const sidebarVariants = cva(
  "flex flex-col h-full transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-background border-r border-border",
        elevated: "bg-surface-elevated border-r shadow-sm border-border",
        muted: "bg-muted border-r border-border",
        accent: "bg-accent border-r border-border",
      },
      collapsed: {
        true: "w-16",
        false: "w-64",
      },
      position: {
        left: "left-0",
        right: "right-0",
      },
    },
    defaultVariants: {
      variant: "default",
      collapsed: false,
      position: "left",
    },
  }
);

const sidebarHeaderVariants = cva(
  "flex items-center px-4 h-16 border-b border-border",
  {
    variants: {
      collapsed: {
        true: "justify-center",
        false: "justify-between",
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
);

const sidebarSectionVariants = cva(
  "py-2",
  {
    variants: {
      collapsed: {
        true: "px-2",
        false: "px-3",
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
);

const sidebarSectionTitleVariants = cva(
  "text-xs uppercase font-semibold text-muted-foreground mb-2 tracking-wider",
  {
    variants: {
      collapsed: {
        true: "sr-only",
        false: "px-3",
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
);

const sidebarItemVariants = cva(
  "flex items-center rounded-md mb-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "hover:bg-primary/10 text-foreground",
        ghost: "hover:bg-muted",
        outline: "border hover:bg-muted/50",
      },
      collapsed: {
        true: "justify-center px-2 py-2",
        false: "px-3 py-2",
      },
      active: {
        true: "bg-primary text-primary-foreground hover:bg-primary/90",
        false: "",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
    },
    compoundVariants: [
      {
        active: true,
        variant: "default",
        className: "bg-primary/10 text-foreground font-medium hover:bg-primary/20",
      },
      {
        active: true,
        variant: "ghost",
        className: "bg-muted text-foreground font-medium",
      },
      {
        active: true,
        variant: "outline",
        className: "border-primary bg-primary/5 text-foreground font-medium",
      },
    ],
    defaultVariants: {
      variant: "default",
      collapsed: false,
      active: false,
      disabled: false,
    },
  }
);

// Component interfaces
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof sidebarVariants> {
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  collapseBehavior?: 'overlay' | 'push';
  collapsedBreakpoint?: number;
  collapsible?: boolean;
}

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof sidebarHeaderVariants> {
  icon: React.ReactNode;
  headerTitle: React.ReactNode;
  collapseButton?: boolean;
  onCollapseButtonClick?: () => void;
}

interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof sidebarSectionVariants> {
  title?: string;
}

interface SidebarItemProps extends React.LiHTMLAttributes<HTMLLIElement>,
  VariantProps<typeof sidebarItemVariants> {
  icon: React.ReactNode;
  label: string;
  href?: string;
  badge?: React.ReactNode;
  onClick?: () => void;
}

interface SidebarGroupProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

// Context for Sidebar state
interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  position: 'left' | 'right';
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined);

const useSidebarContext = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("Sidebar components must be used within a Sidebar");
  }
  return context;
};

// Component implementations
export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({
    className,
    variant,
    collapsed: controlledCollapsed,
    defaultCollapsed = false,
    onCollapsedChange,
    position = "left",
    collapseBehavior = "push",
    collapsedBreakpoint = 768,
    collapsible = true,
    children,
    ...props
  }, ref) => {
    // Handle controlled and uncontrolled collapsed state
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
    const [windowWidth, setWindowWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 0
    );
    
    const collapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;
    
    const setCollapsed = (value: boolean) => {
      if (collapsible) {
        if (controlledCollapsed === undefined) {
          setInternalCollapsed(value);
        }
        onCollapsedChange?.(value);
      }
    };
    
    // Handle collapsing on small screens
    useEffect(() => {
      if (typeof window !== "undefined") {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    
    useEffect(() => {
      if (windowWidth > 0) {
        if (windowWidth < collapsedBreakpoint) {
          setCollapsed(true);
        } else if (defaultCollapsed === false) {
          setCollapsed(false);
        }
      }
    }, [windowWidth, collapsedBreakpoint]);
    
    return (
      <SidebarContext.Provider value={{ collapsed, setCollapsed, position }}>
        <div
          ref={ref}
          className={cn(sidebarVariants({ variant, collapsed, position }), className)}
          data-collapsed={collapsed}
          data-position={position}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    );
  }
);

Sidebar.displayName = "Sidebar";

export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, icon, headerTitle, collapseButton = true, onCollapseButtonClick, ...props }, ref) => {
    const { collapsed, setCollapsed, position } = useSidebarContext();
    
    const handleCollapseClick = () => {
      if (onCollapseButtonClick) {
        onCollapseButtonClick();
      } else {
        setCollapsed(!collapsed);
      }
    };
    
    return (
      <div
        ref={ref}
        className={cn(sidebarHeaderVariants({ collapsed }), className)}
        {...props}
      >
        <div className="flex items-center">
          {icon && <div className={cn("text-foreground", !collapsed && "mr-3")}>{icon}</div>}
          {!collapsed && <div className="font-semibold text-foreground">{headerTitle}</div>}
        </div>
        {!collapsed && collapseButton && (
          <button
            onClick={handleCollapseClick}
            className="text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-4 w-4 transition-transform ${position === 'left' ? 'rotate-0' : 'rotate-180'}`}
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        )}
        {collapsed && collapseButton && (
          <button
            onClick={handleCollapseClick}
            className="text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1 absolute top-4 -right-3 bg-background border border-border shadow-sm"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-4 w-4 transition-transform ${position === 'left' ? 'rotate-180' : 'rotate-0'}`}
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

SidebarHeader.displayName = "SidebarHeader";

export const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ className, title, children, ...props }, ref) => {
    const { collapsed } = useSidebarContext();
    
    return (
      <div
        ref={ref}
        className={cn(sidebarSectionVariants({ collapsed }), className)}
        {...props}
      >
        {title && (
          <h3 className={cn(sidebarSectionTitleVariants({ collapsed }))}>
            {title}
          </h3>
        )}
        {children}
      </div>
    );
  }
);

SidebarSection.displayName = "SidebarSection";

export const SidebarGroup = React.forwardRef<HTMLUListElement, SidebarGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn("list-none m-0 p-0", className)}
        {...props}
      >
        {children}
      </ul>
    );
  }
);

SidebarGroup.displayName = "SidebarGroup";

export const SidebarItem = React.forwardRef<HTMLLIElement, SidebarItemProps>(
  ({ className, variant, icon, label, href, badge, active, disabled, onClick, ...props }, ref) => {
    const { collapsed } = useSidebarContext();
    
    const content = (
      <div className="flex items-center w-full">
        <span className={cn("flex-shrink-0", !collapsed && "mr-3")}>{icon}</span>
        {!collapsed && (
          <span className="flex-grow whitespace-nowrap overflow-hidden text-ellipsis">
            {label}
          </span>
        )}
        {!collapsed && badge && <span className="ml-auto">{badge}</span>}
      </div>
    );
    
    const itemClassName = cn(
      sidebarItemVariants({ variant, collapsed, active, disabled }),
      className
    );
    
    if (href) {
      return (
        <li ref={ref} {...props}>
          <a
            href={href}
            className={itemClassName}
            aria-disabled={disabled}
            onClick={disabled ? (e) => e.preventDefault() : onClick}
            aria-current={active ? "page" : undefined}
          >
            {content}
          </a>
        </li>
      );
    }
    
    return (
      <li ref={ref} {...props}>
        <button
          className={itemClassName}
          disabled={disabled}
          onClick={onClick}
          aria-current={active ? "page" : undefined}
        >
          {content}
        </button>
      </li>
    );
  }
);

SidebarItem.displayName = "SidebarItem";
