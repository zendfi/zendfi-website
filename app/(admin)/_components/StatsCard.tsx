type StatCardProps = {
  title: string;
  value: React.ReactNode;
  subtitle?: string;
  trend?: number;
};

export const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, trend }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200">
    <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
    <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
    {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
      {trend && (
        <p className="text-sm text-accent mt-2">
          {trend > 0 ? '+' : ''}{trend}%
        </p>
      )}
    </div>
  );