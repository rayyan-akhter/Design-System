import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code2 } from "lucide-react";

const codeBasic = `
<Tabs defaultValue="account" className="w-full">
  <TabsList className="bg-primary/10">
    <TabsTrigger value="account" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary">Account</TabsTrigger>
    <TabsTrigger value="password" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary">Password</TabsTrigger>
    <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="mt-4 p-4 bg-primary/5 rounded-lg text-primary">
    <p>Manage your account settings and preferences.</p>
  </TabsContent>
  <TabsContent value="password" className="mt-4 p-4 bg-primary/5 rounded-lg text-primary">
    <p>Change your password and security settings.</p>
  </TabsContent>
  <TabsContent value="settings" className="mt-4 p-4 bg-primary/5 rounded-lg text-primary">
    <p>Configure your application settings.</p>
  </TabsContent>
</Tabs>
`;

const codeGrid = `
<Tabs defaultValue="overview" className="w-full">
  <TabsList className="grid w-full grid-cols-3 bg-secondary/10">
    <TabsTrigger value="overview" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary">Overview</TabsTrigger>
    <TabsTrigger value="analytics" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary">Analytics</TabsTrigger>
    <TabsTrigger value="reports" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-secondary">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="overview" className="mt-4 p-4 bg-secondary/5 rounded-lg text-secondary">
    <p>View your dashboard overview and key metrics.</p>
  </TabsContent>
  <TabsContent value="analytics" className="mt-4 p-4 bg-secondary/5 rounded-lg text-secondary">
    <p>Detailed analytics and performance metrics.</p>
  </TabsContent>
  <TabsContent value="reports" className="mt-4 p-4 bg-secondary/5 rounded-lg text-secondary">
    <p>Generate and view detailed reports.</p>
  </TabsContent>
</Tabs>
`;

const codeVertical = `
<Tabs defaultValue="profile" orientation="vertical" className="w-full">
  <TabsList className="flex flex-col h-auto bg-tertiary/10">
    <TabsTrigger value="profile" className="data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary">Profile</TabsTrigger>
    <TabsTrigger value="notifications" className="data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary">Notifications</TabsTrigger>
    <TabsTrigger value="security" className="data-[state=active]:bg-tertiary data-[state=active]:text-tertiary-foreground text-tertiary">Security</TabsTrigger>
  </TabsList>
  <TabsContent value="profile" className="mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary">
    <p>Manage your profile information and preferences.</p>
  </TabsContent>
  <TabsContent value="notifications" className="mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary">
    <p>Configure your notification settings.</p>
  </TabsContent>
  <TabsContent value="security" className="mt-0 ml-4 p-4 bg-tertiary/5 rounded-lg text-tertiary">
    <p>Manage your security settings and preferences.</p>
  </TabsContent>
</Tabs>
`;

const codeDisabled = `
<Tabs defaultValue="active" className="w-full">
  <TabsList className="bg-info/10">
    <TabsTrigger value="active" className="data-[state=active]:bg-info data-[state=active]:text-info-foreground text-info">Active</TabsTrigger>
    <TabsTrigger value="disabled" disabled className="opacity-50">Disabled</TabsTrigger>
    <TabsTrigger value="inactive" className="data-[state=active]:bg-info data-[state=active]:text-info-foreground text-info">Inactive</TabsTrigger>
  </TabsList>
  <TabsContent value="active" className="mt-4 p-4 bg-info/5 rounded-lg text-info">
    <p>This tab is active and can be selected.</p>
  </TabsContent>
  <TabsContent value="disabled" className="mt-4 p-4 bg-info/5 rounded-lg text-info">
    <p>This tab is disabled and cannot be selected.</p>
  </TabsContent>
  <TabsContent value="inactive" className="mt-4 p-4 bg-info/5 rounded-lg text-info">
    <p>This tab is inactive but can be selected.</p>
  </TabsContent>
</Tabs>
`;

