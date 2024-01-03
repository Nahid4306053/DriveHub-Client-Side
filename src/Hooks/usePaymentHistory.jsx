import { useQuery } from '@tanstack/react-query';

import useAxiosSecureV1 from './useAxiosSecureV1';

export default function useMyPaymentHistory(page,limit) {
                 
  const Tpage = page || 1 ;                  
  const Tlimit = limit || 10 ;                  
  const axios = useAxiosSecureV1();
    const fetchMyPaymentHistory = async () => {
     const res = await axios.get(`/payment/payment-history?page=${Tpage}&limit=${Tlimit}`);
      return res;
     };
     const { data: MyPaymentHistory, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: ["MyPaymentHistory", page,limit],
       queryFn: () => fetchMyPaymentHistory(),
     });  
 
  return {MyPaymentHistory, isLoading, isError, error , isSuccess}
}
