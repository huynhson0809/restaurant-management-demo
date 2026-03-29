const steps = [
  { icon: '📱', title: 'Khách quét QR', desc: 'Mở menu trên điện thoại' },
  { icon: '🛒', title: 'Chọn món', desc: 'Thêm vào giỏ, xem giá' },
  { icon: '✅', title: 'Thu ngân xác nhận', desc: 'Nhận đơn realtime' },
  { icon: '👨‍🍳', title: 'Bếp nhận ngay', desc: 'Chế biến theo thứ tự' },
  { icon: '🖨️', title: 'In bill + QR bank', desc: '1 nút bấm, xong ngay' },
]

export default function FlowSection() {
  return (
    <div
      className="border-t border-b py-12"
      style={{ background: 'var(--white)', borderColor: 'var(--border-brand)', fontFamily: 'var(--font-body)' }}
    >
      <div className="max-w-[1100px] mx-auto px-10">
        <div
          className="text-center text-xs tracking-[3px] uppercase mb-8"
          style={{ color: 'var(--gold)' }}
        >
          Quy trình hoạt động
        </div>

        <div className="flex items-start overflow-x-auto pb-2 gap-0">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 min-w-[110px] text-center px-2 relative">
              {i < steps.length - 1 && (
                <span
                  className="absolute right-[-10px] top-3 text-base"
                  style={{ color: 'var(--gold)' }}
                >
                  →
                </span>
              )}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-lg mx-auto mb-3"
                style={{ background: 'var(--gold)', color: '#fff' }}
              >
                {s.icon}
              </div>
              <h4 className="text-[0.83rem] font-medium mb-1" style={{ color: 'var(--dark)' }}>
                {s.title}
              </h4>
              <p className="text-[0.76rem]" style={{ color: 'var(--muted-brand)' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
