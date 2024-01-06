/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function StatisticCard({title,children,icon}) {
  return (
    <div className="p-5 py-10 text-white min-h-[200px] flex flex-col items-center justify-center bg-red-300 rounded-lg space-y-3">
      <div className="flex justify-center rounded-full  items-center my-3 text-red-300 text-5xl p-4 bg-white  w-24 h-24">
      <div className="">{icon}</div>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
          {children}
    </div>
  );
}
