import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "./pagination";
import type { Meta, StoryObj } from "@storybook/react";
import "@/index.css";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
      description: "Current active page",
      table: { type: { summary: "number" }, defaultValue: { summary: 1 } },
    },
    totalPages: {
      control: { type: "number", min: 1 },
      description: "Total number of pages",
      table: { type: { summary: "number" }, defaultValue: { summary: 5 } },
    },
    showEllipsis: {
      control: "boolean",
      description: "Show ellipsis for long page ranges",
      table: { type: { summary: "boolean" }, defaultValue: { summary: true } },
    },
    custom: {
      control: "boolean",
      description: "Use custom styling",
      table: { type: { summary: "boolean" }, defaultValue: { summary: false } },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

function getPages(
  currentPage: number,
  totalPages: number,
  showEllipsis: boolean
) {
  if (!showEllipsis || totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [1];
  if (currentPage > 3) pages.push("ellipsis1");
  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(totalPages - 1, currentPage + 1);
    i++
  ) {
    pages.push(i);
  }
  if (currentPage < totalPages - 2) pages.push("ellipsis2");
  pages.push(totalPages);
  return pages;
}

export const Playground: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    showEllipsis: true,
    custom: false,
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);

    useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);

    return (
      <Pagination>
        <PaginationContent className={args.custom ? "gap-2" : undefined}>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              disabled={page === 1}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.max(1, p - 1));
              }}
              className={
                args.custom
                  ? "bg-primary/10 text-primary hover:bg-primary/20"
                  : undefined
              }
            />
          </PaginationItem>
          {getPages(page, args.totalPages, args.showEllipsis).map((p, idx) =>
            typeof p === "string" ? (
              <PaginationItem key={p + idx}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={page === p}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(p);
                  }}
                  className={
                    args.custom
                      ? page === p
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                      : undefined
                  }
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationNext
              href="#"
              disabled={page === args.totalPages}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.min(args.totalPages, p + 1));
              }}
              className={
                args.custom
                  ? "bg-primary/10 text-primary hover:bg-primary/20"
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
};

export const Ellipsis: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    showEllipsis: true,
    custom: true
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);

    useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              disabled={page === 1}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.max(1, p - 1));
              }}
            />
          </PaginationItem>
          {getPages(page, args.totalPages, args.showEllipsis).map((p, idx) =>
            typeof p === "string" ? (
              <PaginationItem key={p + idx}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={page === p}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(p);
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationNext
              href="#"
              disabled={page === args.totalPages}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.min(args.totalPages, p + 1));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
};

export const IconsOnly: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);

    useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              disabled={page === 1}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.max(1, p - 1));
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              disabled={page === args.totalPages}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.min(args.totalPages, p + 1));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 1,
    totalPages: 30,
    showEllipsis: true
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);

    useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              disabled={page === 1}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.max(1, p - 1));
              }}
            />
          </PaginationItem>
          {[1, 2, 3].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={page === p}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(p);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              disabled={page === args.totalPages}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.min(args.totalPages, p + 1));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
};

export const Custom: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    custom: true,
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);

    useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);

    return (
      <Pagination>
        <PaginationContent className="gap-2">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              disabled={page === 1}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.max(1, p - 1));
              }}
              className="bg-primary/10 text-primary hover:bg-primary/20"
            />
          </PaginationItem>
          {[1, 2, 3].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={page === p}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(p);
                }}
                className={
                  page === p
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              disabled={page === args.totalPages}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.min(args.totalPages, p + 1));
              }}
              className="bg-primary/10 text-primary hover:bg-primary/20"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
};
