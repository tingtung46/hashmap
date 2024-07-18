import HashMap from "./hashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "green");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "yellow");
test.set("grape", "purple");
test.set("hat", "white");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");

console.log(test.table);
console.log(test.get("hat"));
console.log(test.has("ice cream"));
console.log(test.remove("banana"));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
