"use client";

export default function HeroSection() {
  return (
    <section
      style={{
        background: "var(--cream)",
        color: "var(--dark)",
        fontFamily: "var(--font-body)",
      }}
      className="relative min-h-screen flex flex-col justify-center px-10 py-20 overflow-hidden"
    >
      {/* decorative blob */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(201,147,58,.13) 0%,transparent 70%)",
        }}
      />

      <h1
        className="font-serif font-black leading-[1.1] max-w-[700px] mb-6 text-[clamp(2.4rem,6vw,4.5rem)] animate-[fadeUp_.6s_ease_both_.15s]"
        style={{ fontFamily: "var(--font-head)" }}
      >
        Hệ thống
        <br />
        đặt món{" "}
        <em className="not-italic" style={{ color: "var(--gold)" }}>
          thông minh
        </em>
        <br />
        cho nhà hàng của bạn
      </h1>

      <p
        className="text-base max-w-[520px] mb-12 leading-loose animate-[fadeUp_.6s_ease_both_.25s]"
        style={{ color: "var(--muted-brand)" }}
      >
        Khách quét QR — chọn món — bếp nhận ngay. Không cần gọi nhân viên, không
        thất thoát đơn hàng. Đơn giản, hiện đại, vận hành mượt mà.
      </p>

      <div className="flex flex-wrap gap-4 animate-[fadeUp_.6s_ease_both_.35s]"></div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
