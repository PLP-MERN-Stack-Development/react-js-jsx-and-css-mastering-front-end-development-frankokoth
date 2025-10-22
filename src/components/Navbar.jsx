import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center text-xl font-bold text-gray-900 dark:text-white"
            >
              React APP
            </Link>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="secondary" size="small" onClick={toggleTheme}>
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}