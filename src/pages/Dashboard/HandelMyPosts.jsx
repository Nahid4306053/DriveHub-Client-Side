/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import TableFoot from "../../components/shared/TableFoot";
import TableRow from "../../components/Dashboard/Posts/TableRow";
import SmallLoading from "../../components/shared/SmallLoading";
import SmallError from "../../components/shared/SmallError";
import useMyPosts from "../../Hooks/useMyPosts";
import RemovePost from "../../components/Dashboard/Posts/RemovePost";


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
              <th>Title</th>
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
                        { ele.status === "Approved" 
                        &&
                        <Link to={`../../post-details/${ele._id}`}>
                          <button
                            data-tip="View Full Info"
                            className="btn text-info tooltip btn-ghost btn-xs text-lg "
                          >
                            <i className="fa-solid fa-square-info"></i>
                          </button>
                        </Link>
                        }
                        <Link to={`/dashboard/edit-post/${ele._id}`}>
                          <button
                            data-tip="Edit The Post"
                            className="btn  tooltip btn-ghost btn-xs text-lg "
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </button>
                        </Link>
                        <RemovePost id={ele._id}></RemovePost>
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
