//union
let id: string | number;

id = 101;       // ✅
id = "ABC101";  // ✅
//id = true;      // ❌

function printId(id: string | number) {
    console.log(id);
}

printId(101);       // ✅
printId("USER101"); // ✅


function printId2(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}

//any
let data: any = 10;

data = "hello";  // ✅
data = true;     // ✅
data = [];       // ✅
data = {};       // ✅


let data2: any = "hello";

data2.toUpperCase(); // ✅
data2.foo.bar();     // ✅ at compile time

//unknown
let data3: unknown = "hello";

//data3.toUpperCase(); // ❌
if (typeof data3 === "string") {
    console.log(data3.toUpperCase()); // ✅
}

