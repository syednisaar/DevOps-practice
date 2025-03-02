// Importing necessary modules
import * as readline from "readline";

// Task interface
interface Task {
    id: number;
    description: string;
    completed: boolean;
}

// Task list
let tasks: Task[] = [];
let taskId = 1;

// Creating a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to display menu
function showMenu() {
    console.log("\nTo-Do List");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Remove Task");
    console.log("4. Exit");
    rl.question("Choose an option: ", (option) => {
        handleOption(option);
    });
}

// Function to handle user input
function handleOption(option: string) {
    switch (option) {
        case "1":
            rl.question("Enter task description: ", (desc) => {
                addTask(desc);
                showMenu();
            });
            break;
        case "2":
            viewTasks();
            showMenu();
            break;
        case "3":
            rl.question("Enter task ID to remove: ", (id) => {
                removeTask(parseInt(id));
                showMenu();
            });
            break;
        case "4":
            console.log("Goodbye!");
            rl.close();
            break;
        default:
            console.log("Invalid option! Try again.");
            showMenu();
    }
}

// Function to add a task
function addTask(description: string) {
    tasks.push({ id: taskId++, description, completed: false });
    console.log("Task added successfully!");
}

// Function to view all tasks
function viewTasks() {
    console.log("\nYour Tasks:");
    tasks.forEach(task => {
        console.log(`${task.id}: ${task.description} [${task.completed ? "Done" : "Pending"}]`);
    });
}

// Function to remove a task
function removeTask(id: number) {
    tasks = tasks.filter(task => task.id !== id);
    console.log("Task removed successfully!");
}

// Start the application
showMenu();
