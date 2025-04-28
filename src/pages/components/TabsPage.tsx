
import React from 'react';
import { 
  Tabs, 
  TabsList, 
  TabTrigger, 
  TabContent 
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
              <TabTrigger value="overview">Overview</TabTrigger>
              <TabTrigger value="features">Features</TabTrigger>
              <TabTrigger value="usage">Usage</TabTrigger>
            </TabsList>
            <TabContent value="overview" className="p-4">
              Tabs are used to organize content into different sections and allow users to navigate between them.
            </TabContent>
            <TabContent value="features" className="p-4">
              Features include keyboard navigation, customizable styles, and accessible markup.
            </TabContent>
            <TabContent value="usage" className="p-4">
              Tabs are best used when you need to switch between different views in the same context.
            </TabContent>
          </Tabs>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Vertical Tabs</h2>
          <Tabs defaultValue="tab1" orientation="vertical">
            <TabsList>
              <TabTrigger value="tab1">First Tab</TabTrigger>
              <TabTrigger value="tab2">Second Tab</TabTrigger>
              <TabTrigger value="tab3">Third Tab</TabTrigger>
            </TabsList>
            <TabContent value="tab1" className="p-4">
              Content for the first tab goes here.
            </TabContent>
            <TabContent value="tab2" className="p-4">
              Content for the second tab goes here.
            </TabContent>
            <TabContent value="tab3" className="p-4">
              Content for the third tab goes here.
            </TabContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
};

export default TabsPage;
