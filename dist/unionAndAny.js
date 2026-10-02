"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union
let id;
id = 101; // ✅
id = "ABC101"; // ✅
//id = true;      // ❌
function printId(id) {
    console.log(id);
}
printId(101); // ✅
printId("USER101"); // ✅
function printId2(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
//any
let data = 10;
data = "hello"; // ✅
data = true; // ✅
data = []; // ✅
data = {}; // ✅
let data2 = "hello";
data2.toUpperCase(); // ✅
//data2.foo.bar();     // ✅ at compile time
//unknown
let data3 = "hello";
//data3.toUpperCase(); // ❌
if (typeof data3 === "string") {
    console.log(data3.toUpperCase()); // ✅
}
//intresting case
const orders = ["20", "25", "35", "40"];
//to avoid any type
let currentorder;
for (let order of orders) {
    if (order === "25") {
        currentorder = order;
        break;
    }
    currentorder = "35";
}
console.log(currentorder);
//# sourceMappingURL=unionAndAny.js.map