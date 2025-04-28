import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
import type { Meta, StoryObj } from "@storybook/react";
import "@/index.css";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "Accordion type (single or multiple)",
      table: {
        type: { summary: '"single" | "multiple"' },
        defaultValue: { summary: "single" },
      },
    },
    collapsible: {
      control: "boolean",
      description: "Allow all items to be collapsed",
      table: { type: { summary: "boolean" }, defaultValue: { summary: true } },
    },
    defaultValue: {
      control: "text",
      description: "Default open item(s)",
      table: { type: { summary: "string | string[]" } },
    },
    value: {
      control: "text",
      description: "Controlled open item(s)",
      table: { type: { summary: "string | string[]" } },
    },
    onValueChange: {
      action: "onValueChange",
      description: "Callback when open item(s) change",
      table: { type: { summary: "(value: string | string[]) => void" } },
    },
    children: { control: false },
  },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Playground: Story = {
  args: {
    type: "multiple",
    collapsible: true,
    defaultValue: "item-1",
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

export const MultipleOpen: Story = {
  args: {
    type: "single",
    collapsible: true,
    defaultValue: ["item-1", "item-2"],
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>First item</AccordionTrigger>
          <AccordionContent>First content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second item</AccordionTrigger>
          <AccordionContent>Second content</AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};
