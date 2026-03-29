"use client"

const starterFeatures = [
  { text: 'Giao diện thiết kế chuẩn, chuyên nghiệp', on: true },
  { text: 'Menu web có hình ảnh cho từng món ăn', on: true },
  { text: 'Hiển thị menu rõ ràng, sinh động', on: true },
  { text: 'Chức năng gọi món online tiện lợi', on: true },
  { text: 'Giỏ hàng ảo để khách dễ dàng chọn món', on: true },
  { text: 'Ghi chú order theo yêu cầu khách', on: true },
  { text: 'Gửi order đến quản lý nhanh chóng', on: true },
  { text: 'QR riêng từng bàn (tối đa 20 bàn)', on: true },
  { text: 'Tạo và quản lý mã QR Code theo từng bàn', on: true },
  { text: 'Quản lý danh mục & món ăn cơ bản (thêm / sửa / xóa / ẩn món)', on: true },
  { text: 'Quản lý đơn hàng cơ bản', on: true },
  { text: 'Màn hình thu ngân nhận đơn realtime', on: true },
  { text: 'Màn hình bếp nhận món', on: true },
  { text: 'In bill kèm tài khoản ngân hàng chủ quán', on: true },
  { text: 'Xem lịch sử đơn hàng cơ bản', on: true },
  { text: 'Giao diện 2 ngôn ngữ (Việt / English)', on: true },
  { text: 'Chuẩn SEO cơ bản giúp website lên top Google dễ dàng', on: true },
  { text: 'Tối ưu tốc độ tải trang nhanh, mượt', on: true },
  { text: 'Thiết kế chuẩn responsive, tương thích mọi thiết bị', on: true },
  { text: 'Hỗ trợ lỗi miễn phí 12 tháng', on: true, highlight: true },
  { text: 'Dashboard & báo cáo doanh thu', on: false },
  { text: 'Thống kê món bán chạy & giờ cao điểm', on: false },
  { text: 'Xuất dữ liệu Excel', on: false },
  { text: 'Tùy chỉnh giao diện theo thương hiệu', on: false },
]

const proFeatures = [
  { text: 'Tất cả tính năng gói Cơ Bản', on: true },
  { text: 'Tối đa 100 bàn', on: true },
  { text: 'Giao diện tối đa 5 ngôn ngữ', on: true },
  { text: 'Dashboard quản lý tập trung', on: true },
  { text: 'Báo cáo doanh thu theo ngày / tuần / tháng', on: true },
  { text: 'Thống kê món bán chạy & giờ cao điểm', on: true },
  { text: 'Xuất toàn bộ dữ liệu ra file Excel', on: true },
  { text: 'Thông báo đơn qua âm thanh (chuông bếp)', on: true },
  { text: 'Tùy chỉnh màu sắc & logo theo thương hiệu', on: true },
  { text: 'Lịch sử đơn hàng tra cứu theo ngày / bàn', on: true },
  { text: 'Tối ưu toàn diện về SEO và trải nghiệm người dùng (UX/UI), giúp website đạt hiệu quả cao nhất', on: true },
  { text: 'Hỗ trợ lỗi miễn phí 24 tháng', on: true, highlight: true },
]

