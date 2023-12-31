import React from "react";
import { useMood } from "../../Context/TemplateMoodContext";

export default function Pagenation({ page, setpage, totalData, colSpan }) {
  const totalpage = Math.ceil(totalData / 8);
  const { Darkmood } = useMood();
  return (
    <div className="flex justify-center">
      <div
        className={`join border ${
          Darkmood ? "border-base-200" : "border-red-100"
        } `}
      >
        <button
          onClick={() => setpage((old) => old - 1)}
          disabled={page < 2}
          className={`join-item btn    hover:bg-yellow-400  hover:text-white ${
            Darkmood ? "bg-base-300" : "bg-red-100"
          }  `}
        >
          <i className="fa-solid fa-angles-left"></i>
        </button>
        {[...Array(totalpage).keys()].map((ele) => {
          return (
            <button
              key={ele * 3}
              onClick={() => setpage(ele + 1)}
              className={`join-item  hover:bg-yellow-400  hover:text-white   ${
                page === ele + 1
                  ? "bg-yellow-400  text-white"
                  : Darkmood
                  ? "bg-base-300"
                  : "bg-red-100"
              }  btn `}
            >
              {ele + 1}
            </button>
          );
        })}
        <button
          onClick={() => setpage((old) => old + 1)}
          disabled={page === totalpage}
          className={`join-item btn    hover:bg-yellow-400  hover:text-white   ${
            Darkmood ? "bg-base-300" : "bg-red-100"
          }`}
        >
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
}
