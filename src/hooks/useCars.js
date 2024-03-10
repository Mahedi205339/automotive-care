import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAxiosPublic from "./useAxoisPublic";

const useCars = () => {
    const axiosPublic = useAxiosPublic();

    const { data: cars = [], refetch } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await axiosPublic.get('cars')
            return res.data;
        }
    })


    return [cars, refetch]
}

export default useCars;
