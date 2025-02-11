const todoApp = {
  list: {
    english: "done",
    italiano: "done",
    francais: "in progress",
    suomi: "not yet",
    russian: "done",
    portugues: "not yet",
  },
  showList() {
    for (const task in this.list) {
      console.log(`${task}: ${this.list[task]}`);
    }
  },
 

  addTask(task, state) {
    if (task.length < 50) {
      this.list[task] = state;
    } else {
      console.log(`длина задачи ${task} должна быть меньше 50 символов`);
    }
    if (task in this.list) {
      console.log("такая задача уже есть");
    }
  },
  changeState(task, state) {
    this.list[task] = state;
  },
  delTask(task) {
    delete this.list[task];
  },
};

  
// изначально
todoApp.showList();
  
// добавляем
todoApp.addTask("to do", "yes");
todoApp.addTask("НадоПойтиПогулятьПотомПоестьБорщаСделавПредварительноДомашку", "yes");
  
  
// изменяем
todoApp.changeState("english","не хочу, бля, нахуй")

  
// удаляем
todoApp.delTask("suomi")

// после преобразований
console.log("     после преобразований");

todoApp.showList();

