const TechCard = ({ name, children }: { name: string, children: React.ReactNode }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105">
    {children}
    <span className="text-sm font-medium text-slate-600">{name}</span>
  </div>
);

export default TechCard;