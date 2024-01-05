/* eslint-disable no-unused-vars */


import usePopularPost from "../../Hooks/usePopularPost";
import PopularpostCard from "./PopularpostCard";
import SmallLoading from "../shared/SmallLoading";
import SmallError from "../shared/SmallError";
export default function PopularPost() {
const {PopularPost,error,isError,isLoading,isSuccess} = usePopularPost();

  return (
    <>
      <div className=" bg-[#eff6fb]   w-full  feed-back mt-5">
        {/* <!-- this is  header --> */}
        <h4 className="sub-title w-full border-l-4 border-red-600 bg-black text-white px-5 py-3 text-xl font-bold ">Popular Posts</h4>
        {/* <!-- this is line --> */}
        {isLoading ? (
          <SmallLoading></SmallLoading>
        ) : isError ? (
          <SmallError></SmallError>
        ) : (
          PopularPost.data.Posts.map((ele) => {
            return <PopularpostCard data={ele} key={ele._id} />;
          })
        )}
      </div>
    </>
  );
}
