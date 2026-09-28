/**
 * Breadcrumbs Component
 * ช่วยให้ Google เข้าใจโครงสร้างเว็บไซต์ (Crawlability)
 * ใช้ Semantic HTML + BreadcrumbList schema
 */

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center gap-1.5 text-foreground/50">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 && (
              <span aria-hidden="true" className="text-foreground/30">
                /
              </span>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-foreground/80 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
