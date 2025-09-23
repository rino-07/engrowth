export default function SectionDivider({
  label,
  variant = "soft", // "soft" | "label" | "brand"
}: {
  label?: string;
  variant?: "soft" | "label" | "brand";
}) {
  return (
    <div className="relative my-0">
      {/* 線 */}
      <div
        className={
          variant === "brand"
            ? "h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent"
            : "h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        }
      />
      {/* ラベル */}
      {label && (
        <span
          className={
            variant === "brand"
              ? "absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 py-0.5 text-[11px] tracking-wider font-semibold text-brand-red rounded-full border border-brand-red/20"
              : "absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 py-0.5 text-[11px] tracking-wider text-gray-500 rounded-full border border-gray-200"
          }
        >
          {label}
        </span>
      )}
      {/* ノッチ（brandだけ中央に小さな丸） */}
      {variant === "brand" && !label && (
        <span className="absolute left-1/2 -translate-x-1/2 -top-1.5 h-3 w-3 rounded-full bg-brand-red" />
      )}
    </div>
  );
}

