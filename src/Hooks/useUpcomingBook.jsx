import { useQuery } from '@tanstack/react-query';

import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useUpcomingBook(page,limit) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosPublicV1();
    const fetchUpcomingBook = async () => {
     const res = await axios.get(`/car/upcoming-booking?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: UpcomingBook, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["UpcomingBook", page,limit],
       queryFn: () => fetchUpcomingBook(),
     });  

  return {UpcomingBook, isLoading, isError, error , isSuccess}
  
}
