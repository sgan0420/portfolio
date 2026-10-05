"use client";

import { useEffect, useRef, type ComponentProps } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { isConstrainedConnection } from "@/lib/performance";

// Warm a route when someone hovers or focuses its link, rather than downloading
// every visible destination during the current page's initial load.
export default function IntentLink(props: ComponentProps<typeof Link>) {
  const router = useRouter();
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const warmed = useRef<string | null>(null);
  const href = typeof props.href === "string" ? props.href : null;

  const clear = () => {
    clearTimeout(timer.current);
    timer.current = undefined;
  };

  const warm = () => {
    if (
      !href?.startsWith("/") ||
      warmed.current === href ||
      isConstrainedConnection()
    )
      return;
    warmed.current = href;
    router.prefetch(href);
  };

  useEffect(() => clear, []);

  return (
    <Link
      {...props}
      prefetch={false}
      onPointerEnter={(event) => {
        props.onPointerEnter?.(event);
        if (event.pointerType === "mouse") {
          clear();
          timer.current = setTimeout(warm, 120);
        }
      }}
      onPointerLeave={(event) => {
        props.onPointerLeave?.(event);
        clear();
      }}
      onFocus={(event) => {
        props.onFocus?.(event);
        clear();
        warm();
      }}
    />
  );
}
