import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAxiosPublic from "./useAxoisPublic";



const useCars = (asc) => {

    const axiosPublic = useAxiosPublic();

    console.log(asc);


    const { data: cars = [], isLoading, refetch } = useQuery({
        queryKey: ['cars'],

        queryFn: async () => {

            const res = await axiosPublic.get(`/cars?sort=${asc}`)
            return res.data;
        }

    })



    return [cars, isLoading, refetch]
}

export default useCars;
