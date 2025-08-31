/**
 * Ex7 — Active users, names and count
 * TODOs:
 * - Filter active users
 * - Map to names
 * - Count actives
 */

const users = [
  { id: 1, name: "Ana", active: true },
  { id: 2, name: "Luis", active: false },
  { id: 3, name: "Marta", active: true }
];

// TODO: filter, map, reduce
const activeUsers = users.filter((user) => user.active === true);
console.log("Active users", activeUsers);
const userNames = activeUsers.map((user) => user.name);
console.log("User names", userNames);
const countActives = users.reduce((acc, user) => acc + (user.active ? 1 : 0), 0);
console.log("Count active users", countActives);