/* eslint-disable react/prop-types */

export default function TableRow({ data, children }) {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="">
            <div className="w-16 h-14">
              <img src={data?.banner} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold max-w-[150px]">{data?.title}</div>
        </div>
      </td>
      <td>
        <div className="badge badge-secondary">{data?.status}</div>
      </td>
      {children}
    </tr>
  );
}
