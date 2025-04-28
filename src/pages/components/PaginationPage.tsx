import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2 } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const TOTAL_PAGES = 10;

const codeBasic = `
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
`;

const codeWithEllipsis = `
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">6</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
`;

const codeCustom = `
<Pagination>
  <PaginationContent className="gap-2">
    <PaginationItem>
      <PaginationPrevious href="#" className="bg-primary/10 text-primary hover:bg-primary/20" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" className="bg-primary/10 text-primary hover:bg-primary/20">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive className="bg-primary text-primary-foreground">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" className="bg-primary/10 text-primary hover:bg-primary/20">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" className="bg-primary/10 text-primary hover:bg-primary/20" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
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

const PaginationPage = () => {
  // State for interactive paginations
  const [basicPage, setBasicPage] = useState(1);
  const [ellipsisPage, setEllipsisPage] = useState(1);

  // Helper for ellipsis pagination (show first, ellipsis, last 3, current)
  const getEllipsisPages = () => {
    if (ellipsisPage <= 4) {
      return [1, 2, 3, 4, 5, "ellipsis", 10];
    } else if (ellipsisPage >= 7) {
      return [1, "ellipsis", 6, 7, 8, 9, 10];
    } else {
      return [
        1,
        "ellipsis",
        ellipsisPage - 1,
        ellipsisPage,
        ellipsisPage + 1,
        "ellipsis",
        10,
      ];
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">
        Pagination Component
      </h1>
      <div className="max-w-2xl space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-secondary">
            Overview
          </h2>
          <p className="text-muted-foreground mb-6">
            Pagination allows users to navigate through multiple pages of
            content. It's particularly useful when dealing with large datasets
            or content that needs to be split across multiple pages.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-primary">
            Basic Pagination
          </h2>
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-primary">Default Pagination</CardTitle>
              <CardDescription>
                Simple pagination with previous/next buttons
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setBasicPage((p) => Math.max(1, p - 1));
                      }}
                      disabled={basicPage === 1}
                    />
                  </PaginationItem>
                  {[1, 2, 3].map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={basicPage === page}
                        onClick={(e) => {
                          e.preventDefault();
                          setBasicPage(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setBasicPage((p) => Math.min(3, p + 1));
                      }}
                      disabled={basicPage === 3}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <CodeExample code={codeBasic} title="Basic Pagination Code" />
            </CardContent>
          </Card>
          <div className="mt-2 text-sm text-muted-foreground">
            Current page: {basicPage}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-secondary">
            Pagination with Ellipsis
          </h2>
          <Card className="border-secondary/20 shadow-lg">
            <CardHeader className="bg-secondary/5">
              <CardTitle className="text-secondary">
                Ellipsis Pagination
              </CardTitle>
              <CardDescription>
                Pagination with ellipsis for large page numbers
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setEllipsisPage((p) => Math.max(1, p - 1));
                      }}
                      disabled={ellipsisPage === 1}
                    />
                  </PaginationItem>
                  {getEllipsisPages().map((page, idx) =>
                    page === "ellipsis" ? (
                      <PaginationItem key={"ellipsis-" + idx}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    ) : (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          isActive={ellipsisPage === page}
                          onClick={(e) => {
                            e.preventDefault();
                            setEllipsisPage(page as number);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setEllipsisPage((p) => Math.min(TOTAL_PAGES, p + 1));
                      }}
                      disabled={ellipsisPage === TOTAL_PAGES}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <CodeExample
                code={codeWithEllipsis}
                title="Pagination with Ellipsis Code"
              />
            </CardContent>
          </Card>
          <div className="mt-2 text-sm text-muted-foreground">
            Current page: {ellipsisPage}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-tertiary">
            Pagination with Icons Only
          </h2>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-info">
            Pagination with Disabled States
          </h2>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" disabled />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-secondary">
            Features
          </h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Previous and Next navigation</li>
            <li>Page numbers with active state</li>
            <li>Ellipsis for long page ranges</li>
            <li>Icons only navigation</li>
            <li>Disabled states for navigation</li>
            <li>Fully accessible</li>
            <li>Customizable styling</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-tertiary">
            Custom Pagination
          </h2>
          <Card className="border-tertiary/20 shadow-lg">
            <CardHeader className="bg-tertiary/5">
              <CardTitle className="text-tertiary">Custom Styling</CardTitle>
              <CardDescription>Pagination with custom styling</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Pagination>
                <PaginationContent className="gap-2">
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive
                      className="bg-primary text-primary-foreground"
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <CodeExample code={codeCustom} title="Custom Pagination Code" />
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            API Reference
          </h2>
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-primary">Component Props</CardTitle>
              <CardDescription>
                Available props for customization
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary">
                    Pagination Props
                  </h3>
                  <ul className="list-disc list-inside text-primary/80">
                    <li>className: string</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">
                    PaginationContent Props
                  </h3>
                  <ul className="list-disc list-inside text-primary/80">
                    <li>className: string</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">
                    PaginationItem Props
                  </h3>
                  <ul className="list-disc list-inside text-primary/80">
                    <li>className: string</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">
                    PaginationLink Props
                  </h3>
                  <ul className="list-disc list-inside text-primary/80">
                    <li>href: string</li>
                    <li>isActive: boolean</li>
                    <li>className: string</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">
                    PaginationPrevious/Next Props
                  </h3>
                  <ul className="list-disc list-inside text-primary/80">
                    <li>href: string</li>
                    <li>className: string</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default PaginationPage;
