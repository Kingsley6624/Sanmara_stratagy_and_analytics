"use client";
import { useEffect } from "react";

export default function ScrollToTop({ children }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return <>{children}</>;
}