var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (task) {
        //push adds to array
        this.tasks.push(task);
        //print messages to the console
        console.log(task + " has been added to the array!");
        console.log("Total elements in array: " + this.tasks.length);
    };
    TaskManager.prototype.deleteTask = function (task) {
        //iterate through array to find index 
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] == task) {
                //splice removes item of known index
                this.tasks.splice(i, 1);
                //print messages to the console
                console.log("Task: " + task + " has been removed from the array!");
                console.log("Total elements in array: " + this.tasks.length);
            }
        }
    };
    TaskManager.prototype.listAllTasks = function () {
        console.log("Printing all elements of the array...");
        //iterate through all array elements
        for (var i = 0; i < this.tasks.length; i++) {
            //print out to console
            console.log("Index " + i + ": " + this.tasks[i]);
        }
    };
    return TaskManager;
}());
//call the constructor
var tm = new TaskManager();
//testing
tm.addTask("Fishing");
tm.addTask("Shopping");
tm.addTask("Studying");
tm.addTask("Gym");
tm.listAllTasks();
tm.deleteTask("Fishing");
