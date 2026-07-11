"use client";
import { useEffect } from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function HeaderClient() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // Disable browser's native scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Force scroll to top on every route change or reload, EXCEPT if there's a hash in the URL (like #portfolio)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <Header hideOnTop={isHome} />;
} 