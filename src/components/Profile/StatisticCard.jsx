/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function StatisticCard({title,children}) {
  return (
    <div className="p-4 min-h-[200px] flex flex-col items-center justify-center bg-base-300 rounded-lg space-y-3">
      <h1 className="text-3xl font-bold">{title}</h1>
          {children}
    </div>
  );
}
