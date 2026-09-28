import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TableOfContents } from "@/components/TableOfContents";
import { JsonLd } from "@/components/JsonLd";


// =============================================================================
// SEO Metadata — generateMetadata function
// ใช้ generateMetadata เพื่อให้ Next.js สร้าง <head> tags อัตโนมัติ
// รวมถึง Open Graph สำหรับ social sharing
// =============================================================================
export function generateMetadata(): Metadata {
  return {
    title: "วิธีใช้ Agent Skill ใน Antigravity — คู่มือฉบับสมบูรณ์ 2026",
    description:
      "เรียนรู้วิธีสร้างและใช้งาน Agent Skill ใน Antigravity AI Coding Assistant ตั้งแต่พื้นฐานจนถึงขั้นสูง พร้อมตัวอย่างจริงที่ใช้ได้ทันที",
    openGraph: {
      title: "วิธีใช้ Agent Skill ใน Antigravity — คู่มือฉบับสมบูรณ์ 2026",
      description:
        "เรียนรู้วิธีสร้างและใช้งาน Agent Skill ใน Antigravity AI Coding Assistant ตั้งแต่พื้นฐานจนถึงขั้นสูง",
      type: "article",
      locale: "th_TH",
      siteName: "Antigravity Blog",
    },
    twitter: {
      card: "summary_large_image",
      title: "วิธีใช้ Agent Skill ใน Antigravity — คู่มือฉบับสมบูรณ์ 2026",
      description:
        "เรียนรู้วิธีสร้างและใช้งาน Agent Skill ใน Antigravity AI Coding Assistant",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// =============================================================================
// Table of Contents Data
// กำหนดโครงสร้างหัวข้อสำหรับ Table of Contents
// =============================================================================
const tocItems = [
  { id: "what-is-agent-skill", title: "Agent Skill คืออะไร?", level: 2 },
  { id: "why-agent-skill", title: "ทำไมต้องใช้ Agent Skill?", level: 2 },
  { id: "skill-structure", title: "โครงสร้างของ Skill", level: 2 },
  { id: "create-first-skill", title: "สร้าง Skill แรกของคุณ", level: 2 },
  {
    id: "step-1-create-folder",
    title: "ขั้นตอนที่ 1: สร้างโฟลเดอร์",
    level: 3,
  },
  {
    id: "step-2-write-skill-md",
    title: "ขั้นตอนที่ 2: เขียน SKILL.md",
    level: 3,
  },
  {
    id: "step-3-test-skill",
    title: "ขั้นตอนที่ 3: ทดสอบ Skill",
    level: 3,
  },
  { id: "real-world-examples", title: "ตัวอย่างจากโปรเจกต์จริง", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
  { id: "summary", title: "สรุป", level: 2 },
];

// =============================================================================
// Blog Page Component (Server Component)
// ใช้ Server Component เป็นค่าเริ่มต้น เพื่อลด JavaScript ฝั่ง client
// ช่วยให้หน้าโหลดเร็ว เหมาะกับ SEO
// =============================================================================
export default function BlogPostPage() {
  return (
    <>
      {/* JSON-LD Structured Data สำหรับ Google Rich Results */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "วิธีใช้ Agent Skill ใน Antigravity — คู่มือฉบับสมบูรณ์ 2026",
          description:
            "เรียนรู้วิธีสร้างและใช้งาน Agent Skill ใน Antigravity AI Coding Assistant ตั้งแต่พื้นฐานจนถึงขั้นสูง",
          author: {
            "@type": "Organization",
            name: "Antigravity Blog",
          },
          publisher: {
            "@type": "Organization",
            name: "Antigravity Blog",
          },
          datePublished: "2026-09-28",
          dateModified: "2026-09-28",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "/blog/how-to-use-agent-skill-in-antigravity",
          },
          inLanguage: "th",
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-surface/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="mx-auto max-w-4xl px-4 py-4">
            <a href="/" className="text-xl font-bold text-primary">
              🚀 Antigravity Blog
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-4xl px-4 py-8">
          {/* Breadcrumbs — ช่วยให้ Google เข้าใจโครงสร้างเว็บไซต์ */}
          <Breadcrumbs
            items={[
              { label: "หน้าแรก", href: "/" },
              { label: "บทความ", href: "/blog" },
              {
                label: "วิธีใช้ Agent Skill ใน Antigravity",
              },
            ]}
          />

          <article className="mt-8 prose-blog">
            {/* Hero Section */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                <time dateTime="2026-09-28">28 กันยายน 2026</time>
                <span>•</span>
                <span>อ่าน 10 นาที</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
                วิธีใช้ Agent Skill ใน Antigravity
                <br />
                <span className="text-primary">คู่มือฉบับสมบูรณ์ 2026</span>
              </h1>

              <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
                Agent Skill คือหัวใจสำคัญที่ทำให้ Antigravity ฉลาดขึ้นและทำงานตรงใจคุณมากขึ้น
                บทความนี้จะพาคุณเรียนรู้ตั้งแต่พื้นฐานจนถึงการสร้าง Skill ของตัวเองที่ใช้ได้จริง
              </p>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />

            {/* ================================================================= */}
            {/* Section 1: Agent Skill คืออะไร? */}
            {/* ================================================================= */}
            <section className="mt-12">
              <h2
                id="what-is-agent-skill"
                className="text-2xl font-bold text-foreground mb-4"
              >
                Agent Skill คืออะไร?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>Agent Skill</strong> คือชุดคำสั่ง (instructions) ที่ถูกจัดเก็บในรูปแบบของโฟลเดอร์
                ซึ่งประกอบด้วยไฟล์ <code className="bg-surface px-2 py-0.5 rounded text-primary text-sm">SKILL.md</code> เป็นหลัก
                มีหน้าที่ขยายความสามารถของ Antigravity ให้ทำงานเฉพาะทางได้อย่างแม่นยำ
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                ลองนึกภาพว่า Antigravity เป็นเหมือนพนักงานใหม่ที่เก่งมาก แต่ยังไม่รู้วัฒนธรรมองค์กรของคุณ
                — Skill ก็เหมือน &quot;คู่มือปฏิบัติงาน&quot; ที่สอนให้มันทำงานตามมาตรฐานของทีมคุณได้
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-6">
                <p className="text-sm font-medium text-primary mb-1">💡 สรุปง่าย ๆ</p>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Skill = ไฟล์คำสั่งที่ทำให้ AI ฉลาดขึ้นในงานเฉพาะด้าน เช่น SEO, Testing, Database Design
                </p>
              </div>
            </section>

            {/* ================================================================= */}
            {/* Section 2: ทำไมต้องใช้ Agent Skill? */}
            {/* ================================================================= */}
            <section className="mt-12">
              <h2
                id="why-agent-skill"
                className="text-2xl font-bold text-foreground mb-4"
              >
                ทำไมต้องใช้ Agent Skill?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                การใช้ Skill ช่วยให้คุณได้ประโยชน์หลายด้าน:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    icon: "🎯",
                    title: "ความแม่นยำ",
                    desc: "Agent ทำงานตรงตามมาตรฐานที่คุณกำหนด ไม่ต้องอธิบายซ้ำทุกครั้ง",
                  },
                  {
                    icon: "⚡",
                    title: "ความเร็ว",
                    desc: "ลดเวลาในการ prompt เพราะ context ถูก load อัตโนมัติ",
                  },
                  {
                    icon: "🔄",
                    title: "ความสม่ำเสมอ",
                    desc: "ทุกคนในทีมใช้ Skill เดียวกัน ได้ output ที่เป็นมาตรฐานเดียวกัน",
                  },
                  {
                    icon: "📦",
                    title: "แชร์ได้",
                    desc: "เก็บ Skill ไว้ใน repository แชร์กับทีมได้ทันที",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-surface border border-border rounded-xl p-5"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ================================================================= */}
            {/* Section 3: โครงสร้างของ Skill */}
            {/* ================================================================= */}
            <section className="mt-12">
              <h2
                id="skill-structure"
                className="text-2xl font-bold text-foreground mb-4"
              >
                โครงสร้างของ Skill
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Skill จะถูกเก็บไว้ในโฟลเดอร์ <code className="bg-surface px-2 py-0.5 rounded text-primary text-sm">.agent/skill/</code> ของ
                project โดยมีโครงสร้างดังนี้:
              </p>
              <div className="bg-[#1e1e2e] rounded-xl p-5 my-6 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono leading-relaxed">
{`.agent/
└── skill/
    └── my-skill-name/
        ├── SKILL.md          # ✅ ไฟล์หลัก (จำเป็น)
        ├── scripts/          # 📜 สคริปต์เสริม
        ├── examples/         # 📝 ตัวอย่างโค้ด
        ├── resources/        # 📁 ไฟล์ template
        └── references/       # 📚 เอกสารอ้างอิง`}
                </pre>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6">
                <p className="text-sm font-medium text-amber-800 mb-1">⚠️ สิ่งที่ต้องรู้</p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  ไฟล์ <code className="bg-amber-100 px-1.5 py-0.5 rounded">SKILL.md</code> เป็นไฟล์เดียวที่
                  <strong>จำเป็นต้องมี</strong> ส่วนโฟลเดอร์อื่น ๆ เป็น optional ใส่ตามความต้องการ
                </p>
              </div>
            </section>

            {/* ================================================================= */}
            {/* Section 4: สร้าง Skill แรกของคุณ */}
            {/* ================================================================= */}
            <section className="mt-12">
              <h2
                id="create-first-skill"
                className="text-2xl font-bold text-foreground mb-4"
              >
                สร้าง Skill แรกของคุณ
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                มาลองสร้าง Skill ง่าย ๆ สำหรับกำหนดมาตรฐานการเขียน API ใน Express.js กันครับ
              </p>

              {/* Step 1 */}
              <h3
                id="step-1-create-folder"
                className="text-xl font-semibold text-foreground mb-3 mt-8"
              >
                ขั้นตอนที่ 1: สร้างโฟลเดอร์
              </h3>
              <div className="bg-[#1e1e2e] rounded-xl p-5 my-4 overflow-x-auto">
                <div className="text-xs text-gray-500 mb-2 font-mono">Terminal</div>
                <pre className="text-sm text-gray-300 font-mono">
{`mkdir -p .agent/skill/express-api-standard`}
                </pre>
              </div>

              {/* Step 2 */}
              <h3
                id="step-2-write-skill-md"
                className="text-xl font-semibold text-foreground mb-3 mt-8"
              >
                ขั้นตอนที่ 2: เขียน SKILL.md
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                สร้างไฟล์ <code className="bg-surface px-2 py-0.5 rounded text-primary text-sm">SKILL.md</code> ภายในโฟลเดอร์
                โดยมี YAML frontmatter ด้านบนและ instructions ด้านล่าง:
              </p>
              <div className="bg-[#1e1e2e] rounded-xl p-5 my-4 overflow-x-auto">
                <div className="text-xs text-gray-500 mb-2 font-mono">
                  .agent/skill/express-api-standard/SKILL.md
                </div>
                <pre className="text-sm text-gray-300 font-mono leading-relaxed">
{`---
name: express-api-standard
description: มาตรฐานการเขียน REST API ด้วย Express.js
              สำหรับทีมพัฒนา
---

# Express API Standard

เมื่อ Skill นี้ถูกเรียกใช้ ให้ปฏิบัติตามกฎเหล่านี้:

## 1. โครงสร้าง Response
- ใช้รูปแบบ { success: boolean, data: T, message: string }
- ส่ง HTTP status code ที่เหมาะสมเสมอ

## 2. Error Handling
- ใช้ try-catch ครอบทุก route handler
- ส่ง error response ในรูปแบบเดียวกันทั้ง API

## 3. Validation
- ใช้ Zod สำหรับ validate request body
- สร้าง schema แยกไฟล์ใน /schemas`}
                </pre>
              </div>

              {/* Step 3 */}
              <h3
                id="step-3-test-skill"
                className="text-xl font-semibold text-foreground mb-3 mt-8"
              >
                ขั้นตอนที่ 3: ทดสอบ Skill
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                เมื่อสร้าง Skill เสร็จแล้ว Antigravity จะตรวจจับ Skill โดยอัตโนมัติ
                ลองสั่งงานที่เกี่ยวข้องดูครับ:
              </p>
              <div className="bg-[#1e1e2e] rounded-xl p-5 my-4 overflow-x-auto">
                <div className="text-xs text-gray-500 mb-2 font-mono">Prompt ตัวอย่าง</div>
                <pre className="text-sm text-gray-300 font-mono">
{`"สร้าง API endpoint สำหรับ GET /users"`}
                </pre>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Antigravity จะอ่าน Skill ที่เกี่ยวข้องโดยอัตโนมัติ และสร้างโค้ดที่เป็นไปตามมาตรฐานที่คุณกำหนดไว้ใน Skill
              </p>
            </section>

            {/* ================================================================= */}
            {/* Section 5: ตัวอย่างจากโปรเจกต์จริง */}
            {/* ================================================================= */}
            <section className="mt-12">
              <h2
                id="real-world-examples"
                className="text-2xl font-bold text-foreground mb-4"
              >
                ตัวอย่างจากโปรเจกต์จริง
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                นี่คือตัวอย่าง Skill ที่ได้รับความนิยมและสามารถนำไปใช้ได้จริง:
              </p>

              {/* Example Cards */}
              <div className="space-y-4">
                {[
                  {
                    name: "nextjs-seo-master",
                    desc: "กำหนดมาตรฐาน SEO สำหรับทุกหน้าใน Next.js — บังคับให้มี metadata, Semantic HTML และ Image Optimization",
                    tags: ["Next.js", "SEO", "Performance"],
                  },
                  {
                    name: "react-testing-pro",
                    desc: "กำหนดรูปแบบการเขียน test ด้วย React Testing Library — ครอบคลุม unit test, integration test",
                    tags: ["React", "Testing", "Jest"],
                  },
                  {
                    name: "prisma-db-architect",
                    desc: "ออกแบบ database schema ด้วย Prisma ORM — มี naming convention, relation patterns และ migration strategy",
                    tags: ["Prisma", "Database", "PostgreSQL"],
                  },
                ].map((example) => (
                  <div
                    key={example.name}
                    className="bg-surface border border-border rounded-xl p-5"
                  >
                    <h3 className="font-semibold font-mono text-primary mb-2">
                      📁 {example.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-3">
                      {example.desc}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {example.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ================================================================= */}
            {/* Section 6: Best Practices */}
            {/* ================================================================= */}
            <section className="mt-12">
              <h2
                id="best-practices"
                className="text-2xl font-bold text-foreground mb-4"
              >
                Best Practices
              </h2>
              <div className="space-y-3">
                {[
                  {
                    num: "01",
                    title: "เขียน description ให้ชัดเจน",
                    desc: "Antigravity ใช้ description ในการตัดสินใจว่าจะเรียก Skill ไหน — ยิ่งเขียนละเอียดยิ่งแม่นยำ",
                  },
                  {
                    num: "02",
                    title: "แยก Skill ตาม concern",
                    desc: "อย่ายัดทุกอย่างไว้ใน Skill เดียว แยกเป็น SEO Skill, Testing Skill, DB Skill ฯลฯ",
                  },
                  {
                    num: "03",
                    title: "ใส่ตัวอย่างโค้ดใน Skill",
                    desc: "Agent เรียนรู้จากตัวอย่างได้ดีมาก ใส่ตัวอย่าง input/output ที่คาดหวังไว้ด้วย",
                  },
                  {
                    num: "04",
                    title: "Version control ร่วมกับโปรเจกต์",
                    desc: "เก็บ .agent/ folder ไว้ใน Git เพื่อให้ทุกคนในทีมใช้ Skill เวอร์ชันเดียวกัน",
                  },
                  {
                    num: "05",
                    title: "ทดสอบ Skill เป็นประจำ",
                    desc: "ลองสั่งงานที่เกี่ยวข้องแล้วตรวจสอบว่า output ตรงตาม Skill หรือไม่",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex gap-4 bg-surface border border-border rounded-xl p-5"
                  >
                    <div className="text-2xl font-bold text-primary/30 font-mono">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ================================================================= */}
            {/* Section 7: สรุป */}
            {/* ================================================================= */}
            <section className="mt-12 mb-16">
              <h2
                id="summary"
                className="text-2xl font-bold text-foreground mb-4"
              >
                สรุป
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Agent Skill เป็นฟีเจอร์ที่ทำให้ Antigravity กลายเป็น AI ที่เข้าใจทีมของคุณจริง ๆ
                ไม่ใช่แค่ AI ทั่วไปที่ตอบคำถามได้ แต่เป็น AI ที่ทำงานตามมาตรฐานของคุณ
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 border border-primary/20 rounded-xl p-6 my-6">
                <p className="text-lg font-semibold text-foreground mb-3">
                  🎯 สิ่งที่ควรทำต่อ:
                </p>
                <ol className="space-y-2 text-foreground/80">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">1.</span>
                    สร้างโฟลเดอร์ <code className="bg-white/50 px-1.5 py-0.5 rounded text-sm">.agent/skill/</code> ในโปรเจกต์ของคุณ
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">2.</span>
                    เขียน Skill แรกสำหรับงานที่ทำบ่อยที่สุด
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">3.</span>
                    ทดสอบและปรับปรุง Skill จากผลลัพธ์จริง
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">4.</span>
                    แชร์ Skill กับทีมผ่าน Git repository
                  </li>
                </ol>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                เริ่มต้นจาก Skill เล็ก ๆ แล้วค่อย ๆ ขยาย — คุณจะเห็นว่า Antigravity ทำงานได้ตรงใจมากขึ้นอย่างเห็นได้ชัด 🚀
              </p>
            </section>
          </article>
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t border-border bg-surface">
          <div className="mx-auto max-w-4xl px-4 py-8 text-center text-sm text-foreground/50">
            <p>© 2026 Antigravity Blog. สร้างด้วย Next.js + Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </>
  );
}
