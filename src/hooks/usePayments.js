import useAxiosPublic from "./useAxoisPublic";
import { useQuery } from "@tanstack/react-query";

const usePayments = () => {

    const axiosPublic = useAxiosPublic();

    // console.log(email);


    const { data: payments = [], isLoading, refetch } = useQuery({
        queryKey: ['payments'],

        queryFn: async () => {

            const res = await axiosPublic.get('/payments')
            return res.data;
        }

    })

    return [payments, isLoading, refetch]
}

export default usePayments;