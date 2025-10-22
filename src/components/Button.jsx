import React from "react";

const VARIANTS = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

const SIZES = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
}

export default function Button({ variant = "primary", size = "medium", children, ...props }) {
  const variantClasses = VARIANTS[variant] || VARIANTS.primary;
  const sizeClasses = SIZES[size] || SIZES.medium;

  return (
    <button
      className={`rounded ${variantClasses} ${sizeClasses} focus:outline-none focus:ring-2 focus:ring-offset-2`}
      {...props}
    >
      {children}
    </button>
  );
}