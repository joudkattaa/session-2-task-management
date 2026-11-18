
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "./services/taskService.js";

async function main(): Promise<void> {
  console.log("=== Task Management Backend ===");

  // 1. Create tasks
  try {
    console.log("\n1. Creating tasks");

    const task1 = await createTask("Learn TypeScript", 1);
    const task2 = await createTask("Practice async/await", 1);

    console.log("Created:", task1);
    console.log("Created:", task2);
  } catch (error) {
    console.error("Create failed:", error);
  }

  // 2. Get all tasks
  console.log("\n2. Getting all tasks");
  console.log(await getTasks());

  // 3. Get one task
  try {
    console.log("\n3. Getting task by ID");
    console.log(await getTaskById(1));
  } catch (error) {
    console.error("Get failed:", error);
  }

  // 4. Update a task
  try {
    console.log("\n4. Updating task");
    const updatedTask = await updateTask(1, true);
    console.log("Updated:", updatedTask);
  } catch (error) {
    console.error("Update failed:", error);
  }

  // 5. Delete a task
  try {
    console.log("\n5. Deleting task");
    await deleteTask(2);
    console.log("Task 2 deleted successfully");
  } catch (error) {
    console.error("Delete failed:", error);
  }

  // 6. Test failure cases
  console.log("\n6. Testing errors");

  try {
    await createTask("", 1);
  } catch (error) {
    console.error("Expected error:", error);
  }

  try {
    await getTaskById(999);
  } catch (error) {
    console.error("Expected error:", error);
  }

  // 7. Final task list
  console.log("\n7. Final tasks");
  console.log(await getTasks());
}

main().catch((error: unknown) => {
  console.error("Unexpected application error:", error);
  process.exitCode = 1;
});
