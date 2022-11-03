const tasks = ["Task 1: Eat", "Task 2: Sleep", "Task 3: Code"];

function displayTasks(tasks) {
  if (tasks.length === 0) {
    console.log("No tasks yet.");
  } else {
    console.log(tasks.toString());
  }
}

displayTasks(tasks);

const addition = ["Rinse"];
const str = addition.toString();

function addTasks(tasks) {
  newElement = tasks.push(...addition);
  return "You added: " + str;
}
console.log(addTasks(tasks));

function deleteTask(tasks) {
  lastElement = tasks.slice(-1);
  return "You removed: " + lastElement;
}
console.log(deleteTask(tasks));
