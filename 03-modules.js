// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names');
const sayHello = require('./05-utils');
const data = require('./06-alternative-flavor');
const items = data.items;
const person = data.singlePerson;

require('./07-mind-grenade');

console.log(items);
console.log(person);
sayHello(names.eren);
sayHello(names.yasin);
