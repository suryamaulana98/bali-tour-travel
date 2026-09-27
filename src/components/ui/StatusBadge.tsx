import { BookingStatus, STATUS_CONFIG } from "@/types";

interface StatusBadgeProps {
  status: BookingStatus;
  size?: "sm" | "md" | "lg";
}

export default function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.pending;

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-3.5 py-1.5 text-xs sm:text-sm gap-2 font-medium",
    lg: "px-4 py-2 text-sm sm:text-base gap-2.5 font-semibold",
  };

  const colorClasses =
    {
      amber: "bg-amber-50 text-amber-900 border border-amber-200/80",
      emerald: "bg-emerald-50 text-emerald-800 border border-emerald-200/80",
      red: "bg-rose-50 text-rose-800 border border-rose-200/80",
      blue: "bg-slate-100 text-[#0B1F2A] border border-slate-200",
    }[config.color] || "bg-slate-50 text-slate-700 border border-slate-200";

  return (
    <span
      className={`inline-flex items-center rounded-full tracking-wide transition-colors ${sizeClasses[size]} ${colorClasses}`}
    >
      <span className="text-xs leading-none">{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
}
