import utils from "@/library/utils";
import useSWR from "swr";

export default function usePosts() {
  const { data, isLoading, error } = useSWR(`/api/user`, (url) =>
    utils.functions.fetcher([url])
  );

  return { user: data, isLoading, error };
}
