interface TokenCardProps {
  token: string;
  data: {
    percentage: number;
    payment_count: number;
    total_volume_usd: number;
  };
}

export const TokenCard = ({ token, data }: TokenCardProps) => (
  <div className="bg-white p-5 rounded-lg border border-gray-200">
    <div className="flex justify-between items-start mb-3">
      <h4 className="text-lg font-semibold text-gray-900">{token}</h4>
      <span className="text-sm font-medium text-accent">{data?.percentage}%</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Payments</span>
          <span className="font-medium text-gray-900">{data?.payment_count.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Volume</span>
          <span className="font-medium text-gray-900">${data?.total_volume_usd.toLocaleString()}</span>
        </div>
      </div>
      <div className="mt-3 bg-gray-100 rounded-full h-2">
        <div 
          className="bg-accent h-2 rounded-full transition-all duration-300"
          style={{ width: `${data?.percentage}%` }}
        />
      </div>
    </div>
  );
  