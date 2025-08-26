"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingIndicator() {
  const pathname = usePathname(); // changes when route changes
  const [loading, setLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== currentPath) {
      setLoading(true);
      setCurrentPath(pathname);

      // simulate loading delay
      const timer = setTimeout(() => setLoading(false), 300); // optional
      return () => clearTimeout(timer);
    }
  }, [pathname, currentPath]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-green-500 z-50 animate-pulse" />
  );
}
