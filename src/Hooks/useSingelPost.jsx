import { useQuery } from '@tanstack/react-query';
import useAxiosPublicV1 from '../Hooks/useAxiosSecureV1';

export default function useSingelPost(id) {                  
  const axios = useAxiosPublicV1();
    const fetchPost = async () => {
     const res = await axios.get(`/post/singel/${id}`);
      return res;
     }; 
    const { data: Post, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["SingelPost" , id],
       queryFn: () => fetchPost(),
     });  

     
  return {Post, isLoading, isError, error , isSuccess}
}
