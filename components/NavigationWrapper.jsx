// app/components/ClientWrapper.tsx
"use client";

import { useState, createContext, useContext } from "react";

const SidebarContext = createContext();

export function useSidebar() {
  return useContext(SidebarContext);
}

export default function ClientWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(false);

    const [expanded, setExpanded] = useState({
  services: false,
  industries: false,
  blog: false,
});

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, expanded, toggleExpand }}>
      {children}
    </SidebarContext.Provider>
  );
}