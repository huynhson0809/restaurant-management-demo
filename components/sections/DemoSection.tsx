"use client";

import { useState } from "react";

const categories = ["Tất cả", "Khai vị", "Món chính", "Đồ uống"];

const menu = [
  {
    id: 1,
    name: "Gỏi cuốn tôm thịt",
    cat: "Khai vị",
    price: 45000,
    desc: "Tôm, thịt heo, rau sống, bánh tráng",
    emoji: "🥗",
  },
  {
    id: 2,
    name: "Chả giò chiên giòn",
    cat: "Khai vị",
    price: 55000,
    desc: "Nhân thịt, nấm, miến, chiên vàng giòn",
    emoji: "🌯",
  },
  {
    id: 3,
    name: "Bò lúc lắc",
    cat: "Món chính",
    price: 120000,
    desc: "Bò Úc xào lúc lắc, khoai tây chiên",
    emoji: "🥩",
  },
  {
    id: 4,
    name: "Cơm chiên hải sản",
    cat: "Món chính",
    price: 95000,
    desc: "Tôm, mực, cua ghẹ, trứng, rau củ",
    emoji: "🍳",
  },
  {
    id: 5,
    name: "Lẩu Thái hải sản",
    cat: "Món chính",
    price: 280000,
    desc: "Cho 2–3 người, đủ topping",
    emoji: "🍲",
  },
  {
    id: 6,
    name: "Nước chanh dây",
    cat: "Đồ uống",
    price: 35000,
    desc: "Chanh dây tươi, đá bào",
    emoji: "🧃",
  },
  {
    id: 7,
    name: "Trà đào cam sả",
    cat: "Đồ uống",
    price: 45000,
    desc: "Đào tươi, cam, sả tươi",
    emoji: "🍑",
  },
  {
    id: 8,
    name: "Bia Saigon Special",
    cat: "Đồ uống",
    price: 30000,
    desc: "Lon 330ml ướp lạnh",
    emoji: "🍺",
  },
];

function fmt(n: number) {
  return n.toLocaleString("vi-VN") + "đ";
}

type OrderItem = {
  id: number;
  qty: number;
  name: string;
  price: number;
  emoji: string;
};
type Screen = "menu" | "cart" | "confirm" | "cashier" | "kitchen";

const cashierOrders = [
  {
    id: "DH001",
    table: 3,
    items: ["Bò lúc lắc ×1", "Nước chanh dây ×2"],
    total: 190000,
    status: "Mới",
    time: "18:24",
  },
  {
    id: "DH002",
    table: 7,
    items: ["Lẩu Thái hải sản ×1", "Bia Saigon ×3"],
    total: 370000,
    status: "Đang làm",
    time: "18:18",
  },
  {
    id: "DH003",
    table: 12,
    items: ["Gỏi cuốn ×2", "Cơm chiên ×1"],
    total: 185000,
    status: "Xong",
    time: "18:05",
  },
  {
    id: "DH004",
    table: 5,
    items: ["Chả giò ×2", "Trà đào ×2"],
    total: 200000,
    status: "Mới",
    time: "18:26",
  },
];

