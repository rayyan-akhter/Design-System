
import React from 'react';
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@/components/design-system/Accordion';

const AccordionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Accordion Component</h1>
      <p className="text-muted-foreground mb-8">
        Accordions display expandable sections of content, useful for organizing and presenting information in a compact format.
      </p>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Default Accordion</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is an accordion?</AccordionTrigger>
              <AccordionContent>
                An accordion is a vertically stacked set of interactive headings that each reveal a section of content.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>When to use accordions?</AccordionTrigger>
              <AccordionContent>
                Use accordions to organize related information into collapsible sections, making the content more manageable and easier to navigate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Best practices</AccordionTrigger>
              <AccordionContent>
                Keep content concise, use clear headings, and consider if an accordion is the best format for your content before implementing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Multiple Sections</h2>
          <Accordion type="multiple">
            <AccordionItem value="multi-1">
              <AccordionTrigger>Multiple sections can be open</AccordionTrigger>
              <AccordionContent>
                This accordion allows multiple sections to be expanded at once.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="multi-2">
              <AccordionTrigger>Independent sections</AccordionTrigger>
              <AccordionContent>
                Each section operates independently of the others.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
};

export default AccordionPage;
