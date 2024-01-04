/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import TableFoot from "../../components/shared/TableFoot";
import TableRow from "../../components/shared/TableRow";
import SmallLoading from "../../components/shared/SmallLoading";
import SmallError from "../../components/shared/SmallError";
import useMyPosts from "../../Hooks/useMyPosts";
import ChangeStatus from '../../components/Dashboard/ManageCar/ChangeStatus'
import { useMutation } from "@tanstack/react-query";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
export default function HandelMyPosts() {
  const [page, setpage] = useState(1);
  const { MyPosts, error, isError, isLoading, isSuccess } = useMyPosts(page,8);
 
  return (

    <div className="Posts p-5">
      <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center bg-red-600 clipshape2 shadow-lg">
          Manage Posts
        </h1>
      </div>
      <div className="overflow-x-auto custom-scrollbar table-pin-rows lg:h-[550px] mt-12  bg- md:h-[600px] h-[400px]">
        <table className="table  border-white ">
          <thead className="h-14  text-sm">
            <tr>
              <th>Banner</th>
              <th>title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError></SmallError>
            </div>
          ) : (
            <tbody>
              {MyPosts.data.Posts.length > 0 &&
                MyPosts.data.Posts.map((ele) => {
                  return (
                    <TableRow key={ele._id} data={ele}>
                      <td>
                        <Link to={`/post-details/${ele._id}`}>
                          <button
                            data-tip="View Full Info"
                            className="btn text-red-600 tooltip btn-ghost btn-xs text-lg "
                          >
                            <i className="fa-solid fa-square-info"></i>
                          </button>
                        </Link>
                       
                      </td>
                    </TableRow>
                  );
                })}
            </tbody>
          )}
          {MyPosts?.data?.totalData > 0 && (
            <TableFoot
              page={page}
              setpage={setpage}
              totalData={MyPosts?.data?.totalData}
            ></TableFoot>
          )}
        </table>
      </div>
    </div>
  );
}