function FeatureItem({ text, on, highlight }: { text: string; on: boolean; highlight?: boolean }) {
  return (
    <li
      className="flex items-start gap-2.5 text-[0.88rem]"
      style={{ opacity: on ? 1 : 0.35 }}
    >
      <span
        className="flex-shrink-0 font-bold"
        style={{ color: on ? 'var(--gold)' : 'inherit' }}
      >
        {on ? '✓' : '✗'}
      </span>
      <span style={highlight ? { color: 'var(--gold)', fontWeight: 500 } : {}}>
        {text}
      </span>
    </li>
  )
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="max-w-[1100px] mx-auto px-10 py-20"
      style={{ color: 'var(--dark)', fontFamily: 'var(--font-body)' }}
    >
      <div className="text-xs tracking-[3px] uppercase mb-3" style={{ color: 'var(--gold)' }}>
        Gói dịch vụ
      </div>
      <h2
        className="font-serif font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-3"
        style={{ fontFamily: 'var(--font-head)' }}
      >
        Chọn gói phù hợp với quán
      </h2>
      <p className="text-sm mb-14 max-w-[540px]" style={{ color: 'var(--muted-brand)' }}>
        Cả hai gói đều bao gồm bàn giao đầy đủ và hỗ trợ lỗi phát sinh dài hạn.
      </p>

      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', alignItems: 'start' }}
      >
        {/* Gói Cơ Bản */}
        <div
          className="rounded-2xl border transition-transform duration-200 hover:-translate-y-1.5"
          style={{ background: 'var(--white)', borderColor: 'var(--border-brand)' }}
        >
          <div className="p-10 pb-0">
            <div className="text-xs tracking-[3px] uppercase mb-2" style={{ color: 'var(--muted-brand)' }}>
              Gói thiết yếu
            </div>
            <div
              className="font-serif font-bold text-[2rem] mb-1.5"
              style={{ fontFamily: 'var(--font-head)' }}
            >
              Cơ Bản
            </div>
            <p className="text-[0.88rem] mb-7 leading-relaxed" style={{ color: 'var(--muted-brand)' }}>
              Đủ để vận hành quán ngay. Phù hợp với quán muốn bắt đầu ứng dụng công nghệ với chi phí hợp lý.
            </p>
            <div className="mb-7">
              <div className="flex items-baseline gap-0.5">
                <span
                  className="font-serif font-black text-[2.5rem] leading-none"
                  style={{ fontFamily: 'var(--font-head)' }}
                >
                  9–10 triệu
                </span>
                <span className="text-sm ml-1" style={{ color: 'var(--muted-brand)' }}>đ</span>
              </div>
              <div className="text-[0.78rem] mt-1" style={{ color: 'var(--muted-brand)' }}>
                Thanh toán 1 lần · Sở hữu vĩnh viễn
              </div>
            </div>
            <hr className="mb-6 border-0 border-t" style={{ borderColor: 'var(--border-brand)' }} />
            <ul className="flex flex-col gap-2.5 mb-6">
              {starterFeatures.map((f) => (
                <FeatureItem key={f.text} {...f} />
              ))}
            </ul>
          </div>

          <div className="px-10 pb-10">
            <a
              href="#contact"
              className="block w-full py-3.5 rounded-xl text-center text-[0.9rem] font-medium transition-opacity hover:opacity-85"
              style={{ background: 'var(--dark)', color: '#fff' }}
            >
              Chọn gói Cơ Bản
            </a>
          </div>
        </div>

        {/* Gói Nâng Cao */}
        <div
          className="rounded-2xl p-10 border relative transition-transform duration-200 hover:-translate-y-1.5"
          style={{ background: 'var(--dark)', color: 'var(--cream)', borderColor: '#333' }}
        >
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] tracking-[2px] uppercase px-4 py-1 rounded-full whitespace-nowrap font-medium"
            style={{ background: 'var(--gold)', color: '#fff' }}
          >
            Được chọn nhiều nhất
          </div>
          <div
            className="inline-block text-[10px] tracking-[2px] uppercase px-3 py-1 rounded-full mb-6 font-medium"
            style={{ background: 'var(--gold)', color: '#fff' }}
          >
            Đề xuất
          </div>
          <div className="text-xs tracking-[3px] uppercase mb-2" style={{ color: '#C8C0B0' }}>
            Gói toàn diện
          </div>
          <div
            className="font-serif font-bold text-[2rem] mb-1.5"
            style={{ fontFamily: 'var(--font-head)', color: 'var(--cream)' }}
          >
            Nâng Cao
          </div>
          <p className="text-[0.88rem] mb-7 leading-relaxed" style={{ color: '#9A9080' }}>
            Đầy đủ tính năng để vận hành chuyên nghiệp, theo dõi kinh doanh và mở rộng khi cần.
          </p>
          <div className="mb-7">
            <div className="flex items-baseline gap-0.5">
              <span
                className="font-serif font-black text-[2.5rem] leading-none"
                style={{ fontFamily: 'var(--font-head)', color: '#E8B96A' }}
              >
                14–15 triệu
              </span>
              <span className="text-sm ml-1" style={{ color: '#9A9080' }}>đ</span>
            </div>
            <div className="text-[0.78rem] mt-1" style={{ color: '#9A9080' }}>
              Thanh toán 1 lần · Sở hữu vĩnh viễn
            </div>
          </div>
          <hr className="my-6 border-0 border-t" style={{ borderColor: '#333' }} />
          <ul className="flex flex-col gap-2.5 mb-8" style={{ color: '#C8C0B0' }}>
            {proFeatures.map((f) => (
              <FeatureItem key={f.text} {...f} />
            ))}
          </ul>
          <a
            href="#contact"
            className="block w-full py-3.5 rounded-xl text-center text-[0.9rem] font-medium transition-opacity hover:opacity-85"
            style={{ background: 'var(--gold)', color: '#fff' }}
          >
            Chọn gói Nâng Cao
          </a>
        </div>
      </div>

      {/* Lưu ý bảng giá */}
      <div
        className="mt-8 px-7 py-5 rounded-xl border text-[0.85rem] leading-relaxed"
        style={{ background: 'var(--white)', borderColor: 'var(--border-brand)', color: 'var(--muted-brand)' }}
      >
        <strong style={{ color: 'var(--dark)', fontWeight: 600 }}>Lưu ý:</strong>{' '}
        Bảng giá trên là chi phí thiết kế và lập trình tham khảo, chưa bao gồm chi phí Hosting &amp; Tên miền hàng tháng và VAT (nếu có). Giá có thể thay đổi tùy theo yêu cầu tùy chỉnh cụ thể và tính năng tích hợp.
      </div>

      {/* Chi phí vận hành */}
      <div
        className="mt-4 px-7 py-5 rounded-xl flex gap-3 items-start max-w-[680px] border text-[0.85rem]"
        style={{ background: 'var(--white)', borderColor: 'var(--border-brand)', color: 'var(--muted-brand)' }}
      >
        <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0 }}>i</span>
        <div>
          <strong style={{ color: 'var(--dark)', fontWeight: 500 }}>Chi phí vận hành hàng tháng:</strong>{' '}
          Hosting server ~150.000–300.000đ/tháng (tôi hỗ trợ thiết lập). Thanh toán 50% khi bắt đầu, 50% khi bàn giao. Không có phí ẩn nào khác.
        </div>
      </div>
    </section>
  )
}
