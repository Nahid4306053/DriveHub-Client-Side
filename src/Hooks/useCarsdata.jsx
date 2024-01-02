import { useQuery } from '@tanstack/react-query';

import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useCarsData(page,limit) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosPublicV1();
    const fetchCarsData = async () => {
     const res = await axios.get(`/car/all?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: CarsData, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["CarsData", page,limit],
       queryFn: () => fetchCarsData(),
     });  

  return {CarsData, isLoading, isError, error , isSuccess}
  
}
