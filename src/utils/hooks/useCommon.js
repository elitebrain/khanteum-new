import useSWR from "swr";

import { fetcher } from "@/utils/hooks/common";
import { API_URL } from "@/utils/constant";

/**
 * commonApi 요청 hooks
 * @param {string} endPoint string
 */
const useCommon = (endPoint) => {
  const { data, error, isLoading, mutate } = useSWR(
    `${API_URL}/common${endPoint}`,
    fetcher,
    { revalidateOnFocus: false }
  );
  return { data, error, isLoading, mutate };
};

export default useCommon;
