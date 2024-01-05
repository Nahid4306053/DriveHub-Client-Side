import { useQuery } from '@tanstack/react-query';

import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useApprovePosts(page,limit) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosPublicV1();
    const fetchApprovePosts = async () => {
     const res = await axios.get(`/post/approved?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: ApprovePosts, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["ApprovePosts", page,limit],
       queryFn: () => fetchApprovePosts(),
     });  

  return {ApprovePosts, isLoading, isError, error , isSuccess}
  
}
