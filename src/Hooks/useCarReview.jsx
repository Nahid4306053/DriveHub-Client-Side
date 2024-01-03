import { useQuery } from '@tanstack/react-query';

import useAxiosSecureV1 from '../Hooks/useAxiosSecureV1'

export default function useCarReview(id) {
              
  const axios = useAxiosSecureV1();
    const fetchCarReview = async () => {
     const res = await axios.get(`/review/singel/${id}`);
      return res;
     };
    const { data: CarReview, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["CarReview", id],
       queryFn: () => fetchCarReview(),
     });    

  return {CarReview, isLoading, isError, error , isSuccess}
}
