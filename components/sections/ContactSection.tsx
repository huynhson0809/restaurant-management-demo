export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-[1100px] mx-auto px-10 pb-20"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <div
        className="rounded-3xl px-12 py-16 flex gap-16 items-start flex-wrap"
        style={{ background: 'var(--dark)', color: 'var(--cream)' }}
      >
        <div className="flex-1 min-w-[260px]">
          <div className="text-xs tracking-[3px] uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Liên hệ tư vấn
          </div>
          <h2
            className="font-serif font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-3"
            style={{ fontFamily: 'var(--font-head)', color: 'var(--cream)' }}
          >
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-sm leading-loose max-w-[380px]" style={{ color: '#9A9080' }}>
            Nhắn tin để được tư vấn miễn phí và xem demo thực tế. Không mất phí, không ràng buộc.
          </p>
        </div>

        <div className="flex flex-col gap-4 min-w-[220px]">
          <div className="flex gap-3 items-start">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
              style={{ background: 'rgba(201,147,58,.15)' }}
            >
              📞
            </div>
            <div>
              <div className="text-[0.76rem] tracking-[1px] uppercase mb-0.5" style={{ color: 'var(--gold)' }}>
                Điện thoại / Zalo
              </div>
              <a
                href="tel:0965125914"
                className="text-[0.9rem] transition-opacity hover:opacity-75"
                style={{ color: '#C8C0B0' }}
              >
                0965 125 914
              </a>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
              style={{ background: 'rgba(201,147,58,.15)' }}
            >
              ✉️
            </div>
            <div>
              <div className="text-[0.76rem] tracking-[1px] uppercase mb-0.5" style={{ color: 'var(--gold)' }}>
                Email
              </div>
              <a
                href="mailto:huynhngocson8902@gmail.com"
                className="text-[0.9rem] transition-opacity hover:opacity-75 break-all"
                style={{ color: '#C8C0B0' }}
              >
                huynhngocson8902@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <a
              href="https://zalo.me/0965125914"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl text-sm font-medium text-center transition-opacity hover:opacity-85"
              style={{ background: 'var(--gold)', color: '#fff' }}
            >
              Nhắn Zalo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
