import { useQuery } from '@tanstack/react-query';

import useAxios from './useAxiosSecureV1';

export default function usePopularPost() {
                  
  const axios = useAxios();
    const fetchPopularPost = async () => {
     const res = await axios.get(`/post/popular`);
      return res;
     };
    const { data: PopularPost, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["PopularPost"],
       queryFn: () => fetchPopularPost(),
     });  

  return {PopularPost, isLoading, isError, error , isSuccess}
}
 