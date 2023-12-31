import { useQuery } from '@tanstack/react-query';
import useAxiosSecureV1 from '../Hooks/useAxiosSecureV1'

export default function useUserDatas(page,limit) {
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosSecureV1();
    const fetchUserDatas = async () => {
     const res = await axios.get(`/user/all?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
    const { data: UserDatas, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["UserDatas", page,limit],
       queryFn: () => fetchUserDatas(),
     });   

  return {UserDatas, isLoading, isError, error , isSuccess}
}
