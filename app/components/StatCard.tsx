type StatCardProps = {
  value: number;
  label: string;
};

export function StatCard({ value, label }: StatCardProps){
  return (
   <div className="bg-linear-to-br from-white/12 to-white/4 border border-white/15 p-6">
      <p className="font-display text-4xl text-cream">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-wide text-stone">{label}</p>
    </div>
  );
};
