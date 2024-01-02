/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import "../../Styles/CarDetailsCard.scss";

export default function CarDetailsCard({ data }) {
  return (
    <div className="card bg-red-300 text-white rounded-md  shadow-xl">
      <figure >
        <img className="h-64 w-full" src={data.gallery[0]} alt="image" />
      </figure>
      <div  className="card-body pt-12 relative ">
         <div style={{clipPath:"polygon(25% 0, 100% 0, 100% 100%, 45% 100%, 40% 80%, 10% 78%, 0 50%)"}}  className="absolute text-red-400 flex p-5 justify-end h-28 w-[60%] right-0 -top-14  bg-[#dfe4ea]">
           <div>
           <h2 className=" text-2xl font-semibold">${data.price}
           </h2>
           <p>/Per Day</p>
           </div>         
         </div>           
        <h2 className="card-title text-2xl">{ data.brand } { data.model }</h2>
        <div className="card-actions justify-center ">
        <Link to={`/car-details/${data._id}`}> <button style={{clipPath:"polygon(77% 0, 96% 13%, 100% 43%, 100% 100%, 0 100%, 0 20%, 63% 20%)"}} className="md:mt-6 md:btn-lg capitalize bg-[#dfe4ea]  text-red-400  btn border-none pt-3  rounded-none">View Details </button></Link>
        </div>
      </div>
    </div>
  );
}
