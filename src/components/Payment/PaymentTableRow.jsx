/* eslint-disable react/prop-types */
import moment from "moment";
import { Link } from "react-router-dom";

export default function PaymentTableRow({ data }) {
  const { totalpay, carData, transectionId, DropOffDate, PickUpDate } =
    data || {};
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="">
            <div className="w-16 h-14">
              <img src={carData?.gallery[0]} alt={carData?.brand} />
            </div>
          </div>
          <div>
            <div className="font-bold max-w-[150px]">
              {data?.carData?.brand}
            </div>
          </div>
        </div>
      </td>
      <td>
        {moment(PickUpDate).format("MMM Do")} to <br />
        {moment(DropOffDate).format(" MMM Do")}
        {moment(DropOffDate).format(" YYYY")}
      </td>
      <td>
        <div className="flex mt-2  ">
          <span className="bg-success text-white py-1  px-4 rounded-lg text-xs">
            {transectionId}
          </span>
        </div>
      </td>
      <td>${totalpay}</td>
      <td>
        {" "}
        <Link to={`/dashboard/review/${data?.carData?._id}`}>
          <button
            className="btn text-xs   btn-xs  "
          >
            Give a review
          </button>
        </Link>
      </td>
    </tr>
  );
}