const CodeExample = ({ code, title }: { code: string; title: string }) => (
  <Accordion type="single" collapsible className="mt-4">
    <AccordionItem value="code" className="border-none">
      <AccordionTrigger className="hover:no-underline">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Code2 className="h-4 w-4" />
          <span>View Code Example</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <pre className="mt-4 rounded bg-muted/60 p-4 text-xs overflow-x-auto">
          <code>{code}</code>
        </pre>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const TabsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Tabs Component</h1>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Overview</h2>
        <p className="text-muted-foreground">
          Tabs are a set of layered sections of content, known as tab panels,
          that are displayed one at a time. Each tab has an associated tab panel
          that contains the content to be displayed when that tab is selected.
        </p>
      </section>

      {/* Basic Tabs Example - Primary (Dark Blue) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Basic Tabs (Primary)
        </h2>
        <Card className="border-primary/20 shadow-lg">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-primary">Default Tabs</CardTitle>
            <CardDescription>Simple tabs with default styling</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="bg-primary/10">
                <TabsTrigger
                  value="account"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary"
                >
                  Account
                </TabsTrigger>
                <TabsTrigger
                  value="password"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary"
                >
                  Password
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary"
                >
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="account"
                className="mt-4 p-4 bg-primary/5 rounded-lg text-primary"
              >
                <p>Manage your account settings and preferences.</p>
              </TabsContent>
              <TabsContent
                value="password"
                className="mt-4 p-4 bg-primary/5 rounded-lg text-primary"
              >
                <p>Change your password and security settings.</p>
              </TabsContent>
              <TabsContent
                value="settings"
                className="mt-4 p-4 bg-primary/5 rounded-lg text-primary"
              >
                <p>Configure your application settings.</p>
              </TabsContent>
            </Tabs>
            <CodeExample code={codeBasic} title="Basic Tabs Code" />
          </CardContent>
        </Card>
      </section>

      {/* Grid Tabs Example - Secondary (Maroon) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          Grid Tabs (Secondary)
        </h2>
        <Card className="border-secondary/20 shadow-lg">
          <CardHeader className="bg-secondary/5">
            <CardTitle className="text-secondary">Grid Layout Tabs</CardTitle>
            <CardDescription>
              Tabs with grid layout for equal width
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-secondary/10">
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
            <CodeExample code={codeGrid} title="Grid Tabs Code" />
          </CardContent>
        </Card>
      </section>

      {/* Vertical Tabs Example - Tertiary (Light Blue) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-tertiary">
          Vertical Tabs (Tertiary)
        </h2>
        <Card className="border-tertiary/20 shadow-lg">
          <CardHeader className="bg-tertiary/5">
            <CardTitle className="text-tertiary">Vertical Layout</CardTitle>
            <CardDescription>Tabs arranged vertically</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex">
              <Tabs
                defaultValue="profile"
                orientation="vertical"
                className="w-full"
              >
                <TabsList className="flex flex-col h-auto bg-tertiary/10">
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
            </div>
            <CodeExample code={codeVertical} title="Vertical Tabs Code" />
          </CardContent>
        </Card>
        </section>

      {/* Disabled Tabs Example - Info (Light Accent) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-info">
          Disabled Tabs (Info)
        </h2>
        <Card className="border-info/20 shadow-lg">
          <CardHeader className="bg-info/5">
            <CardTitle className="text-info">Disabled State</CardTitle>
            <CardDescription>Tabs with disabled state</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="bg-info/10">
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
            <CodeExample code={codeDisabled} title="Disabled Tabs Code" />
          </CardContent>
        </Card>
        </section>

      {/* API Reference */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          API Reference
        </h2>
        <Card className="border-primary/20 shadow-lg">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-primary">Component Props</CardTitle>
            <CardDescription>Available props for customization</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary">Tabs Props</h3>
                <ul className="list-disc list-inside text-primary/80">
                  <li>defaultValue: The default selected tab</li>
                  <li>value: The currently selected tab</li>
                  <li>onValueChange: Callback when tab changes</li>
                  <li>orientation: "horizontal" | "vertical"</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary">
                  TabsTrigger Props
                </h3>
                <ul className="list-disc list-inside text-primary/80">
                  <li>value: The value of the tab</li>
                  <li>disabled: Whether the tab is disabled</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary">
                  TabsContent Props
                </h3>
                <ul className="list-disc list-inside text-primary/80">
                  <li>value: The value of the tab panel</li>
                </ul>
              </div>
      </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default TabsPage;
