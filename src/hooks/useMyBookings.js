import useAxiosPublic from "./useAxoisPublic";
import { useQuery } from "@tanstack/react-query";

const useMyBookings = (email) => {

    const axiosPublic = useAxiosPublic();

    // console.log(email);


    const { data: myBookings = [], isLoading, refetch } = useQuery({
        queryKey: ['cars'],

        queryFn: async () => {

            const res = await axiosPublic.get(`/bookings/${email}`)
            return res.data;
        }

    })

    return [myBookings, isLoading, refetch]
}

export default useMyBookings;
