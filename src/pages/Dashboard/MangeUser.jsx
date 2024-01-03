/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useUserDatas from "../../Hooks/useUserDatas";
import TableRow from "../../components/Dashboard/ManageUser/TableRow";
import SmallError from "../../components/shared/SmallError";
import SmallLoading from "../../components/shared/SmallLoading";
import TableFoot from "../../components/shared/TableFoot";

export default function MangeUser() {
  const [page, setpage] = useState(1);
  const { UserDatas, error, isError, isLoading, isSuccess } = useUserDatas(
    page,
    8
  );

  return (
    <div className="UserDatas p-5">
      <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center  bg-red-600  clipshape2 shadow-lg">
          Manage User
        </h1>
      </div>
      <div className="overflow-x-auto custom-scrollbar table-pin-rows lg:h-[550px] mt-12  bg- md:h-[600px] h-[400px]">
        <table className="table  border-white ">
          <thead className="h-14  text-sm">
            <tr>
              <th>Avatar</th>
              <th>Details</th>
              <th>Role</th>
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
              {UserDatas.data.users.length > 0 &&
                UserDatas.data.users.map((ele) => {
                  return <TableRow key={ele._id} data={ele}></TableRow>;
                })}
            </tbody>
          )}
          {UserDatas?.data?.totalData && (
            <TableFoot
              page={page}
              setpage={setpage}
              totalData={UserDatas?.data?.totalData}
            ></TableFoot>
          )}
        </table>
      </div>
    </div>
  );
}
