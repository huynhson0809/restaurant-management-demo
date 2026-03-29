/* eslint-disable react/no-unescaped-entities */
export default function MockupsSection() {
  return (
    <div
      id="demo"
      className="py-20 px-10"
      style={{ background: 'var(--dark)', fontFamily: 'var(--font-body)' }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-xs tracking-[3px] uppercase mb-2" style={{ color: 'var(--gold)' }}>
          Demo giao diện thực tế
        </div>
        <h2
          className="font-serif font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-3"
          style={{ color: 'var(--cream)', fontFamily: 'var(--font-head)' }}
        >
          Trông như thế nào khi dùng?
        </h2>
        <p className="text-sm mb-12 max-w-[540px]" style={{ color: 'var(--muted-brand)' }}>
          Ba màn hình — ba vai trò — vận hành nhịp nhàng như một đội.
        </p>

        <div
          className="grid gap-9 items-end"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}
        >
          {/* ── CUSTOMER ── */}
          <div className="flex flex-col items-center gap-3">
            <div className="text-xs tracking-[3px] uppercase" style={{ color: 'var(--gold)' }}>
              📱 Khách hàng
            </div>
            <div
              className="rounded-[30px] overflow-hidden border-[3px] shadow-[0_32px_60px_rgba(0,0,0,.7)]"
              style={{ width: 210, background: '#111', borderColor: '#2a2a2a' }}
            >
              {/* notch */}
              <div className="h-[22px] flex items-center justify-center" style={{ background: '#0d0d0d' }}>
                <div className="w-14 h-1.5 rounded-full" style={{ background: '#1a1a1a' }} />
              </div>
              {/* header */}
              <div
                className="px-3 py-2 flex items-center justify-between"
                style={{ background: '#1A1612' }}
              >
                <span className="font-serif font-bold text-xs" style={{ color: '#E8B96A', fontFamily: 'var(--font-head)' }}>
                  Nhà Hàng Sơn
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <span className="text-[8px] px-1.5 py-0.5 rounded-sm font-medium" style={{ background: '#C9933A', color: '#fff' }}>VI</span>
                    <span className="text-[8px] px-1.5 py-0.5 rounded-sm" style={{ background: '#2a2318', color: '#9A9080' }}>EN</span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ color: '#9A9080', background: 'rgba(201,147,58,.15)' }}>Bàn 05</span>
                </div>
              </div>
              {/* banner */}
              <div className="py-3 text-center border-b" style={{ background: '#211A11', borderColor: '#2a2318' }}>
                <div className="text-[8px]" style={{ color: '#9A9080' }}>Chào mừng đến với</div>
                <div className="font-serif font-bold text-sm" style={{ color: '#E8B96A', fontFamily: 'var(--font-head)' }}>Nhà Hàng Sơn</div>
              </div>
              {/* categories */}
              <div className="flex gap-1.5 px-3 py-2 border-b overflow-x-auto" style={{ background: '#fff', borderColor: '#F0EBE1' }}>
                {['Tất cả', 'Món chính', 'Khai vị', 'Đồ uống'].map((c, i) => (
                  <span
                    key={c}
                    className="text-[8px] px-2 py-1 rounded-full border whitespace-nowrap"
                    style={i === 0
                      ? { background: '#C9933A', color: '#fff', borderColor: '#C9933A' }
                      : { borderColor: '#E2D9C8', color: '#9A9080' }}
                  >{c}</span>
                ))}
              </div>
              {/* items */}
              <div className="px-3 py-2 flex flex-col gap-2" style={{ background: '#F9F5EE' }}>
                {[
                  { emoji: '🍜', name: 'Phở bò đặc biệt', desc: 'Nước dùng hầm 12 tiếng', price: '85.000đ', qty: null },
                  { emoji: '🥗', name: 'Gỏi cuốn tôm thịt', desc: 'Kèm tương hoisin', price: '55.000đ', qty: 2 },
                  { emoji: '🧋', name: 'Trà đào cam sả', desc: 'Ít đá / không đường', price: '45.000đ', qty: null },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="rounded-lg p-2 flex gap-2 border"
                    style={{ background: '#fff', borderColor: item.qty ? '#C9933A' : '#F0EBE1' }}
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: '#E8DFD0' }}
                    >{item.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[9.5px] font-medium mb-0.5" style={{ color: '#1A1612' }}>{item.name}</div>
                      <div className="text-[7.5px] mb-1" style={{ color: '#9A9080' }}>{item.desc}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-medium" style={{ color: '#C9933A' }}>{item.price}</span>
                        {item.qty ? (
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center text-[11px]" style={{ background: '#F0EBE1', color: '#C9933A' }}>−</div>
                            <span className="text-[9px] font-semibold" style={{ color: '#1A1612' }}>{item.qty}</span>
                            <div className="w-4.5 h-4.5 rounded-full flex items-center justify-center text-xs" style={{ background: '#C9933A', color: '#fff' }}>+</div>
                          </div>
                        ) : (
                          <div className="w-4.5 h-4.5 rounded-full flex items-center justify-center text-xs" style={{ background: '#C9933A', color: '#fff' }}>+</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* cart */}
              <div className="mx-3 mb-2.5 rounded-lg px-3 py-2 flex items-center justify-between" style={{ background: '#1A1612' }}>
                <div>
                  <div className="text-[7.5px]" style={{ color: '#9A9080' }}>2 món · Tổng cộng</div>
                  <div className="text-[10px] font-bold" style={{ color: '#E8B96A' }}>110.000đ</div>
                </div>
                <div className="text-[8px] px-2.5 py-1.5 rounded-full font-medium" style={{ background: '#C9933A', color: '#fff' }}>Đặt món →</div>
              </div>
            </div>
          </div>

          {/* ── CASHIER ── */}
          <div className="flex flex-col gap-3" style={{ alignItems: 'stretch' }}>
            <div className="text-xs tracking-[3px] uppercase text-center" style={{ color: 'var(--gold)' }}>
              🖥️ Thu ngân
            </div>
            <div
              className="rounded-2xl overflow-hidden border-[3px] shadow-[0_24px_48px_rgba(0,0,0,.6)]"
              style={{ background: '#111', borderColor: '#2a2a2a' }}
            >
              {/* tab bar */}
              <div className="h-[26px] flex items-center px-2.5 gap-1.5" style={{ background: '#0d0d0d' }}>
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: '#ff5f56' }} />
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: '#febc2e' }} />
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: '#28c840' }} />
                <span className="text-[8px] ml-2" style={{ color: '#555' }}>Thu ngân · Nhà Hàng Sơn</span>
              </div>
              <div style={{ background: '#F4F1EC' }}>
                {/* topbar */}
                <div className="px-3 py-2.5 flex items-center justify-between" style={{ background: '#1A1612' }}>
                  <span className="text-[10px] font-medium" style={{ color: '#E8B96A' }}>Tổng quan bàn hôm nay</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[7.5px]" style={{ color: '#9A9080' }}>3 đơn mới</span>
                    <span className="text-[7.5px] px-1.5 py-0.5 rounded-lg font-medium" style={{ background: '#C9933A', color: '#fff' }}>● Live</span>
                  </div>
                </div>
                {/* table grid */}
                <div className="grid grid-cols-4 gap-1.5 p-2">
                  {[
                    { n: 'Bàn 01', s: 'Đơn mới!', t: 'new' },
                    { n: 'Bàn 02', s: 'Đang phục vụ', t: 'busy' },
                    { n: 'Bàn 03', s: 'Trống', t: 'free' },
                    { n: 'Bàn 04', s: 'Đơn mới!', t: 'new' },
                    { n: 'Bàn 05', s: 'Đang phục vụ', t: 'busy' },
                    { n: 'Bàn 06', s: 'Trống', t: 'free' },
                    { n: 'Bàn 07', s: 'Đơn mới!', t: 'new' },
                    { n: 'Bàn 08', s: 'Trống', t: 'free' },
                  ].map((tb) => (
                    <div
                      key={tb.n}
                      className="rounded-lg py-1.5 px-1 text-center"
                      style={
                        tb.t === 'new'
                          ? { background: '#FFF3E0', border: '1.5px solid #C9933A' }
                          : tb.t === 'busy'
                          ? { background: '#fff', border: '1px solid #E2D9C8' }
                          : { background: '#F0EBE1', border: '1px dashed #D3CAB8' }
                      }
                    >
                      <div className="text-[9px] font-medium" style={{ color: '#1A1612' }}>{tb.n}</div>
                      <div
                        className="text-[6.5px] mt-0.5"
                        style={{ color: tb.t === 'new' ? '#C9933A' : '#9A9080', fontWeight: tb.t === 'new' ? 500 : 400 }}
                      >{tb.s}</div>
                    </div>
                  ))}
                </div>
                <div className="h-px mx-2" style={{ background: '#E2D9C8' }} />
                {/* order detail */}
                <div className="p-2">
                  <div className="flex justify-between text-[8.5px] font-medium mb-1.5" style={{ color: '#1A1612' }}>
                    <span>Chi tiết · Bàn 01</span>
                    <span style={{ color: '#9A9080' }}>19:32</span>
                  </div>
                  {[
                    ['Phở bò đặc biệt ×1', '85.000đ'],
                    ['Gỏi cuốn tôm thịt ×2', '110.000đ'],
                    ['Trà đào cam sả ×2', '90.000đ'],
                  ].map(([item, price]) => (
                    <div key={item} className="flex justify-between text-[7.5px] py-1 border-b" style={{ borderColor: '#F0EBE1', color: '#1A1612' }}>
                      <span>{item}</span>
                      <span className="font-medium" style={{ color: '#C9933A' }}>{price}</span>
                    </div>
                  ))}
                </div>
                {/* bank */}
                <div className="mx-2 mb-1.5 p-1.5 rounded-lg border" style={{ background: '#fff', borderColor: '#E2D9C8' }}>
                  <div className="text-[6.5px] mb-0.5" style={{ color: '#9A9080' }}>Tài khoản ngân hàng (in kèm bill)</div>
                  <div className="text-[8px] font-semibold" style={{ color: '#1A1612' }}>MB Bank · 1234 5678 90 · Nguyễn Văn A</div>
                </div>
                {/* total */}
                <div className="mx-2 mb-1.5 rounded-lg px-2.5 py-1.5 flex justify-between items-center" style={{ background: '#1A1612' }}>
                  <span className="text-[8px]" style={{ color: '#9A9080' }}>Tổng cộng</span>
                  <span className="text-[11px] font-bold" style={{ color: '#E8B96A' }}>285.000đ</span>
                </div>
                {/* actions */}
                <div className="flex gap-1.5 px-2 pb-2">
                  <div className="flex-1 py-1.5 rounded-lg text-[8px] font-medium text-center border" style={{ background: '#F0EBE1', color: '#1A1612', borderColor: '#E2D9C8' }}>
                    ↓ Gửi bếp
                  </div>
                  <div className="flex-1 py-1.5 rounded-lg text-[8px] font-medium text-center" style={{ background: '#C9933A', color: '#fff' }}>
                    🖨 In bill
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── KITCHEN ── */}
          <div className="flex flex-col gap-3" style={{ alignItems: 'stretch' }}>
            <div className="text-xs tracking-[3px] uppercase text-center" style={{ color: 'var(--gold)' }}>
              👨‍🍳 Màn hình bếp
            </div>
            <div
              className="rounded-2xl overflow-hidden border-[3px] shadow-[0_24px_48px_rgba(0,0,0,.6)]"
              style={{ background: '#111', borderColor: '#2a2a2a' }}
            >
              <div className="h-[26px] flex items-center px-2.5 gap-1.5" style={{ background: '#0d0d0d' }}>
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: '#ff5f56' }} />
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: '#febc2e' }} />
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: '#28c840' }} />
                <span className="text-[8px] ml-2" style={{ color: '#555' }}>Bếp · Nhà Hàng Sơn</span>
              </div>
              <div style={{ background: '#111', minHeight: 260 }}>
                <div className="px-3 py-2.5 flex items-center justify-between border-b" style={{ background: '#0d0d0d', borderColor: '#222' }}>
                  <span className="text-[10px] font-medium" style={{ color: '#E8B96A' }}>Đơn đang chờ chế biến</span>
                  <span className="text-[8px]" style={{ color: '#555' }}>19:34 · 3 đơn</span>
                </div>
                <div className="flex flex-col gap-2 p-2">
                  {/* hot order */}
                  <div className="rounded-xl overflow-hidden border" style={{ background: '#1a1a1a', borderColor: '#C9933A' }}>
                    <div className="px-2.5 py-2 flex items-center justify-between" style={{ background: '#2C1F0E' }}>
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] font-semibold" style={{ color: '#fff' }}>Bàn 01</span>
                        <span className="text-[6.5px] px-1.5 py-0.5 rounded-sm" style={{ background: '#C9933A', color: '#fff' }}>⚡ 18 phút</span>
                      </div>
                      <span className="text-[7.5px]" style={{ color: '#E8B96A' }}>Ưu tiên</span>
                    </div>
                    <div className="px-2.5 py-2 flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-sm flex-shrink-0" style={{ background: '#C9933A', border: '1.5px solid #C9933A' }} />
                        <span className="text-[8.5px] line-through" style={{ color: '#444' }}>Phở bò đặc biệt</span>
                        <span className="text-[8.5px] ml-auto font-medium" style={{ color: '#E8B96A' }}>×1</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-sm flex-shrink-0 border-[1.5px]" style={{ borderColor: '#444' }} />
                        <span className="text-[8.5px]" style={{ color: '#ccc' }}>Gỏi cuốn tôm thịt</span>
                        <span className="text-[8.5px] ml-auto font-medium" style={{ color: '#E8B96A' }}>×2</span>
                      </div>
                    </div>
                    <div className="mx-2.5 mb-2 py-1.5 rounded-md text-[7.5px] text-center font-medium" style={{ background: '#1D2E1D', border: '1px solid #2A4A2A', color: '#4CAF50' }}>
                      Đánh dấu hoàn thành
                    </div>
                  </div>
                  {/* normal order */}
                  <div className="rounded-xl overflow-hidden border" style={{ background: '#1a1a1a', borderColor: '#2a2a2a' }}>
                    <div className="px-2.5 py-2 flex items-center justify-between" style={{ background: '#222' }}>
                      <span className="text-[9px] font-semibold" style={{ color: '#fff' }}>Bàn 05</span>
                      <span className="text-[7.5px]" style={{ color: '#555' }}>7 phút trước</span>
                    </div>
                    <div className="px-2.5 py-2 flex flex-col gap-1">
                      {['Bún bò Huế', 'Cơm sườn nướng', 'Chả giò rế'].map((m, i) => (
                        <div key={m} className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 rounded-sm flex-shrink-0 border-[1.5px]" style={{ borderColor: '#444' }} />
                          <span className="text-[8.5px]" style={{ color: '#ccc' }}>{m}</span>
                          <span className="text-[8.5px] ml-auto font-medium" style={{ color: '#E8B96A' }}>×{i === 1 ? 2 : 1}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mx-2.5 mb-2 py-1.5 rounded-md text-[7.5px] text-center font-medium" style={{ background: '#1D2E1D', border: '1px solid #2A4A2A', color: '#4CAF50' }}>
                      Đánh dấu hoàn thành
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
