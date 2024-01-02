import { useQuery } from '@tanstack/react-query';

import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useBookings(page,limit) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosPublicV1();
    const fetchBookings = async () => {
     const res = await axios.get(`/car/bookings?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: Bookings, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["Bookings", page,limit],
       queryFn: () => fetchBookings(),
     });  

  return {Bookings, isLoading, isError, error , isSuccess}
  
}
