import services from "@/services";
import useSWR from "swr";

export default function usePosts() {
  const { data, isLoading, error } = useSWR(`/api/user`, services.swr.fetcher);

  return { user: data, isLoading, error };
}
