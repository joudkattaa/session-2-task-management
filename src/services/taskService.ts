
import type { Task } from "../types/task.js";

const tasks: Task[] = [];
let nextId = 1;

// Create a new task
export async function createTask(
  title: string,
  userId: number
): Promise<Task> {
  if (!title.trim()) {
    throw new Error("Task title cannot be empty");
  }

  const task: Task = {
    id: nextId++,
    title,
    completed: false,
    userId,
  };

  tasks.push(task);
  return task;
}

// Get all tasks
export async function getTasks(): Promise<Task[]> {
  return [...tasks];
}

// Get one task by ID
export async function getTaskById(id: number): Promise<Task> {
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    throw new Error(`Task ${id} not found`);
  }

  return task;
}

// Update a task
export async function updateTask(
  id: number,
  completed: boolean
): Promise<Task> {
  const task = await getTaskById(id);
  task.completed = completed;
  return task;
}

// Delete a task
export async function deleteTask(id: number): Promise<void> {
  const index = tasks.findIndex((item) => item.id === id);

  if (index === -1) {
    throw new Error(`Task ${id} not found`);
  }

  tasks.splice(index, 1);
}
