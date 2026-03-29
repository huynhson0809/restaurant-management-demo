const steps = [
  {
    num: 1,
    week: 'Tuần 1',
    title: 'Khởi động & thiết kế',
    desc: 'Thu thập menu, logo, yêu cầu. Thiết kế giao diện — bạn duyệt trước khi code.',
  },
  {
    num: 2,
    week: 'Tuần 2–3',
    title: 'Xây dựng hệ thống',
    desc: 'Phát triển 3 giao diện: khách, thu ngân, bếp. Kết nối realtime và in bill.',
  },
  {
    num: 3,
    week: 'Tuần 4',
    title: 'Test & chỉnh sửa',
    desc: 'Chạy thử toàn bộ quy trình. Bạn test thực tế và phản hồi, tôi sửa đến khi hài lòng.',
  },
  {
    num: 4,
    week: 'Tuần 5',
    title: 'Bàn giao & đào tạo',
    desc: 'Cài đặt server thật, in QR cho từng bàn. Hướng dẫn nhân viên tại chỗ.',
  },
]

export default function TimelineSection() {
  return (
    <div
      className="py-20 px-10 border-t border-b"
      style={{ background: 'var(--white)', borderColor: 'var(--border-brand)', fontFamily: 'var(--font-body)' }}
    >
      <div className="max-w-[1060px] mx-auto">
        <div className="text-xs tracking-[3px] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          Tiến độ thực hiện
        </div>
        <h2
          className="font-serif font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-3"
          style={{ fontFamily: 'var(--font-head)', color: 'var(--dark)' }}
        >
          Từ ký hợp đồng đến khai trương
        </h2>
        <p className="text-sm mb-12 max-w-[440px]" style={{ color: 'var(--muted-brand)' }}>
          Quy trình rõ ràng — bạn biết đang ở bước nào mỗi tuần.
        </p>

        <div
          className="grid gap-x-16"
          style={{ gridTemplateColumns: '1fr 1fr', maxWidth: 840 }}
        >
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-5 pb-8 relative">
              {i < steps.length - 2 && (
                <div
                  className="absolute left-4 top-8 w-px bottom-0"
                  style={{ background: 'var(--border-brand)' }}
                />
              )}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 relative z-10 border-2"
                style={{
                  background: 'var(--cream)',
                  borderColor: 'var(--gold)',
                  color: 'var(--gold)',
                }}
              >
                {s.num}
              </div>
              <div>
                <div className="text-[10px] tracking-[2px] uppercase mb-1" style={{ color: 'var(--gold)' }}>
                  {s.week}
                </div>
                <h4 className="font-medium text-[0.93rem] mb-0.5" style={{ color: 'var(--dark)' }}>
                  {s.title}
                </h4>
                <p className="text-[0.82rem] leading-relaxed" style={{ color: 'var(--muted-brand)' }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
