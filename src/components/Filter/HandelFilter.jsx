/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export default function HandelFilter({totaldata}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const [keywords,setkeyWords] = useState([]);

  useEffect(() => {
    if (search) {
      const keys = [];
      searchParams.forEach((value, key) => {
        if(key !== "maxPrice" && key !== "minPrice"){
          keys.push({key,value}) 
          setkeyWords(keys);
        }
      });
    }
  }, [search]);
  const deletefilterkeyword = (key,index) =>{
     setSearchParams(old=>{
      key === "brand"  ? ( old.delete(key),old.delete('model')) : old.delete(key);
      return old;
     })
     const newkeywords = [...keywords];
     newkeywords.splice(index,1);
     setkeyWords(newkeywords);
  }
  return (
    <div className="bg-base-300 p-5 flex items-center gap-10">
      <h1 className="text-xl">Total Result: {totaldata}</h1>
      <div>
        {keywords.length > 0 &&
        <ul className="filter_item flex gap-5">
              { keywords.map((ele,ind)=>{
                return <li className="capitalize bg-base-100 text-sm py-1 rounded-lg px-2 " key={ind}>
                  <i onClick={()=>deletefilterkeyword(ele.key,ind)} className="fa-solid mr-1 cursor-pointer text-red-600 fa-circle-xmark"></i>
                  <strong>{ele.key}: </strong>{ele.value === "-1" && "new car" || ele.value === "1" && "Old car" || ele.value}
                </li>
              })
                 
              }
        </ul>}
      </div>
    </div>
  );
}
