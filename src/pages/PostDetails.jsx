/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useSingelPost from "../Hooks/useSingelPost";
import SmallLoading from "../components/shared/SmallLoading";
import SmallError from "../components/shared/SmallError";
import moment from "moment";
import useAxiosSecureV1 from "../Hooks/useAxiosSecureV1";
import { useEffect } from "react";
import Comment_form from "../components/PostDetails/Comment_form";
import CommentList from "../components/PostDetails/CommentList";
export default function PostDetails() {
  const { id } = useParams();
  const Axios = useAxiosSecureV1()
  const { Post, error, isError, isLoading, isSuccess } = useSingelPost(id);
  useEffect(() => {
    Axios.put(`/post/views/${id}`);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="w-full flex justify-center">
          <SmallLoading />
        </div>
      ) : isError ? (
        <div className="w-full flex justify-center">
          <SmallError> </SmallError>
        </div>
      ) : (
        <div>
          <div className="post-details">
            <h1 className="text-3xl pb-10 font-semibold title">
              {Post.data.title}
            </h1>
            <div className="banner rounded-sm overflow-hidden">
              <img
                src={Post.data.banner}
                className="w-full max-h-[500px] object-cover"
                alt=""
              />
              <div className="infos bg-base-300  gap-5 flex flex-wrap justify-between items-center py-2 px-4">
                <div className="Author flex gap-2 items-center">
                  <img
                    className="h-10 w-10 rounded-full border border-black p-[2px]"
                    src={Post.data.author?.photoURL}
                    alt="Author"
                  />
                  <p className="Name text-lg font-semibold">
                    {Post.data.author?.displayName}
                  </p>
                </div>
                <div className="views font-semibold">
                  <i className="fa-regular mr-2 fa-calendar-days"></i>
                  {moment(Post.data.createdAt).format("MMM Do YY")}
                </div>
                <div className="views font-semibold">
                  <i className="fa-solid mr-1 fa-eye"></i> Views: 
                  {Post.data.views.length > 9 ? " "+Post.data.views.length : " 0"+Post.data.views.length }
                </div>
                <div className="views font-semibold">
                  <i className="fa-solid fa-comment"></i> Comments:
                  {Post.data.comments > 9 ? " "+Post.data.comments : " 0"+Post.data.comments}
                </div>
              </div>
            </div>
            <div className="mt-5">
             <p className="text-lg leading-9">{Post.data.description}</p>
            </div>
          </div>
          <div className="my-8">
            <CommentList  id={Post.data._id}></CommentList>
          </div>
          <div>
            <Comment_form post_id={Post.data._id} ></Comment_form>
          </div>
        </div>
      )}
    </div>
  );
}
