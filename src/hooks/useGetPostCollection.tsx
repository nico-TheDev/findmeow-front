import api from "api";
import useSWR from "swr";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const useGetPostCollection = (userID: string) => {
    const { data, error } = useSWR(`/post/user/${userID}`, fetcher);

    return {
        data,
        error,
        isLoading: !data && !error,
    };
};

export default useGetPostCollection;
