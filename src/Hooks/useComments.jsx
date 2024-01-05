import { useQuery } from '@tanstack/react-query';
import useAxiosPublicV1 from './useAxiosSecureV1';

export default function useComments(id) {                  
  const axios = useAxiosPublicV1();
    const fetchComments = async () => {
     const res = await axios.get(`/comment/${id}`);
      return res;
     }; 
    const { data: Comments, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["Comments" , id],
       queryFn: () => fetchComments(),
     });  

  return {Comments, isLoading, isError, error , isSuccess}
}
