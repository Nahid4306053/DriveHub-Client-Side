import { useQuery } from '@tanstack/react-query';

import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useUserPosts(page,limit) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosPublicV1();
    const fetchUserPosts = async () => {
     const res = await axios.get(`/post/all?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: UserPosts, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["UserPosts", page,limit],
       queryFn: () => fetchUserPosts(),
     });  

  return {UserPosts, isLoading, isError, error , isSuccess}
  
}
