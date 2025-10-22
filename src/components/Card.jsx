import React from "react";

export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}