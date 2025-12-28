export default function TokenTable() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] px-4 py-3 text-[12px] text-[#8a8a8a]">
        <span>Token</span>
        <span>Price</span>
        <span>Volume</span>
        <span>Liquidity</span>
      </div>

      {/* Rows */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="grid grid-cols-[2fr_1fr_1fr_1fr] px-4 py-3 text-[13px] hover:bg-[#141414] transition"
        >
          <span>ETH / USDT</span>
          <span>$2,312</span>
          <span>$1.2M</span>
          <span>$850K</span>
        </div>
      ))}
    </div>
  );
}
