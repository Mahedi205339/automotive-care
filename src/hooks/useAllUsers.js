import useAxiosPublic from "./useAxoisPublic";
import { useQuery } from "@tanstack/react-query";

const useAllUsers = () => {

    const axiosPublic = useAxiosPublic();
    const { data: allUsers = [], isLoading, refetch } = useQuery({
        queryKey: ['cars'],

        queryFn: async () => {

            const res = await axiosPublic.get("/users")
            return res.data;
        }

    })

    return [allUsers, isLoading, refetch]
}

export default useAllUsers;