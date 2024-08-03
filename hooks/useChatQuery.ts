import { useSocket } from "@/components/providers/SocketProvider";
import { useInfiniteQuery } from "@tanstack/react-query";
import { stat } from "fs";

interface ChatQueryProps {
  queryKey: string;
  apiUrl: string;
  paramKey: "channelId" | "conversationId";
  paramValue: string;
}

export const useChatQuery = ({
  queryKey,
  apiUrl,
  paramKey,
  paramValue,
}: ChatQueryProps) => {
  const { isConnected } = useSocket();

  const fetchMessages = async (pageParam: string | null) => {
    const url = new URL(apiUrl, window.location.origin);
    url.searchParams.set("cursor", pageParam?.toString() ?? "");
    url.searchParams.set(paramKey, paramValue);

    const res = await fetch(url);
    return res.json();
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      initialPageParam: null,
      queryKey: [queryKey],
      queryFn: ({ pageParam }) => fetchMessages(pageParam),
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
      refetchInterval: isConnected ? false : 1000,
    });

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, status };
};
