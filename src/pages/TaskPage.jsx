import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Card from "../components/Card";
import Button from "../components/Button";

export default function TaskPage() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = React.useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          className="flex-grow border border-gray-300 dark:border-gray-700 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <Button onClick={addTask} className="rounded-l-none">
          Add Task
        </Button>
      </div>
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No tasks available.</p>
        ) : (
          tasks.map((task) => (
            <Card
              key={task.id}
              className={`flex items-center justify-between ${
                task.completed ? "bg-green-100 dark:bg-green-900" : ""
              }`}
            >
              <div
                className={`flex-grow cursor-pointer ${
                  task.completed ? "line-through text-gray-500 dark:text-gray-400" : ""
                }`}
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.text}
              </div>
              <Button
                variant="danger"
                size="small"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}   