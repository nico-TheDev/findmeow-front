import api from "api";
import useSWR from "swr";

const fetcher = (url: string) => api.get(url).then((res) => res.data.user);

const useGetUser = (userId: string) => {
    const { data, error } = useSWR(`/user/${userId}`, fetcher);

    return {
        user: data,
        isError: error,
        isLoading: !data && !error,
    };
};

export default useGetUser;
