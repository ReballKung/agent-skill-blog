/**
 * Table of Contents Component
 * แสดงสารบัญของบทความ ช่วยให้ผู้อ่าน navigate ได้ง่าย
 * ใช้ anchor links เพื่อ scroll ไปยังหัวข้อต่าง ๆ
 */

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav
      aria-label="สารบัญ"
      className="bg-surface border border-border rounded-xl p-6"
    >
      <h2 className="text-lg font-bold text-foreground mb-4">📑 สารบัญ</h2>
      <ol className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? "ml-5" : ""}
          >
            <a
              href={`#${item.id}`}
              className="text-sm text-foreground/60 hover:text-primary transition-colors flex items-center gap-2"
            >
              {item.level === 2 && (
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full flex-shrink-0" />
              )}
              {item.level === 3 && (
                <span className="w-1 h-1 bg-foreground/20 rounded-full flex-shrink-0" />
              )}
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
