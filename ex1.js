// declare array of type string
var stringArray = [];
function addTask(task) {
    //push adds to array
    stringArray.push(task);
    //print messages to the console
    console.log(task + " has been added to the array!");
    console.log("Total elements in array: " + stringArray.length);
}
function deleteTask(task) {
    //iterate through array to find index 
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i] == task) {
            //splice removes item of known index
            stringArray.splice(i, 1);
            //print messages to the console
            console.log("Task: " + task + " has been removed from the array!");
            console.log("Total elements in array: " + stringArray.length);
        }
    }
}
function listAllTasks() {
    console.log("Printing all elements of the array...");
    //iterate through all array elements
    for (var i = 0; i < stringArray.length; i++) {
        //print out to console
        console.log("Index " + i + ": " + stringArray[i]);
    }
}
addTask("Fishing");
addTask("Shopping");
listAllTasks();
deleteTask("Fishing");
