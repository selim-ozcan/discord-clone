"use client";

import { Video, VideoOff } from "lucide-react";
import ActionTooltip from "../ActionTooltip";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ChatVideoButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isVideo = searchParams.get("video");

  const onClick = () => {
    const url = new URL(pathname, window.location.origin);
    if (!isVideo) url.searchParams.set("video", "true");

    router.push(url.toString());
  };

  const Icon = isVideo ? VideoOff : Video;
  const tooltipLabel = isVideo ? "End video call" : "Start video call";

  return (
    <ActionTooltip side="bottom" label={tooltipLabel}>
      <button onClick={onClick} className="hover:opacity-75 transition mr-4">
        <Icon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
      </button>
    </ActionTooltip>
  );
};

export default ChatVideoButton;
