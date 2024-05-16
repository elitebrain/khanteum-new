import useSWRInfinite from "swr/infinite";

import { fetcher } from "@/utils/hooks/common";
import { API_URL, VIDEO_LIMIT } from "@/utils/constant";

const useMoreVideoList = ({ category_level2_no }) => {
  const { data, mutate, size, setSize, isLoading } = useSWRInfinite(
    (index) =>
      `${API_URL}/main/videos/${category_level2_no}?page=${
        index + 1
      }&limit=${VIDEO_LIMIT}`,
    fetcher,
    { revalidateFirstPage: false }
  );
  return {
    data,
    mutate,
    size,
    setSize,
    isLoading,
  };
};

export default useMoreVideoList;
