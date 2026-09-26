import { BookingStatus, STATUS_CONFIG } from '@/types';

interface StatusBadgeProps {
  status: BookingStatus;
  size?: 'sm' | 'md' | 'lg';
}

export default function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.pending;

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3.5 py-1.5 text-sm gap-2',
    lg: 'px-4 py-2 text-base gap-2.5 font-semibold',
  };

  const colorClasses = {
    amber: 'bg-amber-50 text-amber-800 border-amber-200/80',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    red: 'bg-red-50 text-red-800 border-red-200/80',
    blue: 'bg-blue-50 text-blue-800 border-blue-200/80',
  }[config.color];

  return (
    <span
      className={`inline-flex items-center rounded-full border shadow-xs transition-colors font-medium ${sizeClasses[size]} ${colorClasses}`}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
}
