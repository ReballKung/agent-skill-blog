/**
 * JSON-LD Component
 * ใส่ Structured Data ในรูปแบบ JSON-LD สำหรับ Google Rich Results
 * ช่วยให้ Google เข้าใจเนื้อหาของหน้าเว็บได้ดีขึ้น
 */

interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
