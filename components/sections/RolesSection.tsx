const roles = [
  {
    num: '01',
    icon: '📱',
    title: 'Khách hàng',
    desc: 'Quét QR trên bàn, chọn món ngay trên điện thoại — không cần cài app, không cần gọi nhân viên.',
    features: [
      'Xem menu với hình ảnh và mô tả món ăn',
      'Thêm / bớt món, ghi chú yêu cầu đặc biệt',
      'Xem tổng tiền cập nhật tức thì',
      'Giao diện 2 ngôn ngữ: Việt / English',
    ],
  },
  {
    num: '02',
    icon: '🧾',
    title: 'Thu ngân (Admin)',
    desc: 'Màn hình tổng quan theo dõi tất cả đơn hàng theo bàn, xác nhận và điều phối bếp.',
    features: [
      'Nhận đơn realtime, không bỏ sót',
      'Xác nhận và chuyển đơn xuống bếp',
      'In bill kèm tài khoản ngân hàng chủ quán',
      'Xem & tìm kiếm lịch sử đơn hàng trong ngày',
    ],
  },
  {
    num: '03',
    icon: '👨‍🍳',
    title: 'Bếp',
    desc: 'Màn hình bếp hiển thị đúng những gì cần làm — theo thứ tự, theo bàn, rõ ràng không nhầm lẫn.',
    features: [
      'Nhận đơn trực tiếp sau khi thu ngân xác nhận',
      'Đánh dấu từng món đã hoàn thành',
      'Ưu tiên đơn theo thứ tự thời gian',
    ],
  },
]

export default function RolesSection() {
  return (
    <section
      id="roles"
      className="max-w-[1100px] mx-auto px-10 py-20"
      style={{ color: 'var(--dark)', fontFamily: 'var(--font-body)' }}
    >
      <div className="text-xs tracking-[3px] uppercase mb-3" style={{ color: 'var(--gold)' }}>
        Hệ thống gồm 3 vai trò
      </div>
      <h2 className="font-serif font-bold mb-3 text-[clamp(1.8rem,4vw,2.8rem)] leading-tight" style={{ fontFamily: 'var(--font-head)' }}>
        Ai dùng, dùng để làm gì?
      </h2>
      <p className="text-sm mb-14 max-w-[540px]" style={{ color: 'var(--muted-brand)' }}>
        Mỗi người trong quán có một màn hình riêng, phù hợp đúng với công việc của họ.
      </p>

      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
        {roles.map((r) => (
          <div
            key={r.num}
            className="rounded-2xl p-8 border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: 'var(--white)', borderColor: 'var(--border-brand)' }}
          >
            <div className="text-xs tracking-[2px] mb-4 font-medium" style={{ color: 'var(--gold)' }}>
              VAI TRÒ {r.num}
            </div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
              style={{ background: '#F0EBE1' }}
            >
              {r.icon}
            </div>
            <h3 className="font-serif font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-head)' }}>
              {r.title}
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--muted-brand)' }}>
              {r.desc}
            </p>
            <ul className="flex flex-col gap-2">
              {r.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[0.83rem]" style={{ color: 'var(--dark)' }}>
                  <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }}>→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
