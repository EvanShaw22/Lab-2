interface Tasked {
    tasks: string[];

    //functions
    addTask(task: string): void;
    deleteTask(task: string): void;
    listAllTasks(): void;
}

class TaskManager implements Tasked {

    tasks: string[] = [];

    constructor() {}

    addTask(task: string): void {
        //push adds to array
        this.tasks.push(task);
    
        //print messages to the console
        console.log(task + " has been added to the array!");
        console.log("Total elements in array: " + this.tasks.length);
    }
    
    deleteTask(task: string): void {
        //iterate through array to find index 
        for (let i = 0; i < this.tasks.length; i++) {
    
            if (this.tasks[i] == task) {
                //splice removes item of known index
                this.tasks.splice(i, 1);
    
                //print messages to the console
                console.log("Task: " + task + " has been removed from the array!");
                console.log("Total elements in array: " + this.tasks.length);
            }
        }
    }
    
    listAllTasks(): void {
        console.log("Printing all elements of the array...")
        //iterate through all array elements
    
        for (let i = 0; i < this.tasks.length; i++) {
            //print out to console
            console.log("Index " + i + ": " + this.tasks[i]);
        }
    }
}

//call the constructor
let tm: TaskManager = new TaskManager();

//testing
tm.addTask("Fishing");
tm.addTask("Shopping");
tm.addTask("Studying");
tm.addTask("Gym");

tm.listAllTasks();

tm.deleteTask("Fishing")
