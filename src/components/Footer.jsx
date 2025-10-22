import React from "react";
import ReactDOM from "react-dom/client";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} React APP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}