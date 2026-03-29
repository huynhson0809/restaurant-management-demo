const stats = [
  { value: "4+", label: "Năm kinh nghiệm" },
  { value: "GPA 3.4", label: "Tốt nghiệp loại Giỏi" },
];

const skills = [
  "Next.js / React",
  "NestJS / ASP.NET",
  "PostgreSQL / MongoDB",
  "TypeScript",
  "Tailwind CSS",
  "REST API / JWT",
];

const certs = [
  { label: "CEO Rising Star Award", org: "ITC Group · 2026" },
  { label: "Quarterly MVP (Q2 & Q4)", org: "ITC Group · 2026" },
  { label: "Contentstack Developer", org: "Contentstack · 2026" },
  { label: "TOEIC 4 Skills", org: "IIG · L&R 690 · S&W 280" },
];

export default function AboutSection() {
  return (
    <section
      className="w-full py-20 px-6"
      style={{ background: "var(--dark)", color: "var(--cream)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-block text-xs font-medium uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(201,147,58,0.15)",
              color: "var(--gold)",
            }}
          >
            Người thực hiện
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-balance"
            style={{ fontFamily: "var(--font-head)", color: "#fff" }}
          >
            Huỳnh Ngọc Sơn
          </h2>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#B8AD9E" }}
          >
            Fullstack Developer với hơn 3 năm xây dựng các ứng dụng web thực tế
            — từ SaaS, thương mại điện tử đến hệ thống doanh nghiệp quy mô lớn.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left — bio */}
          <div className="flex flex-col gap-6">
            {/* Education */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: "rgba(201,147,58,0.15)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-sm font-medium mb-0.5"
                    style={{ color: "#fff" }}
                  >
                    Cử nhân Kỹ thuật Phần mềm
                  </div>
                  <div className="text-sm" style={{ color: "var(--gold)" }}>
                    ĐH Khoa học Tự nhiên — ĐHQG TP.HCM
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#B8AD9E" }}>
                    2020 – 2024 · GPA 3.4/4.0 · Tốt nghiệp Xuất sắc
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(201,147,58,0.15)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-sm font-medium mb-0.5"
                    style={{ color: "#fff" }}
                  >
                    Fullstack Developer · ITC Group
                  </div>
                  <div className="text-sm" style={{ color: "var(--gold)" }}>
                    Onsite tại văn phòng đối tác Mỹ · 2022 – nay
                  </div>
                  <div
                    className="text-xs mt-1 leading-relaxed"
                    style={{ color: "#B8AD9E" }}
                  >
                    Phụ trách phát triển các nền tảng SaaS, Media &amp;
                    E-commerce quy mô lớn phục vụ thị trường quốc tế.
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="text-xs font-medium uppercase tracking-widest mb-3"
                style={{ color: "var(--gold)" }}
              >
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-lg"
                    style={{
                      background: "rgba(201,147,58,0.1)",
                      color: "#E2D9C8",
                      border: "1px solid rgba(201,147,58,0.2)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — stats + awards */}
          <div className="flex flex-col gap-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "rgba(201,147,58,0.08)",
                    border: "1px solid rgba(201,147,58,0.2)",
                  }}
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-head)",
                      color: "var(--gold)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs" style={{ color: "#B8AD9E" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Awards & certs */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "var(--gold)" }}
              >
                Giải thưởng &amp; Chứng chỉ
              </div>
              <div className="flex flex-col gap-3">
                {certs.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                      style={{ background: "var(--gold)" }}
                    />
                    <div>
                      <div className="text-sm" style={{ color: "#fff" }}>
                        {c.label}
                      </div>
                      <div className="text-xs" style={{ color: "#B8AD9E" }}>
                        {c.org}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust note */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(201,147,58,0.08)",
                border: "1px solid rgba(201,147,58,0.2)",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#E2D9C8" }}
              >
                Mọi dự án tôi nhận đều được cam kết bàn giao đúng tiến độ, có
                tài liệu hướng dẫn rõ ràng và hỗ trợ sau bàn giao theo đúng gói
                dịch vụ đã chọn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
