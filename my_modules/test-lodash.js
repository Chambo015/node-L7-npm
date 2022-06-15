const _ = require("lodash");

let result = _.chunk([1, 2, 3, 4, 5, 6, 7], 2);
console.log(result);

result = _.difference([1, 2, 1, 4], [1, 5], [2, 6]);
console.log(result);

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Alice" },
];

const activeUsers = [{ id: 1 }, { id: 3 }];
result = _.differenceBy(users, activeUsers, (user) => user.id);
result = users.filter((a) => !activeUsers.some((b) => a.id === b.id));
console.log(result);

const tasks = [
  { name: "Buy milk", done: false },
  { name: "Make tea", done: true },
  { name: "Breakfast", done: false },
];

console.clear();
result = _.filter(tasks, { done: true });
result = tasks.filter((task) => !task.done);
console.log(result);
