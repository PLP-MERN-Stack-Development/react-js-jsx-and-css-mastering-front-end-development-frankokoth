import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-2xl font-bold mb-4">Welcome to the React App</h1>
        <p className="text-gray-700 dark:text-gray-300">
          This is a simple React application demonstrating theming with
          light/dark modes, routing, and component-based architecture using
          Tailwind CSS.
        </p>
      </Card>
      <Card>
        <h2 className="text-xl font-semibold mb-3">Features</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Light and Dark Theme Toggle</li>
          <li>Responsive Design with Tailwind CSS</li>
          <li>Reusable Components</li>
          <li>Context API for State Management</li>
        </ul>
      </Card>
    </div>
  );
}