const kitchenTickets = [
  {
    table: 3,
    items: ["Bò lúc lắc ×1", "Nước chanh dây ×2"],
    note: "Không cay",
    status: "Mới",
    time: "18:24",
  },
  {
    table: 7,
    items: ["Lẩu Thái hải sản ×1", "Bia Saigon ×3"],
    note: "",
    status: "Đang làm",
    time: "18:18",
  },
  {
    table: 12,
    items: ["Gỏi cuốn tôm thịt ×2"],
    note: "Ít nước mắm",
    status: "Xong",
    time: "18:05",
  },
  {
    table: 5,
    items: ["Chả giò chiên giòn ×2", "Trà đào cam sả ×2"],
    note: "",
    status: "Mới",
    time: "18:26",
  },
];

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState<Screen>("menu");
  const [cat, setCat] = useState("Tất cả");
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [note, setNote] = useState("");

  const filtered = cat === "Tất cả" ? menu : menu.filter((m) => m.cat === cat);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  function addItem(item: (typeof menu)[0]) {
    setCart((prev) => {
      const ex = prev.find((c) => c.id === item.id);
      if (ex)
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c,
        );
      return [
        ...prev,
        {
          id: item.id,
          qty: 1,
          name: item.name,
          price: item.price,
          emoji: item.emoji,
        },
      ];
    });
  }

  function removeItem(id: number) {
    setCart((prev) => {
      const ex = prev.find((c) => c.id === id);
      if (!ex) return prev;
      if (ex.qty === 1) return prev.filter((c) => c.id !== id);
      return prev.map((c) => (c.id === id ? { ...c, qty: c.qty - 1 } : c));
    });
  }

  function getQty(id: number) {
    return cart.find((c) => c.id === id)?.qty ?? 0;
  }

  function placeOrder() {
    if (cart.length === 0) return;
    setActiveTab("confirm");
  }

  function resetDemo() {
    setCart([]);
    setNote("");
    setActiveTab("menu");
  }

  const isPhoneTab =
    activeTab === "menu" || activeTab === "cart" || activeTab === "confirm";

  const tabs: { key: Screen; label: string; device: string }[] = [
    { key: "menu", label: "Khách", device: "Điện thoại" },
    { key: "cashier", label: "Thu ngân", device: "Laptop" },
    { key: "kitchen", label: "Bếp", device: "Laptop" },
  ];

  return (
    <section
      className="max-w-[1100px] mx-auto px-6 md:px-10 pb-20"
      style={{ color: "var(--dark)", fontFamily: "var(--font-body)" }}
    >
      <div
        className="text-xs tracking-[3px] uppercase mb-3 pt-20"
        style={{ color: "var(--gold)" }}
      >
        Demo tương tác
      </div>
      <h2
        className="font-serif font-bold text-[clamp(1.5rem,3vw,2.2rem)] leading-tight mb-3"
        style={{ fontFamily: "var(--font-head)" }}
      >
        Thử trải nghiệm ngay tại đây
      </h2>
      <p
        className="text-sm mb-8 max-w-[540px]"
        style={{ color: "var(--muted-brand)" }}
      >
        Chọn vai trò để xem giao diện thực tế. Demo minh hoạ luồng hoạt động của
        hệ thống.
      </p>

      {/* Tab switcher */}
      <div className="flex gap-2 mb-10 flex-wrap">
        {tabs.map((t) => {
          const isActive =
            t.key === "menu"
              ? activeTab === "menu" ||
                activeTab === "cart" ||
                activeTab === "confirm"
              : activeTab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border transition-all"
              style={
                isActive
                  ? {
                      background: "var(--dark)",
                      color: "var(--cream)",
                      borderColor: "var(--dark)",
                    }
                  : {
                      background: "var(--white)",
                      color: "var(--muted-brand)",
                      borderColor: "var(--border-brand)",
                    }
              }
            >
              {t.label}
              <span
                className="text-[10px] px-2 py-0.5 rounded-full"
                style={{
                  background: isActive
                    ? "rgba(255,255,255,0.15)"
                    : "var(--cream)",
                  color: isActive ? "var(--cream)" : "var(--muted-brand)",
                }}
              >
                {t.device}
              </span>
            </button>
          );
        })}
      </div>

      {/* ===================== PHONE FRAME (Khách) ===================== */}
      {isPhoneTab && (
        <div className="flex justify-center">
          <div
            className="relative w-[320px] rounded-[38px] overflow-hidden shadow-2xl border-[6px]"
            style={{
              borderColor: "var(--dark)",
              background: "#fff",
              height: "640px",
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 rounded-b-xl z-10"
              style={{ background: "var(--dark)" }}
            />

            {/* MENU */}
            {activeTab === "menu" && (
              <div className="h-full flex flex-col overflow-hidden">
                <div
                  className="pt-7 px-4 pb-3"
                  style={{ background: "var(--dark)" }}
                >
                  <div className="text-[9px] text-gray-400 mt-1 mb-0.5">
                    Bàn số 5
                  </div>
                  <div className="text-white font-bold text-sm">
                    Quán Cơm Ngon
                  </div>
                  <div className="text-[10px] text-gray-400 mb-3">
                    Chọn món & đặt trực tiếp
                  </div>
                  <div className="flex gap-1.5 overflow-x-auto pb-1">
                    {categories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCat(c)}
                        className="flex-shrink-0 text-[10px] px-2.5 py-1 rounded-full border transition-all"
                        style={
                          cat === c
                            ? {
                                background: "var(--gold)",
                                color: "#fff",
                                borderColor: "var(--gold)",
                              }
                            : {
                                background: "transparent",
                                color: "#aaa",
                                borderColor: "#444",
                              }
                        }
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto px-3 py-2.5 flex flex-col gap-2">
                  {filtered.map((item) => {
                    const qty = getQty(item.id);
                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl border"
                        style={{
                          borderColor:
                            qty > 0 ? "var(--gold)" : "var(--border-brand)",
                          background: qty > 0 ? "#FDF8EE" : "#fff",
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                          style={{ background: "#F3EDE3" }}
                        >
                          {item.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[0.75rem] font-semibold leading-snug truncate">
                            {item.name}
                          </div>
                          <div className="text-[0.68rem] text-gray-400 truncate">
                            {item.desc}
                          </div>
                          <div
                            className="text-[0.72rem] font-bold mt-0.5"
                            style={{ color: "var(--gold)" }}
                          >
                            {fmt(item.price)}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {qty > 0 && (
                            <button
                              onClick={() => removeItem(item.id)}
                              className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center border"
                              style={{
                                borderColor: "var(--gold)",
                                color: "var(--gold)",
                              }}
                            >
                              –
                            </button>
                          )}
                          {qty > 0 && (
                            <span className="w-4 text-center text-[0.75rem] font-bold">
                              {qty}
                            </span>
                          )}
                          <button
                            onClick={() => addItem(item)}
                            className="w-6 h-6 rounded-full text-xs font-bold text-white flex items-center justify-center"
                            style={{ background: "var(--gold)" }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {cart.length > 0 && (
                  <div className="px-3 pb-4 pt-2">
                    <button
                      onClick={() => setActiveTab("cart")}
                      className="w-full py-2.5 rounded-xl text-xs font-semibold text-white flex items-center justify-between px-4"
                      style={{ background: "var(--dark)" }}
                    >
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                        style={{ background: "var(--gold)" }}
                      >
                        {totalQty}
                      </span>
                      <span>Xem giỏ hàng</span>
                      <span style={{ color: "var(--gold)" }}>{fmt(total)}</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* GIỎ HÀNG */}
            {activeTab === "cart" && (
              <div className="h-full flex flex-col">
                <div
                  className="pt-7 px-4 pb-3"
                  style={{ background: "var(--dark)" }}
                >
                  <button
                    onClick={() => setActiveTab("menu")}
                    className="text-gray-400 text-[10px] mb-1.5"
                  >
                    ← Quay lại
                  </button>
                  <div className="text-white font-bold text-sm">
                    Giỏ hàng · Bàn 5
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2.5">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-2.5 border-b pb-2.5"
                      style={{ borderColor: "var(--border-brand)" }}
                    >
                      <div className="text-xl">{item.emoji}</div>
                      <div className="flex-1">
                        <div className="text-[0.78rem] font-medium">
                          {item.name}
                        </div>
                        <div
                          className="text-[0.72rem]"
                          style={{ color: "var(--gold)" }}
                        >
                          {fmt(item.price)} × {item.qty}
                        </div>
                      </div>
                      <div className="font-semibold text-[0.78rem]">
                        {fmt(item.price * item.qty)}
                      </div>
                    </div>
                  ))}
                  <textarea
                    className="w-full mt-1 text-[0.75rem] rounded-xl border p-2.5 resize-none outline-none"
                    style={{
                      borderColor: "var(--border-brand)",
                      fontFamily: "var(--font-body)",
                    }}
                    rows={2}
                    placeholder="Ghi chú cho bếp..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
                <div
                  className="px-4 pb-4 pt-2 border-t"
                  style={{ borderColor: "var(--border-brand)" }}
                >
                  <div className="flex justify-between text-xs font-semibold mb-2.5 px-1">
                    <span>Tổng cộng</span>
                    <span style={{ color: "var(--gold)" }}>{fmt(total)}</span>
                  </div>
                  <button
                    onClick={placeOrder}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-white"
                    style={{ background: "var(--gold)" }}
                  >
                    Đặt món ngay
                  </button>
                </div>
              </div>
            )}

            {/* XÁC NHẬN */}
            {activeTab === "confirm" && (
              <div className="h-full flex flex-col items-center justify-center px-6 text-center gap-4">
                <div className="text-4xl mb-1">🎉</div>
                <div
                  className="font-bold text-base"
                  style={{ fontFamily: "var(--font-head)" }}
                >
                  Đặt món thành công!
                </div>
                <div
                  className="text-[0.78rem] leading-relaxed"
                  style={{ color: "var(--muted-brand)" }}
                >
                  Đơn hàng đã gửi đến bếp và thu ngân. Vui lòng chờ trong giây
                  lát.
                </div>
                <div
                  className="w-full rounded-2xl border p-3.5 text-left"
                  style={{
                    borderColor: "var(--border-brand)",
                    background: "#FFFDF8",
                  }}
                >
                  <div
                    className="text-[0.7rem] font-medium mb-2"
                    style={{ color: "var(--muted-brand)" }}
                  >
                    Bàn 5 · {cart.length} món
                  </div>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-[0.75rem] py-0.5"
                    >
                      <span>
                        {item.emoji} {item.name} ×{item.qty}
                      </span>
                      <span style={{ color: "var(--gold)" }}>
                        {fmt(item.price * item.qty)}
                      </span>
                    </div>
                  ))}
                  <div
                    className="border-t mt-2 pt-2 flex justify-between font-semibold text-[0.8rem]"
                    style={{ borderColor: "var(--border-brand)" }}
                  >
                    <span>Tổng</span>
                    <span style={{ color: "var(--gold)" }}>{fmt(total)}</span>
                  </div>
                </div>
                <button
                  onClick={resetDemo}
                  className="text-[0.75rem] underline mt-1"
                  style={{ color: "var(--muted-brand)" }}
                >
                  Đặt lại demo
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===================== LAPTOP FRAME (Thu ngân) ===================== */}
      {activeTab === "cashier" && (
        <div className="flex flex-col items-center">
          {/* Screen */}
          <div
            className="w-full max-w-[860px] rounded-t-2xl border-[8px] shadow-2xl overflow-hidden"
            style={{
              borderColor: "#1A1612",
              background: "#fff",
              minHeight: "480px",
            }}
          >
            {/* Browser bar */}
            <div
              className="flex items-center gap-2 px-4 py-2 border-b"
              style={{ background: "#F0EBE3", borderColor: "#D9D0C2" }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div
                className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-[11px] border"
                style={{ borderColor: "#D9D0C2", color: "#888" }}
              >
                quanthu.quancommunity.vn
              </div>
            </div>
            {/* App */}
            <div
              className="flex h-full"
              style={{ background: "#F8F4ED", minHeight: "440px" }}
            >
              {/* Sidebar */}
              <div
                className="w-48 flex flex-col gap-1 p-4 border-r"
                style={{ background: "var(--dark)", borderColor: "#2A2218" }}
              >
                <div className="text-[11px] text-gray-400 mb-2 px-1">
                  Quán Cơm Ngon
                </div>
                {["Đơn hàng", "Bàn", "Menu", "Báo cáo", "Cài đặt"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] cursor-pointer transition"
                      style={
                        i === 0
                          ? { background: "var(--gold)", color: "#fff" }
                          : { color: "#aaa" }
                      }
                    >
                      <span className="text-base">
                        {["📋", "🪑", "🍽️", "📊", "⚙️"][i]}
                      </span>
                      {item}
                    </div>
                  ),
                )}
              </div>
              {/* Main */}
              <div className="flex-1 p-5 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div
                      className="font-bold text-base"
                      style={{ fontFamily: "var(--font-head)" }}
                    >
                      Quản lý đơn hàng
                    </div>
                    <div
                      className="text-[11px]"
                      style={{ color: "var(--muted-brand)" }}
                    >
                      Thứ 6, 29/03/2026 · 18:26
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div
                      className="text-[11px] px-3 py-1.5 rounded-lg border"
                      style={{
                        borderColor: "var(--border-brand)",
                        background: "#fff",
                      }}
                    >
                      4 đơn hôm nay
                    </div>
                    <div
                      className="text-[11px] px-3 py-1.5 rounded-lg font-semibold"
                      style={{ background: "#E8F5EE", color: "#2D7A4F" }}
                    >
                      2 đơn mới
                    </div>
                  </div>
                </div>
                {/* Orders table */}
                <div
                  className="rounded-xl border overflow-hidden"
                  style={{ borderColor: "var(--border-brand)" }}
                >
                  <table className="w-full text-[12px] border-collapse">
                    <thead>
                      <tr
                        style={{
                          background: "var(--dark)",
                          color: "var(--cream)",
                        }}
                      >
                        <th className="text-left px-4 py-2.5 font-medium">
                          Đơn
                        </th>
                        <th className="text-left px-3 py-2.5 font-medium">
                          Bàn
                        </th>
                        <th className="text-left px-3 py-2.5 font-medium">
                          Món
                        </th>
                        <th className="px-3 py-2.5 font-medium text-right">
                          Tổng
                        </th>
                        <th className="px-3 py-2.5 font-medium text-center">
                          Trạng thái
                        </th>
                        <th className="px-4 py-2.5 font-medium text-center">
                          Thao tác
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cashierOrders.map((order, i) => (
                        <tr
                          key={order.id}
                          className="border-t"
                          style={{
                            borderColor: "var(--border-brand)",
                            background:
                              order.status === "Mới"
                                ? "#FFFDF8"
                                : i % 2 === 0
                                  ? "#fff"
                                  : "#FAFAF8",
                          }}
                        >
                          <td
                            className="px-4 py-3 font-medium text-[11px]"
                            style={{ color: "var(--muted-brand)" }}
                          >
                            #{order.id} · {order.time}
                          </td>
                          <td className="px-3 py-3 font-bold">
                            Bàn {order.table}
                          </td>
                          <td
                            className="px-3 py-3 text-[11px]"
                            style={{ color: "var(--muted-brand)" }}
                          >
                            {order.items.join(", ")}
                          </td>
                          <td
                            className="px-3 py-3 text-right font-semibold"
                            style={{ color: "var(--gold)" }}
                          >
                            {fmt(order.total)}
                          </td>
                          <td className="px-3 py-3 text-center">
                            <span
                              className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                              style={{
                                background:
                                  order.status === "Mới"
                                    ? "var(--gold)"
                                    : order.status === "Đang làm"
                                      ? "#E8F5EE"
                                      : "#F0F0F0",
                                color:
                                  order.status === "Mới"
                                    ? "#fff"
                                    : order.status === "Đang làm"
                                      ? "#2D7A4F"
                                      : "#888",
                              }}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <button
                              className="text-[10px] px-3 py-1.5 rounded-lg font-medium text-white transition"
                              style={{
                                background:
                                  order.status === "Xong"
                                    ? "#888"
                                    : "var(--dark)",
                              }}
                            >
                              {order.status === "Xong" ? "Đã in" : "In bill"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Summary bar */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    {
                      label: "Doanh thu hôm nay",
                      value: "745.000đ",
                      color: "var(--gold)",
                    },
                    {
                      label: "Đơn hoàn thành",
                      value: "1 / 4",
                      color: "#2D7A4F",
                    },
                    {
                      label: "Bàn đang dùng",
                      value: "4 / 30",
                      color: "var(--dark)",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border p-3"
                      style={{
                        borderColor: "var(--border-brand)",
                        background: "#fff",
                      }}
                    >
                      <div
                        className="text-[10px] mb-1"
                        style={{ color: "var(--muted-brand)" }}
                      >
                        {s.label}
                      </div>
                      <div
                        className="font-bold text-base"
                        style={{
                          color: s.color,
                          fontFamily: "var(--font-head)",
                        }}
                      >
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Laptop base */}
          <div
            className="w-full max-w-[860px] h-4 rounded-b-lg"
            style={{ background: "#1A1612" }}
          />
          <div
            className="w-[calc(100%-40px)] max-w-[900px] h-3 rounded-b-2xl shadow-xl"
            style={{ background: "#111" }}
          />
        </div>
      )}

      {/* ===================== LAPTOP FRAME (Bếp) ===================== */}
      {activeTab === "kitchen" && (
        <div className="flex flex-col items-center">
          <div
            className="w-full max-w-[860px] rounded-t-2xl border-[8px] shadow-2xl overflow-hidden"
            style={{
              borderColor: "#1A1612",
              background: "#1A1612",
              minHeight: "480px",
            }}
          >
            {/* Browser bar */}
            <div
              className="flex items-center gap-2 px-4 py-2 border-b"
              style={{ background: "#111", borderColor: "#2A2218" }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div
                className="flex-1 mx-3 bg-[#1A1612] rounded-md px-3 py-1 text-[11px] border border-[#333]"
                style={{ color: "#666" }}
              >
                bep.quancommunity.vn
              </div>
              <div
                className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                style={{ background: "#2D7A4F", color: "#fff" }}
              >
                Realtime
              </div>
            </div>
            {/* Kitchen app */}
            <div
              className="p-5"
              style={{ background: "#1A1612", minHeight: "440px" }}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "var(--font-head)" }}
                  >
                    Màn hình Bếp
                  </div>
                  <div className="text-[11px]" style={{ color: "#888" }}>
                    Quán Cơm Ngon · Cập nhật realtime qua WebSocket
                  </div>
                </div>
                <div className="flex gap-2">
                  {["Tất cả (4)", "Mới (2)", "Đang làm (1)", "Xong (1)"].map(
                    (f, i) => (
                      <button
                        key={f}
                        className="text-[10px] px-3 py-1.5 rounded-lg border transition"
                        style={
                          i === 0
                            ? {
                                background: "var(--gold)",
                                color: "#fff",
                                borderColor: "var(--gold)",
                              }
                            : {
                                background: "transparent",
                                color: "#888",
                                borderColor: "#333",
                              }
                        }
                      >
                        {f}
                      </button>
                    ),
                  )}
                </div>
              </div>
              {/* Ticket grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {kitchenTickets.map((ticket) => (
                  <div
                    key={ticket.table}
                    className="rounded-xl border p-4 flex flex-col gap-2"
                    style={{
                      background: ticket.status === "Xong" ? "#111" : "#252015",
                      borderColor:
                        ticket.status === "Mới"
                          ? "var(--gold)"
                          : ticket.status === "Đang làm"
                            ? "#2D7A4F"
                            : "#333",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-white font-bold text-sm">
                        Bàn {ticket.table}
                      </div>
                      <span
                        className="text-[9px] px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background:
                            ticket.status === "Mới"
                              ? "var(--gold)"
                              : ticket.status === "Đang làm"
                                ? "#2D7A4F"
                                : "#333",
                          color: "#fff",
                        }}
                      >
                        {ticket.status}
                      </span>
                    </div>
                    <div className="text-[9px]" style={{ color: "#888" }}>
                      {ticket.time}
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      {ticket.items.map((it) => (
                        <div
                          key={it}
                          className="text-[11px]"
                          style={{ color: "#ccc" }}
                        >
                          · {it}
                        </div>
                      ))}
                    </div>
                    {ticket.note && (
                      <div
                        className="text-[10px] px-2.5 py-1.5 rounded-lg"
                        style={{ background: "#3A2A10", color: "#E8B96A" }}
                      >
                        {ticket.note}
                      </div>
                    )}
                    <button
                      className="w-full text-[10px] py-1.5 rounded-lg font-medium mt-1 transition"
                      style={{
                        background:
                          ticket.status === "Xong" ? "#2A2A2A" : "var(--gold)",
                        color: ticket.status === "Xong" ? "#666" : "#fff",
                      }}
                    >
                      {ticket.status === "Xong"
                        ? "Hoàn thành"
                        : "Đánh dấu xong"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Laptop base */}
          <div
            className="w-full max-w-[860px] h-4 rounded-b-lg"
            style={{ background: "#1A1612" }}
          />
          <div
            className="w-[calc(100%-40px)] max-w-[900px] h-3 rounded-b-2xl shadow-xl"
            style={{ background: "#111" }}
          />
        </div>
      )}

      <p
        className="text-center text-[0.78rem] mt-6"
        style={{ color: "var(--muted-brand)" }}
      >
        Demo minh hoạ tĩnh · Hệ thống thực tế hoạt động realtime qua WebSocket
      </p>
    </section>
  );
}
