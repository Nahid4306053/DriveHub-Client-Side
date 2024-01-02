/* eslint-disable react/prop-types */

import moment from "moment";


export default function TableRow({ data,children }) {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="">
            <div className="w-16 h-14">
              <img src={data?.carData?.gallery[0]} alt={data?.carData?.brand} />
            </div>
          </div>
          <div>
            <div className="font-bold max-w-[150px]">{data?.carData?.brand}</div>
          </div>
        </div>
      </td>
      <td>
        {moment(data?.PickUpDate).format('MMM Do')} to  <br />         
        {moment(data?.DropOffDate).format(' MMM Do')}
        {moment(data?.DropOffDate).format(' YYYY')}
      </td>
       <td>${data.totalPrice}</td>
       <td><div className="badge">{data?.carData.availabilityStatus}</div></td>
       <td><div className="badge badge-secondary">{data?.status}</div></td>
      
        {children}
    
    </tr>
  );
}
