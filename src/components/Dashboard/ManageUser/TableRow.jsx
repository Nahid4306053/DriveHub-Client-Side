/* eslint-disable react/prop-types */

import HandelRole from "./HandelRole";

export default function TableRow({data}) {
  return (
    <tr>
 <td>
      <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask  mask-squircle w-12 h-12">
              <img
                src={data.photoURL}
                alt={data.displayName}
              />
            </div>
          </div>
        </div>
      </td>
      <td>
      {data.displayName}
        <br />
        <div className="flex mt-2 m">
        <p className="bg-white flex text-xs rounded-lg p-1">{data.email}</p>
        </div>
      </td>
      <td><div className={`badge capitalize ${data.role === "admin" ?  "badge-secondary font-bold" :   data.role === "tour guider" ? "badge-accent text-white" : "" }`}>{data.role}</div></td>
       <HandelRole role={data.role} id={data._id}></HandelRole>
    </tr>
  );
}
