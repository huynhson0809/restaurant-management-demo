const rows = [
  {
    label: "Website nhà hàng WordPress",
    price: "2–4 triệu",
    own: true,
    realtime: false,
    kitchen: false,
    qr: false,
    dashboard: false,
    stats: false,
    excel: false,
    support: "Không có",
    note: "Không có QR order, không realtime",
  },
  {
    label: "Công ty thiết kế (Laravel)",
    price: "8–12 triệu",
    own: true,
    realtime: false,
    kitchen: false,
    qr: false,
    dashboard: false,
    stats: false,
    excel: false,
    support: "3–6 tháng",
    note: "Không có màn hình bếp & thu ngân",
  },
  {
    label: "Gói Cơ Bản — Huỳnh Ngọc Sơn",
    price: "9–10 triệu",
    own: true,
    realtime: true,
    kitchen: true,
    qr: true,
    dashboard: false,
    stats: false,
    excel: false,
    support: "12 tháng",
    note: "Thanh toán 1 lần, sở hữu vĩnh viễn",
    highlight: true,
  },
  {
    label: "Gói Nâng Cao — Huỳnh Ngọc Sơn",
    price: "14–15 triệu",
    own: true,
    realtime: true,
    kitchen: true,
    qr: true,
    dashboard: true,
    stats: true,
    excel: true,
    support: "24 tháng",
    note: "Dashboard, thống kê, SEO/UX tối ưu",
    highlight: true,
    pro: true,
  },
];

function Tick({ on }: { on: boolean }) {
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
      style={{
        background: on ? "#E8F5EE" : "#F5E8E8",
        color: on ? "#2D7A4F" : "#B03030",
      }}
    >
      {on ? "✓" : "✗"}
    </span>
  );
}

export default function CompareSection() {
  return (
    <section
      className="max-w-[1100px] mx-auto px-6 md:px-10 pb-20"
      style={{ color: "var(--dark)", fontFamily: "var(--font-body)" }}
    >
      <div
        className="text-xs tracking-[3px] uppercase mb-3"
        style={{ color: "var(--gold)" }}
      >
        So sánh thị trường
      </div>
      <h2
        className="font-serif font-bold text-[clamp(1.5rem,3vw,2.2rem)] leading-tight mb-3"
        style={{ fontFamily: "var(--font-head)" }}
      >
        Tại sao chọn xây riêng thay vì thuê?
      </h2>

      {/* Desktop table */}
      <div
        className="hidden md:block overflow-x-auto rounded-2xl border"
        style={{ borderColor: "var(--border-brand)" }}
      >
        <table className="w-full text-[0.82rem] border-collapse">
          <thead>
            <tr style={{ background: "var(--dark)", color: "var(--cream)" }}>
              <th className="text-left px-5 py-4 font-medium">Giải pháp</th>
              <th className="px-4 py-4 font-medium text-center">Chi phí</th>
              <th className="px-4 py-4 font-medium text-center">Sở hữu</th>
              <th className="px-4 py-4 font-medium text-center">Realtime</th>
              <th className="px-4 py-4 font-medium text-center">Màn bếp</th>
              <th className="px-4 py-4 font-medium text-center">QR bàn</th>
              <th className="px-4 py-4 font-medium text-center">Dashboard</th>
              <th className="px-4 py-4 font-medium text-center">Thống kê</th>
              <th className="px-4 py-4 font-medium text-center">Xuất Excel</th>
              <th className="px-4 py-4 font-medium text-center">Hỗ trợ</th>
              <th className="px-5 py-4 font-medium text-left">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className="border-t"
                style={{
                  borderColor: "var(--border-brand)",
                  background: row.pro
                    ? "#FDF8F0"
                    : row.highlight
                      ? "#FFFDF8"
                      : i % 2 === 0
                        ? "var(--white)"
                        : "var(--cream)",
                }}
              >
                <td
                  className="px-5 py-3.5 font-medium"
                  style={{
                    color: row.highlight ? "var(--gold)" : "var(--dark)",
                  }}
                >
                  {row.label}
                  {row.highlight && (
                    <span
                      className="ml-2 text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "var(--gold)", color: "#fff" }}
                    >
                      {row.pro ? "Pro" : "Cơ Bản"}
                    </span>
                  )}
                </td>
                <td
                  className="px-4 py-3.5 text-center font-semibold whitespace-nowrap"
                  style={{
                    color: row.highlight ? "var(--gold)" : "var(--dark)",
                  }}
                >
                  {row.price}
                </td>
                <td className="px-4 py-3.5 text-center">
                  <Tick on={row.own} />
                </td>
                <td className="px-4 py-3.5 text-center">
                  <Tick on={row.realtime} />
                </td>
                <td className="px-4 py-3.5 text-center">
                  <Tick on={row.kitchen} />
                </td>
                <td className="px-4 py-3.5 text-center">
                  <Tick on={row.qr} />
                </td>
                <td className="px-4 py-3.5 text-center">
                  <Tick on={row.dashboard} />
                </td>
                <td className="px-4 py-3.5 text-center">
                  <Tick on={row.stats} />
                </td>
                <td className="px-4 py-3.5 text-center">
                  <Tick on={row.excel} />
                </td>
                <td
                  className="px-4 py-3.5 text-center text-[0.78rem] whitespace-nowrap"
                  style={{ color: "var(--muted-brand)" }}
                >
                  {row.support}
                </td>
                <td
                  className="px-5 py-3.5 text-[0.78rem]"
                  style={{
                    color: "var(--muted-brand)",
                  }}
                >
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col gap-4">
        {rows.map((row) => (
          <div
            key={row.label}
            className="rounded-xl border p-5"
            style={{
              background: row.highlight ? "#FFFDF8" : "var(--white)",
              borderColor: row.highlight
                ? "var(--gold)"
                : "var(--border-brand)",
            }}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div
                className="font-medium text-[0.88rem] leading-snug"
                style={{ color: row.highlight ? "var(--gold)" : "var(--dark)" }}
              >
                {row.label}
              </div>
              <div
                className="font-semibold text-[0.88rem] whitespace-nowrap"
                style={{
                  color: row.highlight ? "var(--gold)" : "var(--dark)",
                }}
              >
                {row.price}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-[0.75rem] mb-2">
              {[
                ["Sở hữu", row.own],
                ["Realtime", row.realtime],
                ["Bếp", row.kitchen],
                ["QR bàn", row.qr],
                ["Dashboard", row.dashboard],
                ["Thống kê", row.stats],
                ["Xuất Excel", row.excel],
              ].map(([label, val]) => (
                <span
                  key={label as string}
                  className="px-2.5 py-1 rounded-full"
                  style={{
                    background: val ? "#E8F5EE" : "#F5E8E8",
                    color: val ? "#2D7A4F" : "#B03030",
                  }}
                >
                  {val ? "✓" : "✗"} {label}
                </span>
              ))}
            </div>
            <div
              className="text-[0.78rem]"
              style={{
                color: row.highlight ? "var(--gold)" : "var(--muted-brand)",
              }}
            >
              {row.note} · Hỗ trợ: {row.support}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
