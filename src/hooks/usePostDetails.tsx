import api from "api";
import useSWR from "swr";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const usePostDetails = (postID: string | undefined) => {
    const { data, error } = useSWR(`/post/${postID}`, fetcher);

    return {
        details: data,
        isError: error,
        isLoading: !data && !error,
    };
};

export default usePostDetails;
