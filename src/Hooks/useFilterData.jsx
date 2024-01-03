import { useQuery } from '@tanstack/react-query';

import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useFilterData(page,limit,query) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 9 ;                  
  const axios = useAxiosPublicV1();
    const fetchFilterData = async () => {
     const res = await axios.get(`/car/filter${query}&page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: FilterData, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["FilterData", page,limit ,query],
       queryFn: () => fetchFilterData(),
     });  

  return {FilterData, isLoading, isError, error , isSuccess}
  
}
