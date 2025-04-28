
import React, { useState } from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Accordion Item Context
interface AccordionItemContextValue {
  open?: boolean;
  onToggle?: () => void;
  disabled?: boolean;
  id: string;
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | undefined>(undefined);

const useAccordionItemContext = () => {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error("Accordion compound components must be used within an AccordionItem");
  }
  return context;
};

// Accordion Context
interface AccordionContextValue {
  type: 'single' | 'multiple';
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined);

const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion compound components must be used within an Accordion");
  }
  return context;
};

// Style variants
const accordionVariants = cva("w-full", {
  variants: {
    variant: {
      default: "border rounded-lg",
      bordered: "border rounded-lg divide-y",
      plain: "",
    },
    size: {
      default: "",
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const accordionItemVariants = cva("", {
  variants: {
    variant: {
      default: "first:rounded-t-lg last:rounded-b-lg",
      bordered: "py-1",
      plain: "border-b last:border-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const accordionTriggerVariants = cva(
  "flex w-full items-center justify-between py-4 px-5 font-medium transition-all hover:bg-muted/50 [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        default: "rounded-t-lg",
        bordered: "",
        plain: "px-0",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "cursor-pointer",
      }
    },
    defaultVariants: {
      variant: "default",
      disabled: false,
    },
  }
);

const accordionContentVariants = cva(
  "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  {
    variants: {
      variant: {
        default: "px-5 pb-4 pt-0",
        bordered: "px-5 pb-4 pt-0",
        plain: "px-0 pb-4 pt-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Component interfaces
interface AccordionProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof accordionVariants> {
  type?: 'single' | 'multiple';
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  defaultValue?: string | string[];
  collapsible?: boolean;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof accordionItemVariants> {
  value: string;
  disabled?: boolean;
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof accordionTriggerVariants> {}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof accordionContentVariants> {}

// Component implementations
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, variant, size, type = 'single', value, defaultValue, onValueChange, collapsible = true, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<string | string[] | undefined>(value || defaultValue);
    
    const handleValueChange = (newValue: string | string[]) => {
      if (!value) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };
    
    const currentValue = value !== undefined ? value : internalValue;
    
    return (
      <AccordionContext.Provider value={{ type, value: currentValue, onValueChange: handleValueChange }}>
        <div 
          ref={ref} 
          className={cn(accordionVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = "Accordion";

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, variant, value, disabled, children, ...props }, ref) => {
    const { type, value: accordionValue, onValueChange } = useAccordionContext();
    
    const open = type === 'single' 
      ? accordionValue === value 
      : Array.isArray(accordionValue) && accordionValue.includes(value);
    
    const handleToggle = () => {
      if (disabled) return;
      
      if (type === 'single') {
        onValueChange?.(open ? "" : value);
      } else {
        if (!accordionValue) {
          onValueChange?.([value]);
        } else if (Array.isArray(accordionValue)) {
          if (open) {
            onValueChange?.(accordionValue.filter(v => v !== value));
          } else {
            onValueChange?.([...accordionValue, value]);
          }
        }
      }
    };
    
    const id = React.useId();
    
    return (
      <AccordionItemContext.Provider value={{ open, onToggle: handleToggle, disabled, id }}>
        <div 
          ref={ref}
          className={cn(accordionItemVariants({ variant }), className)}
          data-state={open ? "open" : "closed"}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, variant, children, ...props }, ref) => {
    const { open, onToggle, disabled, id } = useAccordionItemContext();
    
    return (
      <button
        ref={ref}
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-content`}
        id={`${id}-trigger`}
        onClick={onToggle}
        disabled={disabled}
        className={cn(accordionTriggerVariants({ variant, disabled }), className)}
        data-state={open ? "open" : "closed"}
        {...props}
      >
        {children}
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
          className="h-4 w-4 transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    );
  }
);

AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, variant, children, ...props }, ref) => {
    const { open, id } = useAccordionItemContext();
    
    return (
      <div
        ref={ref}
        id={`${id}-content`}
        aria-labelledby={`${id}-trigger`}
        role="region"
        hidden={!open}
        className={cn(accordionContentVariants({ variant }), className)}
        data-state={open ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionContent.displayName = "AccordionContent";
