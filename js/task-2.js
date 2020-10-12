"use strict";

const inventory = {
  items: ['Knife', 'Gas mask']
};

const add = function(itemName) {
  console.log(`Adding ${itemName} to inventory`);

  this.items.push(itemName);
};

const remove = function(itemName) {
  console.log(`Removing ${itemName} from inventory`);

  this.items = this.items.filter(item => item !== itemName);
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Medkit', add.bind(inventory));0

console.log(inventory.items);0

invokeInventoryAction('Gas mask', remove.bind(inventory));

console.log(inventory.items);