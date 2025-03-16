const list = [
  { name: "create a post", status: "In progress", priority: "low" },
  { name: "test", status: "Done", priority: "high" },
  { name: "learn italian", status: "Not yet", priority: "medium" },
  { name: "read 50 pages", status: "Not yet", priority: "low" },
];
// !вывод исходного массива
console.log(`исходный массив`, list);

// !добавление новой задачи
const addTask = (task, state) => {
  if (task.length < 50) {
    if (task in list) {
      console.log("Такая задача уже есть.");
    } else {
      list.push({ name: task, status: state, priority: "low" });
    }
  } else {
    console.log(`Длина задачи ${task} должна быть меньше 50 символов.`);
  }
};

// !удаление задачи
const delTask = (taskName) => {
  const taskIndex = list.findIndex((task) => task.name === taskName);   
    list.splice(taskIndex, 1);

};

// ! замена статуса
const changeState = (taskName, state) => {
  const index = list.findIndex((task) => task.name === taskName);
    list[index].status = state;
};
// !сортировка статуса

function showList(statusName){
  list.sort((a, b) => {
  if (a.status < b.status) return -1;
  if (a.status > b.status) return 1;
    // return 0
    console.log(list.map((task) => task.name));
})
};

changeState("learn italian", "In progress")
delTask("test");

addTask("новое", "Not yet", "high");
addTask("новое2", "A", "high");
addTask("новое3", "A", "high");
addTask("новое4", "B", "high");

// вывод всего массива
list.forEach((user) => {
  console.log(user);
});
showList()
// вывод всех задач в массив
console.log(list.map((user) => user.name));
// вывод всех статусов
console.log(list.map((user) => user.status));
// вывод всех приоритетов
console.log(list.map((user) => user.priority));
