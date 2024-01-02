import { useQuery } from '@tanstack/react-query';
import useAxiosSecureV1 from './useAxiosSecureV1'


export default function useFullCarDetails(id) {            
  const axios = useAxiosSecureV1();
    const fetchFullCarDetails = async () => {
     const res = await axios.get(`car/singel/${id}`);
      return res;
     };
    const { data: FullCarDetails, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: [`FullCarDetails`, id],
       queryFn: () => fetchFullCarDetails(),
       enabled : id ? true : false
     });    

  return {FullCarDetails, isLoading, isError, error , isSuccess}
}
