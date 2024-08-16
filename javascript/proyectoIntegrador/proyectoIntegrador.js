const prompt = require('prompt-sync')({sigint: true});

// Array to store tasks
let tasks = [];

// Function to add a task
function addTask(name, deadline = null) {
    tasks.push({
        name: name,
        complete: false,
        deadline: deadline
    });
}

// Function to delete a task
function deleteTask(index) {
    if (isValidIndex(index)) {
        tasks.splice(index, 1);
        console.log("Task successfully deleted.");
    } else {
        console.log("Error, invalid task number! :(");
    }
}

// Function to update the status of a task to completed
function updateStatusTask(index) {
    if (isValidIndex(index)) {
        tasks[index].complete = true;
        console.log("Work done! :)");
    } else {
        console.log("Error, invalid task number! :(");
    }
}

// Function to update task information
function updateTask(index, newName, newDeadline = null) {
    if (isValidIndex(index)) {
        tasks[index].name = newName || tasks[index].name;
        tasks[index].deadline = newDeadline || tasks[index].deadline;
        console.log("Successfully modified task! :)");
    } else {
        console.log("Error, invalid task number! :(");
    }
}

// Function to check if the task index is valid
function isValidIndex(index) {
    return index >= 0 && index < tasks.length;
}

// Function to display the menu
function showMenu() {
    console.log(" --------MENU------- ");
    console.log("1. Add task.");
    console.log("2. Delete task.");
    console.log("3. Mark task completed.");
    console.log("4. Update task.");
    console.log("5. Show tasks.");
    console.log("6. Exit.");
}

// Function to choose an option from the menu
function chooseOption() {
    let option = -1;

    while (option !== 6) {
        showMenu();
        option = parseInt(prompt("❀ Please enter the selected option ❀"), 10);

        switch (option) {
            case 1:
                const name = prompt("Please enter the name of the task! ᵔ ̮ ᵔ");
                const deadline = prompt("Please enter the deadline (optional): ") || null;
                addTask(name, deadline);
                break;
            case 2:
                const deleteIndex = parseInt(prompt("Please enter the number of the task to delete! ᵔ ̮ ᵔ"), 10);
                deleteTask(deleteIndex);
                break;       
            case 3:
                const completeIndex = parseInt(prompt("Please enter the number of the task to complete! ᵔ ̮ ᵔ"), 10);
                updateStatusTask(completeIndex);
                break;       
            case 4:
                const updateIndex = parseInt(prompt("Please enter the number of the task to update! ᵔ ̮ ᵔ"), 10);
                const newName = prompt("Please enter the new name of the task (optional): ");
                const newDeadline = prompt("Please enter the new deadline (optional): ") || null;
                updateTask(updateIndex, newName, newDeadline);
                break;                  
            case 5:
                console.log("❀ Your tasks: ❀");
                tasks.forEach((task, idx) => {
                    console.log(`${idx + 1}. ${task.name} - ${task.complete ? "Completed" : "Pending"}${task.deadline ? ` - Deadline: ${task.deadline}` : ""}`);
                });
                break;
            case 6:
                console.log("Exiting...");
                break;                
            default:
                console.log("◔̯◔ Invalid option.");
                break;
        }
    } 
}

chooseOption();
