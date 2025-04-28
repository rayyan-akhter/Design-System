
import React from 'react';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '@/components/design-system/Tabs';

const TabsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tabs Component</h1>
      <p className="text-muted-foreground mb-8">
        Tabs organize content into separate views where only one view is visible at a time.
      </p>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Default Tabs</h2>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="p-4">
              Tabs are used to organize content into different sections and allow users to navigate between them.
            </TabsContent>
            <TabsContent value="features" className="p-4">
              Features include keyboard navigation, customizable styles, and accessible markup.
            </TabsContent>
            <TabsContent value="usage" className="p-4">
              Tabs are best used when you need to switch between different views in the same context.
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Vertical Tabs</h2>
          <Tabs defaultValue="tab1" orientation="vertical">
            <TabsList>
              <TabsTrigger value="tab1">First Tab</TabsTrigger>
              <TabsTrigger value="tab2">Second Tab</TabsTrigger>
              <TabsTrigger value="tab3">Third Tab</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="p-4">
              Content for the first tab goes here.
            </TabsContent>
            <TabsContent value="tab2" className="p-4">
              Content for the second tab goes here.
            </TabsContent>
            <TabsContent value="tab3" className="p-4">
              Content for the third tab goes here.
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
};

export default TabsPage;
