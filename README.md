# Async Task Management Backend with TypeScript

A simple task management backend built with Node.js, TypeScript, and ECMAScript modules (ESM).

This project extends the original TypeScript backend starter from Session 2 of the Core Istanbul Backend Course.

## Features

- Define Task and User interfaces using TypeScript.
- Create new tasks with a title and user ID.
- Retrieve all tasks or find a task by ID.
- Update a task's completion status.
- Delete existing tasks.
- Use Promises and async/await for task operations.
- Handle success and failure cases using try/catch.
- Validate task titles and handle missing tasks.
- Enable strict TypeScript type checking.

## Project Structure

```text
typescript-backend-starter/
├── src/
│   ├── app.ts
│   ├── types/
│   │   ├── task.ts
│   │   └── user.ts
│   └── services/
│       └── taskService.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Setup

Install the dependencies:

```bash
npm install
```

## Commands

```bash
npm run dev
npm run typecheck
npm run build
npm start
```

- `npm run dev`: Runs `src/app.ts` directly with tsx.
- `npm run typecheck`: Checks TypeScript types without generating output files.
- `npm run build`: Compiles TypeScript files from `src/` into JavaScript in `dist/`.
- `npm start`: Runs the compiled `dist/app.js` file using Node.js.

## Task Operations

| Function | Description |
|---|---|
| `createTask()` | Creates a new task |
| `getTasks()` | Retrieves all tasks |
| `getTaskById()` | Retrieves a task by ID |
| `updateTask()` | Updates a task's completion status |
| `deleteTask()` | Deletes an existing task |

All task operations are implemented as async functions returning Promises.

## Error Handling

The application uses try/catch to handle expected errors.

Examples:

- An empty task title produces `Task title cannot be empty`.
- Requesting a missing task produces `Task 999 not found`.

The application demonstrates both successful operations and expected failure scenarios.

## Data Storage

Tasks are stored in an in-memory array. Data is not persisted after the application exits.

This project demonstrates backend logic and TypeScript fundamentals. It does not implement an HTTP server or a database.

## TypeScript Configuration

The project uses:

- ECMAScript modules (ESM).
- NodeNext module resolution.
- ES2022 target.
- Strict type checking (`strict: true`).
- Node.js type definitions.

## AI Usage

AI assistance was used to:

- Plan the Task and User interfaces.
- Implement asynchronous task management operations.
- Refactor and organize TypeScript code.
- Add success and failure examples.
- Explain TypeScript errors and suggest corrections.
- Improve project documentation.

The generated code was reviewed during development, and the application was executed to verify its behavior.

## Verification

The application was run using `npm start`, and the following behaviors were observed:

- Two tasks were created successfully.
- Tasks were retrieved by list and ID.
- One task was updated to completed.
- One task was deleted.
- An empty title was rejected.
- A nonexistent task produced an expected error.
- The final task list contained the updated task.

Type checking and build should also pass before final submission.

## Original Starter

Based on the Session 2 TypeScript backend starter from the Core Istanbul Backend Course.

https://github.com/yassin-nashar/Core-Istanbul-Backend-Course/tree/Session-2/typescript-backend-starter
