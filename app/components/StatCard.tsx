type StatCardProps = {
  value: number;
  label: string;
};

export function StatCard({ value, label }: StatCardProps){
  return (
    <div className="bg-charcoal p-6 border-t border border-black">
      <p className="font-display text-4xl text-cream">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-wide text-stone">{label}</p>
    </div>
  );
};
