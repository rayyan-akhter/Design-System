import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/design-system/Accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2 } from "lucide-react";

const codeBasic = `
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components&apos; aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It&apos;s animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>
`;

const codeMultiple = `
<Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
    <AccordionContent>
      Yes. This accordion allows multiple items to be open at once.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it customizable?</AccordionTrigger>
    <AccordionContent>
      Yes. You can customize the appearance and behavior to match your needs.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it responsive?</AccordionTrigger>
    <AccordionContent>
      Yes. It works well on all screen sizes and devices.
    </AccordionContent>
  </AccordionItem>
</Accordion>
`;

const codeCustom = `
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1" className="border-none">
    <AccordionTrigger className="hover:no-underline">
      <div className="flex items-center gap-2">
        <span className="text-primary">Custom Trigger</span>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="p-4 bg-primary/5 rounded-lg">
        <p className="text-primary">Custom styled content</p>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
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

const AccordionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">
        Accordion Component
      </h1>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Overview</h2>
        <p className="text-muted-foreground">
          An accordion is a vertically stacked set of interactive headings that
          each contain a title, content snippet, or thumbnail representing a
          section of content. The headings function as controls that enable
          users to reveal or hide their associated sections of content.
        </p>
      </section>

      {/* Basic Accordion Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Basic Accordion
        </h2>
        <Card className="border-primary/20 shadow-lg">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-primary">Default Accordion</CardTitle>
            <CardDescription>
              Simple accordion with default styling
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <CodeExample code={codeBasic} title="Basic Accordion Code" />
          </CardContent>
        </Card>
      </section>

      {/* Multiple Accordion Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          Multiple Accordion
        </h2>
        <Card className="border-secondary/20 shadow-lg">
          <CardHeader className="bg-secondary/5">
            <CardTitle className="text-secondary">Multiple Items</CardTitle>
            <CardDescription>
              Allow multiple items to be open at once
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
                <AccordionContent>
                  Yes. This accordion allows multiple items to be open at once.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it customizable?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can customize the appearance and behavior to match
                  your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it responsive?</AccordionTrigger>
                <AccordionContent>
                  Yes. It works well on all screen sizes and devices.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <CodeExample code={codeMultiple} title="Multiple Accordion Code" />
          </CardContent>
        </Card>
      </section>

      {/* Custom Accordion Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-tertiary">
          Custom Accordion
        </h2>
        <Card className="border-tertiary/20 shadow-lg">
          <CardHeader className="bg-tertiary/5">
            <CardTitle className="text-tertiary">Custom Styling</CardTitle>
            <CardDescription>Accordion with custom styling</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <span className="text-tertiary">Custom Trigger</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 bg-tertiary/5 rounded-lg">
                    <p className="text-tertiary">Custom styled content</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <CodeExample code={codeCustom} title="Custom Accordion Code" />
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
                <h3 className="font-semibold text-primary">Accordion Props</h3>
                <ul className="list-disc list-inside text-primary/80">
                  <li>type: "single" | "multiple"</li>
                  <li>collapsible: boolean</li>
                  <li>defaultValue: string | string[]</li>
                  <li>value: string | string[]</li>
                  <li>{"onValueChange: (value: string | string[]) => void"}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary">
                  AccordionItem Props
                </h3>
                <ul className="list-disc list-inside text-primary/80">
                  <li>value: string</li>
                  <li>disabled: boolean</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary">
                  AccordionTrigger Props
                </h3>
                <ul className="list-disc list-inside text-primary/80">
                  <li>asChild: boolean</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary">
                  AccordionContent Props
                </h3>
                <ul className="list-disc list-inside text-primary/80">
                  <li>asChild: boolean</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default AccordionPage;
