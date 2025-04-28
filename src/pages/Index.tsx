
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabTrigger, TabContent } from "@/components/design-system/Tabs";
import { Badge } from "@/components/design-system/Badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/design-system/Accordion";
import { Sidebar, SidebarHeader, SidebarSection, SidebarGroup, SidebarItem } from "@/components/design-system/SideNavigation";
import ColorSystem from "@/components/design-system/ColorSystem";

const Index = () => {
  const [activeTab, setActiveTab] = React.useState("colors");
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  return (
    <div className="min-h-screen flex">
      <Sidebar 
        variant="default" 
        collapsed={sidebarCollapsed} 
        onCollapsedChange={setSidebarCollapsed}
      >
        <SidebarHeader 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          title="Design System"
        />
        
        <div className="flex-1 overflow-auto">
          <SidebarSection title="Components">
            <SidebarGroup>
              <SidebarItem 
                icon={<span className="w-5 h-5 flex items-center justify-center">🎨</span>} 
                label="Colors" 
                active={activeTab === "colors"}
                onClick={() => setActiveTab("colors")}
              />
              <SidebarItem 
                icon={<span className="w-5 h-5 flex items-center justify-center">🏷️</span>} 
                label="Badge" 
                active={activeTab === "badge"}
                onClick={() => setActiveTab("badge")}
              />
              <SidebarItem 
                icon={<span className="w-5 h-5 flex items-center justify-center">🪗</span>} 
                label="Accordion" 
                active={activeTab === "accordion"}
                onClick={() => setActiveTab("accordion")}
              />
              <SidebarItem 
                icon={<span className="w-5 h-5 flex items-center justify-center">📑</span>} 
                label="Tabs" 
                active={activeTab === "tabs"}
                onClick={() => setActiveTab("tabs")}
              />
              <SidebarItem 
                icon={<span className="w-5 h-5 flex items-center justify-center">🧭</span>} 
                label="Navigation" 
                active={activeTab === "navigation"}
                onClick={() => setActiveTab("navigation")}
              />
            </SidebarGroup>
          </SidebarSection>
        </div>
      </Sidebar>

      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          <header className="border-b pb-4 mb-6">
            <h1 className="text-3xl font-bold">Enterprise UI Component System</h1>
            <p className="text-muted-foreground">A comprehensive design system with accessible, responsive components</p>
          </header>

          {activeTab === "colors" && (
            <ColorSystem />
          )}

          {activeTab === "badge" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Badge Component</h2>
                <p className="text-muted-foreground mb-6">
                  Badges are used to highlight an item's status for quick recognition.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Badge Variants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="tertiary">Tertiary</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="error">Error</Badge>
                      <Badge variant="info">Info</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="ghost">Ghost</Badge>
                    </div>

                    <div className="mt-8">
                      <h3 className="font-semibold mb-4">Badge Sizes</h3>
                      <div className="flex flex-wrap items-center gap-4">
                        <Badge size="sm">Small</Badge>
                        <Badge size="md">Medium</Badge>
                        <Badge size="lg">Large</Badge>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="font-semibold mb-4">Removable Badges</h3>
                      <div className="flex flex-wrap gap-4">
                        <Badge removable onRemove={() => console.log('Badge removed')}>Removable</Badge>
                        <Badge variant="secondary" removable onRemove={() => console.log('Badge removed')}>Removable</Badge>
                        <Badge variant="error" removable onRemove={() => console.log('Badge removed')}>Removable</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Badge Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-2">Use Cases</h3>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Status indicators</li>
                      <li>Count notifications</li>
                      <li>Labels and tags</li>
                      <li>Feature highlights</li>
                    </ul>

                    <h3 className="font-semibold mb-2 mt-4">Accessibility</h3>
                    <p className="mb-4">
                      Badges maintain a minimum 4.5:1 contrast ratio for text readability. 
                      Removable badges use aria-label for screen readers and have appropriate focus states.
                    </p>

                    <h3 className="font-semibold mb-2 mt-4">Best Practices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <h4 className="font-medium text-success mb-1">Do</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Keep badge text short and meaningful</li>
                          <li>Use consistent badge types across the application</li>
                          <li>Use appropriate semantic colors for status</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-error mb-1">Don't</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Overuse badges on a single page</li>
                          <li>Use long phrases in badges</li>
                          <li>Use badges for primary actions</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          )}

          {activeTab === "accordion" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Accordion Component</h2>
                <p className="text-muted-foreground mb-6">
                  Accordions display a list of high-level options that expand to reveal more content.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Accordion Variants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-8">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Default Variant</h3>
                        <Accordion type="single" defaultValue="item-1" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger>What is an accordion?</AccordionTrigger>
                            <AccordionContent>
                              An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>When to use accordions?</AccordionTrigger>
                            <AccordionContent>
                              Use accordions to organize related information in a limited space. They are useful for FAQ sections, category filters, and nested navigation menus.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>Accessibility features</AccordionTrigger>
                            <AccordionContent>
                              Accordions are built with appropriate ARIA attributes for screen readers and support keyboard navigation. Each accordion header is a button that can be activated with Space or Enter keys.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Bordered Variant</h3>
                        <Accordion type="multiple" variant="bordered">
                          <AccordionItem value="item-1" variant="bordered">
                            <AccordionTrigger variant="bordered">Multiple items can be open</AccordionTrigger>
                            <AccordionContent variant="bordered">
                              With the multiple type, multiple accordion items can be opened at the same time.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2" variant="bordered">
                            <AccordionTrigger variant="bordered">Independent sections</AccordionTrigger>
                            <AccordionContent variant="bordered">
                              Each section operates independently, allowing users to view multiple content sections simultaneously.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Plain Variant</h3>
                        <Accordion type="single" variant="plain">
                          <AccordionItem value="item-1" variant="plain">
                            <AccordionTrigger variant="plain">Minimalist design</AccordionTrigger>
                            <AccordionContent variant="plain">
                              The plain variant removes borders for a cleaner, more minimal appearance, suitable for content-dense interfaces.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2" variant="plain">
                            <AccordionTrigger variant="plain">Inline integration</AccordionTrigger>
                            <AccordionContent variant="plain">
                              Works well when the accordion needs to blend into surrounding content without strong visual separation.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Disabled State</h3>
                        <Accordion type="single">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Available section</AccordionTrigger>
                            <AccordionContent>
                              This section can be expanded and collapsed normally.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2" disabled>
                            <AccordionTrigger>Disabled section</AccordionTrigger>
                            <AccordionContent>
                              This content is not accessible because the section is disabled.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Accordion Usage Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Keyboard navigation support with arrow keys</li>
                      <li>Proper ARIA roles and attributes for screen readers</li>
                      <li>Support for single or multiple open sections</li>
                      <li>Collapsible option to close all sections</li>
                      <li>Animated transitions for smooth open/close effects</li>
                    </ul>

                    <h3 className="font-semibold mb-2 mt-4">Accessibility</h3>
                    <p className="mb-4">
                      Accordions use <code>aria-expanded</code>, <code>aria-controls</code>, and appropriate 
                      heading structure for screen reader users. Focus management ensures keyboard users 
                      can navigate effectively through tabbing and arrow keys.
                    </p>

                    <h3 className="font-semibold mb-2 mt-4">Best Practices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <h4 className="font-medium text-success mb-1">Do</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Use clear, concise headers that describe the content</li>
                          <li>Organize content into logical groups</li>
                          <li>Consider using single-open mode for focused workflows</li>
                          <li>Use multiple-open mode when comparing sections is important</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-error mb-1">Don't</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Nest accordions more than one level deep</li>
                          <li>Hide critical information in accordion sections</li>
                          <li>Use for primary navigation on mobile sites</li>
                          <li>Place interactive elements like forms in accordion headers</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          )}

          {activeTab === "tabs" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Tabs Component</h2>
                <p className="text-muted-foreground mb-6">
                  Tabs organize content into different views where only one view is visible at a time.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Tab Variants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-12">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Default Tabs</h3>
                        <Tabs defaultValue="tab1" variant="default">
                          <TabsList>
                            <TabTrigger value="tab1">Account</TabTrigger>
                            <TabTrigger value="tab2">Settings</TabTrigger>
                            <TabTrigger value="tab3">Notifications</TabTrigger>
                          </TabsList>
                          <TabContent value="tab1">
                            <div className="p-4 border rounded-md mt-2">
                              <h4 className="font-medium mb-2">Account Information</h4>
                              <p className="text-muted-foreground">
                                Manage your account details, profile information and linked accounts.
                              </p>
                            </div>
                          </TabContent>
                          <TabContent value="tab2">
                            <div className="p-4 border rounded-md mt-2">
                              <h4 className="font-medium mb-2">User Settings</h4>
                              <p className="text-muted-foreground">
                                Configure application preferences and customize your experience.
                              </p>
                            </div>
                          </TabContent>
                          <TabContent value="tab3">
                            <div className="p-4 border rounded-md mt-2">
                              <h4 className="font-medium mb-2">Notifications</h4>
                              <p className="text-muted-foreground">
                                Control which notifications you receive and how they're delivered.
                              </p>
                            </div>
                          </TabContent>
                        </Tabs>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Outline Tabs</h3>
                        <Tabs defaultValue="tab1" variant="outline">
                          <TabsList variant="outline">
                            <TabTrigger value="tab1" variant="outline">Activity</TabTrigger>
                            <TabTrigger value="tab2" variant="outline">Analytics</TabTrigger>
                            <TabTrigger value="tab3" variant="outline">Reports</TabTrigger>
                          </TabsList>
                          <TabContent value="tab1" variant="outline">
                            <div className="p-4 border rounded-md mt-2">
                              <h4 className="font-medium mb-2">Recent Activity</h4>
                              <p className="text-muted-foreground">
                                View logs of your recent actions and system events.
                              </p>
                            </div>
                          </TabContent>
                          <TabContent value="tab2" variant="outline">
                            <div className="p-4 border rounded-md mt-2">
                              <h4 className="font-medium mb-2">Analytics Dashboard</h4>
                              <p className="text-muted-foreground">
                                Visualize key metrics and performance indicators.
                              </p>
                            </div>
                          </TabContent>
                          <TabContent value="tab3" variant="outline">
                            <div className="p-4 border rounded-md mt-2">
                              <h4 className="font-medium mb-2">Generated Reports</h4>
                              <p className="text-muted-foreground">
                                Access and download your saved reports and exports.
                              </p>
                            </div>
                          </TabContent>
                        </Tabs>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Pills Tabs</h3>
                        <Tabs defaultValue="tab1" variant="pills">
                          <TabsList variant="pills">
                            <TabTrigger value="tab1" variant="pills">Daily</TabTrigger>
                            <TabTrigger value="tab2" variant="pills">Weekly</TabTrigger>
                            <TabTrigger value="tab3" variant="pills">Monthly</TabTrigger>
                          </TabsList>
                          <TabContent value="tab1" variant="pills">
                            <div className="p-4 border rounded-md mt-2">
                              <h4 className="font-medium mb-2">Daily View</h4>
                              <p className="text-muted-foreground">
                                Detailed breakdown of daily performance metrics.
                              </p>
                            </div>
                          </TabContent>
                          <TabContent value="tab2" variant="pills">
                            <div className="p-4 border rounded-md mt-2">
                              <h4 className="font-medium mb-2">Weekly Summary</h4>
                              <p className="text-muted-foreground">
                                Aggregated view of metrics over the past week.
                              </p>
                            </div>
                          </TabContent>
                          <TabContent value="tab3" variant="pills">
                            <div className="p-4 border rounded-md mt-2">
                              <h4 className="font-medium mb-2">Monthly Report</h4>
                              <p className="text-muted-foreground">
                                Long-term trends and monthly performance overview.
                              </p>
                            </div>
                          </TabContent>
                        </Tabs>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Vertical Tabs</h3>
                        <Tabs defaultValue="tab1" orientation="vertical" variant="default">
                          <div className="flex gap-8">
                            <TabsList variant="default" orientation="vertical" className="w-48">
                              <TabTrigger value="tab1" variant="default" orientation="vertical">Overview</TabTrigger>
                              <TabTrigger value="tab2" variant="default" orientation="vertical">Features</TabTrigger>
                              <TabTrigger value="tab3" variant="default" orientation="vertical">Documentation</TabTrigger>
                              <TabTrigger value="tab4" disabled variant="default" orientation="vertical">Coming Soon</TabTrigger>
                            </TabsList>
                            <div className="flex-1">
                              <TabContent value="tab1" variant="default" orientation="vertical">
                                <div className="p-4 border rounded-md">
                                  <h4 className="font-medium mb-2">Product Overview</h4>
                                  <p className="text-muted-foreground">
                                    A high-level introduction to the product and its capabilities.
                                  </p>
                                </div>
                              </TabContent>
                              <TabContent value="tab2" variant="default" orientation="vertical">
                                <div className="p-4 border rounded-md">
                                  <h4 className="font-medium mb-2">Key Features</h4>
                                  <p className="text-muted-foreground">
                                    Detailed breakdown of all available features and capabilities.
                                  </p>
                                </div>
                              </TabContent>
                              <TabContent value="tab3" variant="default" orientation="vertical">
                                <div className="p-4 border rounded-md">
                                  <h4 className="font-medium mb-2">API Documentation</h4>
                                  <p className="text-muted-foreground">
                                    Technical documentation, guides and code examples.
                                  </p>
                                </div>
                              </TabContent>
                            </div>
                          </div>
                        </Tabs>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Tabs Usage Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Multiple visual variants (default, outline, pills, underline)</li>
                      <li>Supports horizontal and vertical orientations</li>
                      <li>Different sizing options</li>
                      <li>Keyboard navigation support</li>
                      <li>ARIA-compliant for accessibility</li>
                    </ul>

                    <h3 className="font-semibold mb-2 mt-4">Accessibility</h3>
                    <p className="mb-4">
                      Tabs implement the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabs/" className="text-primary underline">WAI-ARIA Tabs Pattern</a> with 
                      appropriate roles, aria-selected states, and keyboard interactions. 
                      Users can navigate between tabs using arrow keys and activate them with Space or Enter.
                    </p>

                    <h3 className="font-semibold mb-2 mt-4">Best Practices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <h4 className="font-medium text-success mb-1">Do</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Use short, descriptive tab labels</li>
                          <li>Organize content that belongs in different categories</li>
                          <li>Use tabs for content that doesn't need to be compared</li>
                          <li>Consider vertical tabs for longer tab labels</li>
                          <li>Keep tab content independent of each other</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-error mb-1">Don't</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Use tabs for sequential steps (use a stepper instead)</li>
                          <li>Hide critical information behind tabs</li>
                          <li>Use more than 5-7 tabs in a single group</li>
                          <li>Use tabs for content that needs side-by-side comparison</li>
                          <li>Nest tabs within tabs (creates confusing UI)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          )}

          {activeTab === "navigation" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Sidebar Navigation Component</h2>
                <p className="text-muted-foreground mb-6">
                  Sidebar navigation provides a consistent, vertical navigation pattern for applications.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Sidebar Variants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-12">
                      <div className="border rounded-lg p-6 bg-background">
                        <h3 className="text-lg font-medium mb-4">Default Sidebar</h3>
                        <div className="h-[400px] w-full border rounded-lg overflow-hidden flex">
                          <Sidebar variant="default" className="h-full">
                            <SidebarHeader 
                              icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                  <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                                </svg>
                              }
                              title="Default Sidebar"
                            />
                            <div className="flex-1 overflow-auto">
                              <SidebarSection title="Main Menu">
                                <SidebarGroup>
                                  <SidebarItem 
                                    icon={
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    } 
                                    label="Dashboard" 
                                    active
                                  />
                                  <SidebarItem 
                                    icon={
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    } 
                                    label="Team" 
                                    badge={<Badge size="sm">3</Badge>}
                                  />
                                  <SidebarItem 
                                    icon={
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    } 
                                    label="Messages" 
                                  />
                                  <SidebarItem 
                                    icon={
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    } 
                                    label="Settings" 
                                  />
                                </SidebarGroup>
                              </SidebarSection>
                              
                              <SidebarSection title="Resources">
                                <SidebarGroup>
                                  <SidebarItem 
                                    icon={
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 6H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 10H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 14H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 18H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 7H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 11H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    } 
                                    label="Documentation" 
                                  />
                                  <SidebarItem 
                                    icon={
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M21 19.9L17.79 16.69C17.3451 17.3999 16.7319 17.9921 16.0056 18.4148C15.2792 18.8374 14.4606 19.0779 13.6225 19.1181C12.7843 19.1583 11.947 18.997 11.1836 18.6459C10.4202 18.2948 9.7543 17.7643 9.24659 17.1011C8.73887 16.4379 8.40236 15.6622 8.26224 14.8407C8.12213 14.0192 8.18267 13.1777 8.43956 12.386C8.69645 11.5943 9.14217 10.875 9.73912 10.2914C10.336 9.70789 11.0624 9.27353 11.86 9.03003C12.6576 8.78654 13.5019 8.75092 14.3148 8.92631C15.1277 9.1017 15.8846 9.48288 16.52 10.03L19.73 6.81998C16.7416 3.32208 11.7608 2.11541 7.3851 3.73337C3.00942 5.35134 0.05323 9.48276 0.00119457 14.1648C-0.0508409 18.8469 2.81274 23.0518 7.15265 24.7749C11.4926 26.498 16.5072 25.429 19.58 22.02C20.69 20.81 21.53 19.39 22 17.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    } 
                                    label="Support" 
                                  />
                                </SidebarGroup>
                              </SidebarSection>
                            </div>
                          </Sidebar>
                          <div className="flex-1 p-6 bg-muted/20">
                            <h3 className="text-lg font-medium mb-2">Main Content Area</h3>
                            <p className="text-muted-foreground text-sm">This is where your main content would appear.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-6 bg-background">
                        <h3 className="text-lg font-medium mb-4">Collapsed Sidebar</h3>
                        <div className="h-[400px] w-full border rounded-lg overflow-hidden flex">
                          <Sidebar variant="default" collapsed className="h-full">
                            <SidebarHeader 
                              icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                  <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                                </svg>
                              }
                              title="Collapsed View"
                            />
                            <div className="flex-1 overflow-auto">
                              <SidebarSection title="Main Menu">
                                <SidebarGroup>
                                  <SidebarItem 
                                    icon={
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    } 
                                    label="Dashboard" 
                                    active
                                  />
                                  <SidebarItem 
                                    icon={
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    } 
                                    label="Team" 
                                  />
                                  <SidebarItem 
                                    icon={
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    } 
                                    label="Messages" 
                                  />
                                  <SidebarItem 
                                    icon={
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    } 
                                    label="Settings" 
                                  />
                                </SidebarGroup>
                              </SidebarSection>
                            </div>
                          </Sidebar>
                          <div className="flex-1 p-6 bg-muted/20">
                            <h3 className="text-lg font-medium mb-2">Main Content with Collapsed Sidebar</h3>
                            <p className="text-muted-foreground text-sm">The sidebar is now collapsed to icons-only mode, providing more space for content while maintaining navigation context.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Sidebar Navigation Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Collapsible design that supports both expanded and icon-only modes</li>
                      <li>Multiple visual variants (default, elevated, muted, etc.)</li>
                      <li>Section organization with headers and groups</li>
                      <li>Support for icons, labels, and badges</li>
                      <li>Interactive states (active, hover, disabled)</li>
                      <li>Responsive design with automatic collapsing at breakpoints</li>
                    </ul>

                    <h3 className="font-semibold mb-2 mt-4">Accessibility</h3>
                    <p className="mb-4">
                      The sidebar implements proper navigation landmarks with the <code>nav</code> role.
                      Interactive elements are accessible via keyboard with appropriate focus management and
                      explicit labeling for icon-only views. Proper ARIA attributes ensure screen reader users
                      understand the navigation context.
                    </p>

                    <h3 className="font-semibold mb-2 mt-4">Best Practices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <h4 className="font-medium text-success mb-1">Do</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Group related navigation items together</li>
                          <li>Use consistent, recognizable icons</li>
                          <li>Provide clear visual indication of active state</li>
                          <li>Keep the number of main navigation items manageable (5-7)</li>
                          <li>Ensure collapsed mode is still usable with recognizable icons</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-error mb-1">Don't</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Mix navigation with actions like "Save" or "Export"</li>
                          <li>Use overly similar icons that are hard to distinguish</li>
                          <li>Include too many items in a single section</li>
                          <li>Hide critical application functions in the sidebar</li>
                          <li>Use long labels that will truncate awkwardly</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          )}

          <div className="mt-12 border-t pt-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <h3 className="text-lg font-medium">Enterprise UI Component System</h3>
                <p className="text-sm text-muted-foreground">A reusable component library with accessibility built-in</p>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                  {sidebarCollapsed ? "Expand" : "Collapse"} Sidebar
                </Button>
                <Button size="sm" onClick={() => document.documentElement.classList.toggle('dark')}>Toggle Theme</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
