import React from "react";

const Link = ({ children, href, className, onClick }) => {
  const onLinkClick = (e) => {
    e.preventDefault();
    onClick();
    window.history.pushState({}, "", `${href}`);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onLinkClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
