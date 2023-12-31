import { useQuery } from '@tanstack/react-query';

import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useTodayTask(page,limit) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosPublicV1();
    const fetchTodayTask = async () => {
     const res = await axios.get(`/task/today?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: TodayTask, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["TodayTask", page,limit],
       queryFn: () => fetchTodayTask(),
     });  

  return {TodayTask, isLoading, isError, error , isSuccess}
}
