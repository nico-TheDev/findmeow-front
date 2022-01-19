import api from "api";
import useSWR from "swr";

const fetcher = (url: string) => api.get(url).then((res) => res.data.user);

const usePostOwner = (userId: string) => {
    const { data, error } = useSWR(`/user/${userId}`, fetcher);

    return {
        owner: data,
        isError: error,
        isLoading: !data && !error,
    };
};

export default usePostOwner;
