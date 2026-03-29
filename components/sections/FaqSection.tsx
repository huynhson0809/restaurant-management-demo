"use client"

import { useState } from 'react'

const faqs = [
  {
    q: 'Khách có cần cài app không?',
    a: 'Không cần. Khách chỉ cần quét QR bằng camera điện thoại là mở được menu ngay — hoạt động trên mọi điện thoại Android và iPhone, không cần tải app nào cả.',
  },
  {
    q: 'Tài khoản ngân hàng in kèm bill hoạt động thế nào?',
    a: 'Bạn nhập số tài khoản và tên ngân hàng vào phần cài đặt. Khi thu ngân nhấn "In bill", thông tin tài khoản sẽ tự động in kèm ở cuối tờ bill — khách có thể chuyển khoản ngay mà không cần hỏi thêm.',
  },
  {
    q: 'Tôi có thể tự thêm / sửa món ăn không?',
    a: 'Có. Tôi bàn giao kèm trang quản lý đơn giản — bạn có thể thêm, sửa, ẩn/hiện món, cập nhật giá và thay hình ảnh bất kỳ lúc nào mà không cần nhờ tôi.',
  },
  {
    q: 'Máy in bill cần loại gì? Tốn thêm chi phí không?',
    a: 'Dùng máy in nhiệt khổ 80mm tiêu chuẩn, giá 700k–2 triệu, rất phổ biến tại Việt Nam. Tôi hỗ trợ kết nối và cấu hình trong gói — không tính phí thêm. Giấy in cuộn tốn khoảng 50–100k/tháng.',
  },
  {
    q: '"Hỗ trợ lỗi 12/24 tháng" nghĩa là gì cụ thể?',
    a: 'Nếu trong thời gian đó hệ thống phát sinh lỗi kỹ thuật (bug, lỗi hiển thị, sự cố server...), tôi sẽ sửa miễn phí trong vòng 24 giờ làm việc. Không áp dụng cho các yêu cầu thêm tính năng mới ngoài hợp đồng ban đầu.',
  },
  {
    q: 'Nếu mất điện / mất mạng thì sao?',
    a: 'Hệ thống cần internet để hoạt động. Khuyến nghị quán dùng wifi ổn định và có 4G dự phòng (giá sim 4G hiện nay rất rẻ). Các đơn hàng đã xác nhận trước đó vẫn hiển thị trên màn hình thu ngân và bếp bình thường.',
  },
  {
    q: 'Thanh toán dịch vụ như thế nào?',
    a: '50% khi ký hợp đồng và bắt đầu. 50% còn lại khi bàn giao và bạn hài lòng. Thanh toán qua chuyển khoản ngân hàng — không cần tiền mặt.',
  },
]

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section
      className="max-w-[1100px] mx-auto px-10 py-20"
      style={{ color: 'var(--dark)', fontFamily: 'var(--font-body)' }}
    >
      <div className="text-xs tracking-[3px] uppercase mb-3" style={{ color: 'var(--gold)' }}>
        Câu hỏi thường gặp
      </div>
      <h2
        className="font-serif font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-3"
        style={{ fontFamily: 'var(--font-head)' }}
      >
        Bạn đang thắc mắc điều gì?
      </h2>
      <p className="text-sm mb-12 max-w-[540px]" style={{ color: 'var(--muted-brand)' }}>
        Những câu hỏi phổ biến nhất từ các chủ quán trước khi quyết định.
      </p>

      <div className="max-w-[700px] flex flex-col">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i
          return (
            <div
              key={i}
              className="border-b cursor-pointer py-5"
              style={{ borderColor: 'var(--border-brand)' }}
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <div className="flex justify-between items-center gap-4 select-none text-[0.93rem] font-medium">
                <span>{faq.q}</span>
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-sm border flex-shrink-0 transition-transform duration-200"
                  style={{
                    borderColor: 'var(--border-brand)',
                    color: 'var(--muted-brand)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </div>
              <div
                className="text-[0.87rem] leading-[1.75] overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: isOpen ? 300 : 0,
                  paddingTop: isOpen ? 12 : 0,
                  color: 'var(--muted-brand)',
                }}
              >
                {faq.a}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
