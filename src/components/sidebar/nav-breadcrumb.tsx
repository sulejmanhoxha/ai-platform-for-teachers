"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function NavBreadcrumb() {
  const pathname = usePathname();

  const pathArray = pathname.split("/").filter(Boolean);
  const breadcrumbs = pathArray.map((path, index) => {
    const href = pathArray.slice(0, index + 1).join("/");
    return (
      <BreadcrumbItem key={index}>
        <BreadcrumbLink href={`/${href}`}>{path}</BreadcrumbLink>
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <>
            {index < breadcrumbs.length - 1 ? (
              breadcrumb
            ) : (
              <BreadcrumbPage key={index}>
                {breadcrumb.props.children}
              </BreadcrumbPage>
            )}
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
