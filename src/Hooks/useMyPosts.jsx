import { useQuery } from '@tanstack/react-query';

import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useMyPosts(page,limit) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosPublicV1();
    const fetchMyPosts = async () => {
     const res = await axios.get(`/post/my-posts?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: MyPosts, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["MyPosts", page,limit],
       queryFn: () => fetchMyPosts(),
     });  

  return {MyPosts, isLoading, isError, error , isSuccess}
  
}
