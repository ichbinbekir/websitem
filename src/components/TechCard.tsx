const TechCard = ({ name, children }: { name: string, children: React.ReactNode }) => (
  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105">
    {children}
    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{name}</span>
  </div>
);

export default TechCard;