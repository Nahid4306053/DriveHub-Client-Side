/* eslint-disable react/prop-types */


export default function TableRow({ data,children }) {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="">
            <div className="w-16 h-14">
              <img src={data?.gallery[0]} alt={data.brand} />
            </div>
          </div>
          <div>
            <div className="font-bold max-w-[150px]">{data.brand}</div>
          </div>
        </div>
      </td>
      <td>
        {data.model}
        <br />
        <div className="flex mt-2 "> </div>
      </td>
      <td>${data.price}<span className="text-xs">/Per day</span></td>
      <td><div className="badge">{data.availabilityStatus}</div></td>
     
        {children}
    
    </tr>
  );
}
