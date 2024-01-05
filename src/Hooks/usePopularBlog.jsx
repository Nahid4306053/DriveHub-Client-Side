import { useQuery } from '@tanstack/react-query';

import useAxios from './DataFeachting/useAxios';

export default function usePopularBlog() {
                  
  const axios = useAxios();
    const fetchPopularBlog = async () => {
     const res = await axios.get(`/blog/popular`);
      return res;
     };
    const { data: PopularBlog, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["PopularBlog"],
       queryFn: () => fetchPopularBlog(),
     });  

  return {PopularBlog, isLoading, isError, error , isSuccess}
}
