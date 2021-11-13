import { useState, useEffect } from "react";

const Route = ({ children, path }) => {
  const [pathname, setPathname] = useState(window.location.pathname);
  useEffect(() => {
    const onLinkChange = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener("popstate", onLinkChange);
  }, []);

  return pathname === path ? children : null;
};

export default Route;
