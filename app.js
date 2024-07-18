import HashMap from "./hashMap.js";
import HashSet from "./hashSet.js";

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

const test2 = new HashSet();

test2.set("apple");
test2.set("banana");
test2.set("carrot");
test2.set("dog");
test2.set("elephant");
test2.set("frog");
test2.set("grape");
test2.set("hat");
test2.set("ice cream");
test2.set("jacket");
test2.set("kite");
test2.set("lion");
test2.set("moon");

console.log(test2.table);
console.log(test2.has("ice cream"));
console.log(test2.remove("banana"));
console.log(test2.get("hat"));
console.log(test2.length());
console.log(test2.keys());
console.log(test2.entries());
