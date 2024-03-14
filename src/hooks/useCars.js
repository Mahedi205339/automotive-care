import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAxiosPublic from "./useAxoisPublic";


const useCars = () => {

    const axiosPublic = useAxiosPublic();


    const { data: cars = [], error, refetch, isLoading } = useQuery({
        queryKey: ['cars'],

        queryFn: async () => {

            const res = await axiosPublic.get('/cars')
            return res.data;
        }

    })
    console.log((isLoading));

    return [cars, isLoading, error , refetch]
}

export default useCars;
