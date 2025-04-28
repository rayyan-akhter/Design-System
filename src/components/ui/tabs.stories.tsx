import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import type { Meta, StoryObj } from "@storybook/react";
import "@/index.css";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      description: "Default selected tab",
      table: { type: { summary: "string" } },
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Tab orientation",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: "horizontal" },
      },
    },
    value: {
      control: "text",
      description: "Controlled selected tab",
      table: { type: { summary: "string" } },
    },
    onValueChange: {
      action: "onValueChange",
      description: "Callback when tab changes",
      table: { type: { summary: "(value: string) => void" } },
    },
    children: { control: false },
  },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

const tabData = [
  { value: "account", label: "Account", content: "Account content" },
  { value: "password", label: "Password", content: "Password content" },
  { value: "settings", label: "Settings", content: "Settings content" },
];

export const Playground: Story = {
  args: {
    defaultValue: "account",
    orientation: "horizontal",
  },
  render: (args) => {
    const isVertical = args.orientation === "vertical";
    return (
      <Tabs {...args}>
        <TabsList
          className={
            isVertical ? "flex flex-col h-auto bg-tertiary/10" : "bg-primary/10"
          }
        >
          {tabData.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    );
  },
};

export const GridTabs: Story = {
  args: {
    defaultValue: "overview",
    orientation: "horizontal",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList
        className={
          args.orientation === "vertical"
            ? "flex flex-col h-auto bg-secondary/10"
            : "grid w-full grid-cols-3 bg-secondary/10"
        }
      >
        <TabsTrigger
          value="overview"
          className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="analytics"
          className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary"
        >
          Analytics
        </TabsTrigger>
        <TabsTrigger
          value="reports"
          className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary"
        >
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="overview"
        className="mt-4 p-4 bg-secondary/5 rounded-lg text-secondary"
      >
        <p>View your dashboard overview and key metrics.</p>
      </TabsContent>
      <TabsContent
        value="analytics"
        className="mt-4 p-4 bg-secondary/5 rounded-lg text-secondary"
      >
        <p>Detailed analytics and performance metrics.</p>
      </TabsContent>
      <TabsContent
        value="reports"
        className="mt-4 p-4 bg-secondary/5 rounded-lg text-secondary"
      >
        <p>Generate and view detailed reports.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const VerticalTabs: Story = {
  args: {
    defaultValue: "profile",
    orientation: "horizontal",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList
        className={
          args.orientation === "vertical"
            ? "flex flex-col h-auto bg-tertiary/10"
            : "bg-tertiary/10"
        }
      >
        <TabsTrigger
          value="profile"
          className="data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary"
        >
          Profile
        </TabsTrigger>
        <TabsTrigger
          value="notifications"
          className="data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary"
        >
          Notifications
        </TabsTrigger>
        <TabsTrigger
          value="security"
          className="data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary"
        >
          Security
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="profile"
        className="mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary"
      >
        <p>Manage your profile information and preferences.</p>
      </TabsContent>
      <TabsContent
        value="notifications"
        className="mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary"
      >
        <p>Configure your notification settings.</p>
      </TabsContent>
      <TabsContent
        value="security"
        className="mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary"
      >
        <p>Manage your security settings and preferences.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const DisabledTabs: Story = {
  args: {
    defaultValue: "active",
    orientation: "horizontal",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList
        className={
          args.orientation === "vertical"
            ? "flex flex-col h-auto bg-info/10"
            : "bg-info/10"
        }
      >
        <TabsTrigger
          value="active"
          className="data-[state=active]:bg-info data-[state=active]:text-info-foreground text-info"
        >
          Active
        </TabsTrigger>
        <TabsTrigger value="disabled" disabled className="opacity-50">
          Disabled
        </TabsTrigger>
        <TabsTrigger
          value="inactive"
          className="data-[state=active]:bg-info data-[state=active]:text-info-foreground text-info"
        >
          Inactive
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="active"
        className="mt-4 p-4 bg-info/5 rounded-lg text-info"
      >
        <p>This tab is active and can be selected.</p>
      </TabsContent>
      <TabsContent
        value="disabled"
        className="mt-4 p-4 bg-info/5 rounded-lg text-info"
      >
        <p>This tab is disabled and cannot be selected.</p>
      </TabsContent>
      <TabsContent
        value="inactive"
        className="mt-4 p-4 bg-info/5 rounded-lg text-info"
      >
        <p>This tab is inactive but can be selected.</p>
      </TabsContent>
    </Tabs>
  ),
};
