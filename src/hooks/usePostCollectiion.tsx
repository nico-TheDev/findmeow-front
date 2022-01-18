import api from "api";
import useSWR from "swr";

const fetcher = (url: string) => api.get(url).then((res) => res.data.posts);

const usePostCollection = (endpoint: string) => {
    const { data, error } = useSWR(endpoint, fetcher);

    return {
        collection: data,
        isError: error,
        isLoading: !data && !error,
    };
};

export default usePostCollection;
