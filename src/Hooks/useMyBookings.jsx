import { useQuery } from '@tanstack/react-query';

import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useMyBookings(page,limit) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosPublicV1();
    const fetchMyBookings = async () => {
     const res = await axios.get(`/car/my-booking?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: MyBookings, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["MyBookings", page,limit],
       queryFn: () => fetchMyBookings(),
     });  

  return {MyBookings, isLoading, isError, error , isSuccess}
  
}
