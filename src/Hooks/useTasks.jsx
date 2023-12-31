import { useQuery } from '@tanstack/react-query';

import useAxiosPublicV1 from './useAxiosPublicV1';

export default function useTasks(page,limit) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosPublicV1();
    const fetchTasks = async () => {
     const res = await axios.get(`/task/all?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: Tasks, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["Tasks", page,limit],
       queryFn: () => fetchTasks(),
     });  

  return {Tasks, isLoading, isError, error , isSuccess}
}
