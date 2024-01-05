/* eslint-disable no-unused-vars */

import "../scss/Popularpost.scss";
import usePopularBlog from "../Hooks/usePopularBlog";
import PopularpostCard from "./PopularpostCard";
import ErrorComponent from "./Shared/ErrrorComponet";
import LoadingComponet from "./Shared/LoadingComponent";
export default function PopularPost() {
const {PopularBlog,error,isError,isLoading,isSuccess} = usePopularBlog();

  return (
    <>
      <div className=" bg-[#eff6fb]  pt-10 w-full  feed-back mt-5">
        {/* <!-- this is  header --> */}
        <h4 className="sub-title w-full">Popular Posts</h4>
        {/* <!-- this is line --> */}
        {isLoading ? (
          <LoadingComponet></LoadingComponet>
        ) : isError ? (
          <ErrorComponent></ErrorComponent>
        ) : (
          PopularBlog.data.Blogs.map((ele) => {
            return <PopularpostCard data={ele} key={ele._id} />;
          })
        )}
      </div>
    </>
  );
}
