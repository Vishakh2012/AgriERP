import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidePanelButtonContent {
  text: string;
  url: string;
  icon?: ReactNode;
}

const SidePanelButton: React.FC<SidePanelButtonContent> = (props: SidePanelButtonContent) => {
  const location = useLocation();
  const isActive = location.pathname === props.url;

  return (
    <div className={`flex items-center mb-6 relative pl-4`}>
      <div className={`w-1.5 h-full bg-blue-500 absolute left-0 top-0 ${isActive ? "" : "hidden"} rounded-r-md`}></div>
      {props.icon && (
        <span className={`mr-3 mt-1 ${isActive ? "text-blue-500" : ""}`}>
          <Link to={props.url}>{props.icon}</Link>
        </span>
      )}
      {/* Render the text only for large screens */}
      <Link
        to={props.url}
        className={`block text-black hover:text-gray-800 ${isActive ? "text-blue-500" : ""} ${props.icon ? "hidden md:block" : ""}`}
      >
        {props.text}
      </Link>
    </div>
  );
};

export default SidePanelButton;

