---

(function () {
var a = b = 3;
})();
console.log(typeof a !== "undefined");
console.log(typeof b !== "undefined")

---

var a = {};
b = { key:"b"};
c = { key:"c"};
a[b] = 123;
a[c] = 456;
console.log(a[b]);

---

function showData(){
console.log("variable name is", name);
console.log("variable name is", age);
var name = "Noren Red";
let age = 999;
}
showData();

---

for(var i=0; i<4; i++){
setTimeout(()=>{
console.log(i)
},5)
}
for(let i=0; i<4; i++){
setTimeout(()=>{
console.log(i)
},5)
}

---

function name() {
for (var i = 0; i < 4; i++) {
((x) => {
setTimeout(() => {
console.log(x);
}, 5);
})(i);
}
}
name();

---

const income = {
skills:108,
monthly(){
return this.skills _ 108;
},
yearly : () => 888 _ this.skills
}
console.log(income.monthly();
console.log(income.yearly());

---

console.log(+true);
console.log(!"Javascript")

---

let a = 108;
let b = new Number(108);
let c = 108;
console.log( a == b);
console.log(a === b);
console.log(b === c);

---

class Lizard {
static colorChange(){
this.newColor = newColor;
return this.newColor;
}
constructor({newColor:"orange"} ={}) {
this.newColor = newColor;
}
}
const tommy = new Lizard({newColor : "orange"});
console.log(tommy.colorChange("blue”));
console.log(lizard.colorChange("blue”));

---

let message;
masage = {data:};
console.log(masage)

---

function showModal() {
console.log(showModal.timeout);
}
showModal();
showModal.timeout = 200;
showModal.timeout = 100;
showModal();

---

function Human(fName, lName) {
this.firstName = fName;
this.lastName = lName;
}
const MrX = new Human("Ganesh" , "Gitte");
const Rock = Human("The", "Rock");
console.log(MrX);
console.log(Rock);

---

function sum(a, b) {
return a+b
}
sum(10,"10")

---

function getSummary(one, two, three) {
console.log(one);
console.log(two);
console.log(three);
}
const fName = "Vasuki";
const age = 878;
getSummary`${fName} age is ${age}`

---

function checkAge(data) {
if(data === {age:18}){
console.log("You are an adult")  
 }else if(data == {age:18}){
console.log("You are still an adult")
}else{
console.log("Hmm...no Age")
}
}
checkAge({age:18})

---

function getType(args) {
const words = args.split(" "); // Convert string to array of words
const wordCount = {}; // Empty object to store counts
words.forEach(word => {
const lowerWord = word.toLowerCase(); // Make case-insensitive
wordCount[lowerWord] = (wordCount[lowerWord] || 0) + 1;
});
console.log(wordCount);
}
getType("This is a Javascript functions and this is Javascript");

---

function getType(...args) {
console.log(args)
}
getType(108)

---

function getType(...args) {
console.log(typeof args)
}
getType(108)

---

function getAge() {
salary = 8212;
console.log(salary)
}
getAge();
// Vs
function getAge() {
“use strict”
salary = 8212;
console.log(salary)
}
getAge();

---

const obj = {1:"a", 2:"b", 3:"c"};
const set = new Set([1,2,3,4,5]);
console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));
console.log(set.has("1"));
console.log(set.has(1));

---

const obj = { a:"1", b:"2", a:"3"};
console.log(obj);

---

for(let i =0; i< 5; i++){
if(i === 3) continue;
console.log(i)
}

---

// Prototype: key that exist on object and function
//value of prototype is a Object
String.prototype.youAreAmazing = () => {
return "You are amazing my friend.";
}
**Vs**
String.prototype.youAreAmazing = function() {
return `${this} is amazing!`;
};
const who = "Ganesh";
console.log(who.youAreAmazing()); // ✅ Ganesh is amazing!
**Vs**
String.prototype.youAreAmazing = function() {
return "You are amazing my friend.";
};
const who = "viewer";
console.log(who.youAreAmazing()); // ✅ You are amazing my friend.

---

var a = {};
b = { key:"b"};
c = { key:"c"};
a[b] = 222;
a[c] = 999;
console.log(a[b]);

---

const lang = {name:"ReactJS"};
function getLib(ver) {
return `${this.name} version ${ver}`
}
// getLib.call(lang, 18);
// getLib.bind(lang, 18);
console.log(getLib.call(lang, 18));
console.log(getLib.bind(lang, ));
console.log(getLib.bind(lang, 18)());

---

function sayHi(params) {
return (()=> 0)();
}
console.log(typeof sayHi());

---

//Javascript always read the code from the right to left.
console.log(typeof typeof 1);

---

const numbers= [1,2,3];
numbers = 11;
console.log(numbers);
// Output:
// [
// 1,
// 2,
// 3,
// <7 empty items>,
// 11
// ]

---

In JavaScript, the variable declared in the catch block 
shadows any variable with the same name in the outer scope.

That means:
• The catch(x) parameter creates a new local variable x inside the catch block.
• This inner x is different from the outer let x.

(() => {
let x, y;
try {
throw new Error();
} catch (x) {
(x = 1), (y = 2);
console.log(x);
}
console.log(x);
console.log(y);
})();

**Vs**

(() => {
let x, y;
try {
throw new Error();
} catch (e) {
(x = 1), (y = 2);
console.log(x);
}
console.log(x);
console.log(y);
})();

---

const data = [..."Apple"];
console.log(data)

---

function getMessage() {
throw "Hello world";
}
function sayeHello() {
try {
const data = getMessage();
console.log("Worked", data)
} catch (error) {
console.log("an error", error)
}
}
sayeHello();

---

\*\*parseInt concept in better way to explain here:
console.log(parseInt("10+2"));
console.log(parseInt("7FM"));
console.log(parseInt("FM7"));
console.log(parseInt(“SD10+2”));
📌 Quick Summary Table
Input parseInt(input) Explanation
"123" 123 Normal parsing
"10+2" 10 Stops at +
"7FM" 7 Stops at F
"FM7" NaN First char invalid
" 42px" 42 Ignores spaces, stops at p
"1010", 2 10 Binary to decimal
"7F", 16 127 Hex to decimal

---

[1,2,3].map((num)=>{
if(num > 0) return;
return num \* 2;
})
---

function getInfo(member, year) {
member.name = "FrontendMaster";
year = "1947";
}
const person = {name : "Dev"};
const birthYear = "2097";
getInfo(person, birthYear);
console.log(person, birthYear)
/**\***
Outside Function:
person ────► { name: "Dev" }
birthYear = "2097"
Inside getInfo(member, year):
member ────► { name: "Dev" } (same object)
year = "2097" (a copy)
member.name = "FrontendMaster" ✅ modifies the object
year = "1947" ❌ changes only the local copy
After function ends:
person ────► { name: "FrontendMaster" }
birthYear = "2097" (unchanged)
**\***/

---

(()=>{
let x = (y = 10);
console.log(typeof x);
})();
console.log(typeof x);
console.log(typeof y);
/**_Explaination_**
let x = 10; // block-scoped, gone after IIFE
y = 10; // global, survives after IIFE

---

const obj = {a:"Mr.x", b:21};
const dat = {c:true, ...obj};
console.log(dat)

---

const obj ={};
Object.defineProperty(obj, "a", {value:"char"});
console.log(obj.a);
console.log(Object.keys(obj))
Object.defineProperties(obj, descriptors) lets you define multiple properties at once on an object, and for each property, you can configure:
• value → the actual data stored
• writable → whether the value can be changed later
• enumerable → whether the property shows up in loops
• configurable → whether the property can be deleted or redefined
• get / set → custom getter & setter

---

const object = {};
Object.defineProperties(object, {
property1: {
value: 45,
writable: true,
},
property2: {},
});
object.property1 = 42; // ✅ Update it
console.log(object.property1); // ✅ 42

---

const box = {x:10, y:20};
Object.freeze(box);
const shape = box;
shape.x = 100;
shape.z = 20;
Summary Table
Operation On box after freeze() Non-strict Mode Strict Mode
Change existing value ❌ Ignored Silent fail TypeError
Add new property ❌ Ignored Silent fail TypeError
Delete property ❌ Ignored Silent fail TypeError
Read property ✅ Works ✅ Works ✅ Works

---

function addItem(item, list) {
const result = list.push(item);
return result;
}
const result = addItem("x", ["Y"]);
console.log(result);

---

const name = "Mr.x";
age = 20;
console.log(delete name);
console.log(delete age);

🔹 Step 1: What delete does
• delete removes a property from an object.
• It does NOT delete variables declared with var, let, or const.
• If a variable is undeclared but assigned (which makes it an implicit global in non-strict mode), it becomes a property of the global object (e.g., window in browsers). That property can be deleted.


---

function* generator(i) {
console.log("A");
yield i;
console.log("B");
yield i * 2;
}
const gen = generator(10);
console.log(gen.next().value);
console.log(gen.next().value);

• A generator is a function, that can stop the method execution in the middle and it can resume from where it's stopped.
• Syntactically generator function like noraml javascript function with '_'.
• Once if we call a noraml function, we cannot be stopped before it's finished.
• The only way to exit the normal function is by return some value or by throw an exception.
Step 5: Execution Timeline
Step Code Line Console Output Returned Value
1 const gen = ... — Creates generator
2 gen.next() A { value: 10, done: false }
3 gen.next() B { value: 20, done: false }
4 gen.next() — { value: undefined, done: true }


---

const {fName:feDev} = {fName:"Mr.X"};
console.log(feDev);
console.log(fName);

Summary Table
Code fName feDev Works?
{ fName: feDev } ❌ ✅ ✅ Use feDev
{ fName } ✅ ❌ ✅ Use fName
{ fName, fName: feDev } ✅ ✅ ✅ Use both


---

function sum(n1, n2=n1) {
console.log(n1 + n2)
}
sum(10);

---

let newList = [2,3].push(4);
console.log(newList.push(5));

---
function getItems(list, ...args, moreItem) {
return [...list, ...args, moreItem]
}
getItems(["berry", "apple"], "pear", "kiwi");
---
function nums(a,b) {
if(a > b) console.log('a is large');
else console.log('b is large');
return
a+b;
}
console.log(nums(4,2));
console.log(nums(1,2));
---
class Person{
constructor(){
this.name = "frontend";
}
}
Person = class AnotherPerson{
constructor(){
this.name = "Master";
}
}
const member = new Person();
console.log(member.name);
---
const name = "HappySingh";
console.log(name())
---
let name = "Dev";
function getName() {
console.log(name);
let name = "FrontEndMaster";
}
getName();
---
const one = false || {} || null ;
const two = null || false || '';
const three = [] || 0 || true;
console.log(one, two, three);
---
`${((x)=>x)('I love')} JS`
---
let num = 1;
const list = ["A", "B", "C"];
num = num + 1;
console.log(list[(num += 1)]);
=====================================================
let randomValue = {name:"Lydia"};
randomValue = 23;
if(!typeof randomValue === "string"){
console.log("It is not a string!")
} else{
console.log("Yes it is a string!")
}
---
const user = {
email: "abc@domain.com",
updateEmail:email =>{
this.email = email;
}
}
user.updateEmail();
console.log(user.email);
---
const arr =["React", "Java", ".Net"];
arr.slice(0,1);
arr.splice(0,1);
arr.unshift("HR")
console.log(arr);
---
let count = 0;
const nums = [0,1,2,3];
nums.forEach(num=>{
if(num){
count += 1;
}
})
console.log(count);
---
const person={
name:"FrontendMaster",
address:{
city:"MDNDocs"
}
}
Object.freeze(person);
person.name = null;
person.address.city = null;
console.log(person);

only first-level of person is frozen,
but nested objects are not recursively frozen.
\*/
---
onst Message= 208;
function getInfo() {
}
console.log(Message);
const Message = 'sadgamaya
getInfo()
---
const pets['Hi', 'Hello'];
({item: pets} {item: "React"})
console.log(pets);
---
const F00 "Frontendmaster";
console.log(!typeof F00 'object');
console.log(!typeof F00 'string’);
---
const add x=> y=> z=>{
}
console.log(x,y,z);
return x + y + z;
add(10) (20) (30);
VS
function (x){
return function (y){
return function (z){
return x+y+z}
}
}
add(10) (20) (30);
---
const groceries = ["HI", 'Hello'];
if(groceries.indexOf("HI")){
console.log("we have HI");
}else{
} console.log("we do not have HI");
---
const obj {name:"JS");
obj.ref = obj;
const str= JSON.stringify(obj);
console.log(str);
---
var magic 900;
function magic() {
console.log("magic");
} console.log(magic);
---
const array = [{key:""},"2", "x"];
delete array;
console.log(array.length, array);
====================================================
console.log(1);
new Promise(function(res){ console.log(2) })
console.log(3);

---

const dataMap = new WeakMap();
let Person = {name:"JS"};
dataMap.set(Person, "TVA");
console.log(dataMap.get(Person));
person = null;
console.log(dataMap.get(Person));

---

var foo = function test() { console.log('inside test'); }
test();

---

var test = function (params) { console.log('inside test'); }
function againTest() { console.log('againTest test'); }

---

const data1= ["C","B","A","D"];
const data2= ["Z","Y","X","W"];
data1.toSorted();
data2.sort()
console.log({data1})
console.log({data2})

---

const data1= ["C","B","A","D"];
const data2= ["Z","Y","X","W"];
data1.toReversed();
data2.reverse();
console.log({data1})
console.log({data2})

---

**\***sparse arrays**\***
const arr = [,,,,];
console.log(arr.length);
**\***OR**\***
let sparseArray1 = new Array(5); // Creates an array of length 5 with 5 empty items
console.log(sparseArray1); // Output: [ <5 empty items> ]
console.log(sparseArray1.length); // Output: 5

---

let x = 10; let y = "A";
[x,y] = [y,x]
console.log({x,y})

---

let x = [typeof x, typeof y];
console.log(x);

---

const [x, ...y] = [1,2,3,4];
console.log({x,y});

---

var age =99;
console.log(window.age)

---

let name ="JS";
name = "R";
name = "X";
console.log(name);

---

let str = new String("JS");
console.log(str === "JS");
console.log(str == "JS");

---

const obj = {};
obj[obj["A"] = "B"] = "C";
console.log(obj);

---

1. const obj ={}
2. const obj = new Object();
3. const obj = Object.assign({},{});
4. const obj = Object.create({})
5. function test(){}; const result = new test();

function test(){
var i;
for(var i=0; i<5; i++){
setTimeout(function(){
console.log(i);
},100)
}
}
test();
**_OR_**
function test(){
for(var i=0; i<5; i++){
(function (val) { setTimeout(function(){
console.log(val);
},100) })(i)
}
}
test();

---

const arr = [1,2,3];
console.log(arr)

---

const obj = {};
console.log(obj.random);
console.log(obj.likeme);

---

function init(x,y,z) {};
function end(a, b=0,c) {};
console.log(init.length);
console.log(end.length)

Function  Parameters  First Default  .length
init   x, y, z None   3
end   a, b = 0, c  b = 0   1
IMP note - Once a default is encountered, all parameters after that are ignored in .length


---

const Person ={ lang:"JS", show:function () { console.log(`Hi, ${this.lang}`) } }
let fn = Person.show();
fn();

---

console.log([] === []);
console.log([] == []);
console.log({} == {});
console.log({} === {});

---

if (function fn() {}) {
console.log(fn);
}

OR

(function fn() {
console.log(fn); // ✅ This works: fn refers to itself
})();
console.log(fn); // ❌ ReferenceError

---

99["toString"].length + 1;

---

console.log(4+"4");
console.log(8+ +"8");

---

typeof jsIsAwesome;

---

const data = new Array(100);
for(let i = 0; i< data.length; i++){
console.log(i);
}

VS

const data = new Array(n);
const result = data.length;
for (let i = 0; i < result; i++) {
console.log(i);
}

---

function sum() { return 2*2 }
function sq() { return 4*4 }
let a = (sum(), sq());
console.log(a)

// Note**\*** What does the comma operator do?
// In JavaScript, the comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
// Calls sum() → returns 4 (but the value is ignored)
// Calls sq() → returns 16
// The entire expression evaluates to 16, which is assigned to a.

---

const obj = {name:"x"};
delete obj.name;
obj?.name = "Y";

---

let lifeSpan = {99:"Impressive"}
lifeSpan.100 ="hello"
console.log({lifeSpan})

---

const arr = ["ab","cd","ef"];
const str = "abcdef";
const strMatch = str.inclues("a");
const arrMatch =arr.includes("a");
const arrMatch =arr.includes("ab"); // try with ab to exact match
console.log({strMatch, arrMatch})

---

console.log(888888888888888888)

---

function show(params) { let x =9; let y=10; function inner() { console.log(x,y); } console.dir(inner) }
show();

---

function show(params) { let xx =9; let yy=10; function inner() { console.log(xx,yy); } inner(); xx= 90; yy= 100; inner(); } show();

---

const objj = {name:"JS"};
console.log(objj.name);
// To prevent direct access, wrap in a function:
const objj = {name:"JS", getName:function (params) { return this.name; }};
console.log(objj.getName());

---

function show() { { var x= 9; var y = 10; } console.log(x,y); } show();


vs

function show() { { ( function(){ var x= 9; var y = 10; } )() } console.log(x,y); } show();

---

console.log("A");
(async function(){
const x = await 5;
console.log("C");
})();
console.log("B");

---

let a = 10; let b = 20;
let c = 30 - (a = b + 10);
console.log(`c= ${c}`);

---

/\*
ways to make the array lenth 0
let arr = [1,3,5,6];

1. arr = []; // this will not work for const
2. arr.length = 0;
3. splice(0, arr.length);
   \*/

---

function Superhero() {
this.hero = "SilverSufer";
return {hero:"NoreRed"}
}
const hero = new Superhero();
console.log(hero);

---

const emptyObj = {};
Object.defineProperty(emptyObj, "lang", {value:"JS"})
console.log(emptyObj);
console.log(emptyObj.lang);

---

console.log(-0 == 0);
console.log(-0 === 0);
Object.is(0,-0) // read more about this

---


create a function addd without using a function and arrow function
const a =10;
const b =20;
add(10,20)


---


statically Typed ex. c, java
vs
dynamic Typed ex. javscript


---


const age = 21;
const str = "JS";
const isValid = true;
console.log(null.toString());
console.log(undefined.toString());
console.log(str.toLowerCase());
console.log(isValid.toString());


---

Is everything in JavaScript an object?
No, not everything in JavaScript is an object — but many things are, and non-objects can behave like objects in certain situations.

✅ Things that are objects in JavaScript:
Object literals: { key: "value" }
Arrays: [1, 2, 3] (Arrays are a special type of object)
Functions: function() {} (Functions are objects too)
Dates, RegExps, Errors, etc.
Instances of classes or constructors

❌ Things that are not objects:
These are called primitive types:
string
number
boolean
null
undefined
symbol
bigint

Example:
const a = "hello"; // a is a string, which is a primitive

🔁 But wait — why can we do this?
"hello".length // 5
"hello".toUpperCase() // "HELLO"

How does a primitive like "hello" act like an object?
➡️ Temporary wrapper objects!

JavaScript automatically wraps primitives with their object equivalent when you try to access a property or method.

Example:
// Internally: new String("hello").toUpperCase();
This is temporary — the wrapper object is discarded right after.

---

const key = "constructor";
const obj = {};
if (obj[key]) {
console.log("Hello Admin");
} else {
console.log("Hello Guest");
}
if (key in obj) {
console.log("hello admin");
} else {
console.log("hello guest");
}

Input : a.b.c.d.e
Output : a:{ b:{ c:{ d:e } } }

const str = "a.b.c.d.e";
str.split(".").reduceRight((acc,next)=>{
return {[next]:acc}
},)

---

/\*
calculate the count of character
const str = "hare krishna hare krishna krishna krishna hare hare";
undefined
const obj ={};
for(let x of str){
if(obj[x]){
obj[x] += 1;
}else{
obj[x] = 1
}
}

//Ignore spaces (if you don’t want to count them):
const obj = {};
for (let x of str) {
if (x !== ' ') {
obj[x] = (obj[x] || 0) + 1;
}
}
\*/

---

const str = "hare krishna hare krishna krishna krishna hare hare";
const words = str.split(" ");
const wordCount = {};
for (let word of words) {
if (wordCount[word]) {
wordCount[word] += 1;
} else {
wordCount[word] = 1;
}
}
console.log(wordCount);

---

const arr = [1, 2, 3, 4];
arr.forEach((val, ind) => {
console.log("value =", val);
if (val == 2) {
arr.splice(ind + 1, arr.length - (ind + 1));
}
});
console.log(arr);

---


compare kartana JS switch statement madhe === use karto

const a = "81";
switch(a){
case 81 : console.log("=="); break;
case "81": console.log("==="); break;
default: console.log(":"); break;
}

---


How to make passing argument mandatory?
function show(name) { console.log(name) }
show();
vs
function show(name = "N/A") { console.log(name) }
show();
vs
function check(){ throw new Error("param required") }
function show(name = check()) { console.log(name) }
show();


---


switch statement behind the scene uses ===

const a = NaN;
switch(a){
case NaN: console.log("=="); break;
default: console.log("Match failed"); break;
}

---

console.log(0 == "0");
// Note: [].toString() // gives ""
console.log(0 == []);
console.log("0" === []);

---

const num1 = Number();
const num2 = Number(undefined);
console.log(`num1 = ${num1}`);
console.log(`num2 = ${num2}`);

---

/\*
find the last element of array
const arr= ["B","S","Y","P"];
Solution:
arr[arr.length -1]; //"P"
arr.at(-1); //"P"
arr.pop(); // last element bhetel

Comparison:
Method Code Modifies Array Notes
pop() arr.pop() Yes Removes and returns last item
length - 1 indexing arr[arr.length - 1] No Old-school, widely supported
.at(-1) arr.at(-1) No Clean and modern
\*/

---

function isValid(age) {
if(age){ var varMsg = "valid" }
console.log(varMsg) }
isValid(21);

Note:
const, like let, creates block-scoped variables.(let/const creates block scope; it is not the block scope itself.)
const just adds the restriction that the binding (variable) cannot be reassigned.
Both are much safer and more predictable than var.


---


find Object with id 21:
const arr = [{id:91, name:"B"},{id:21, name:"C"},{id:111, name:"D"}];
const arr = [ { id: 91, name: "B" }, { id: 21, name: "C" }, { id: 111, name: "D" } ];
const result = arr.find((val) => val.id === 21);
const result = arr.find((val) => val.id === 21) ?? {}; //will get the undefined value , it will helps to crash the application...
console.log(result); // { id: 21, name: "C" }


---

!function () { console.log("I am amazed.") }();
//The ! at the beginning forces it to be treated as an expression, not a declaration

---

let flag = 0;
setInterval(function () { console.log('InsideInterval'); console.log(flag++); },1000);

---

function show() { console.log("WOW"); }
const functionName = "show";
show(); // Direct call - outputs: WOW
window[functionName](); // Indirect call via window object - outputs: WOW

---

/\*
Insert "Z" at 0
const arr = ["a","b","c"];

1. arr.unshift("X")
2. arr.splice(0,0,"D"); //The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Note - // splice(start) // splice(start, deleteCount) // splice(start, deleteCount, item1) // splice(start, deleteCount, item1, item2) // splice(start, deleteCount, item1, item2,  …,  itemN)
3. arr = ["Y", ...arr]; //destructuring method.
   \*/

---

/\*
check if any student is fail;
const PASSING_MARKS = 33;
const arr = [ { id: 31, marks: 66 }, { id: 88, marks: 10 }, { id: 9, marks: 55 } ];
arr.find((val,ind)=> val.marks >= PASSING_MARKS); //find method
arr.some((val)=>val.marks < PASSING_MARKS); // some method

**\*\***Summary**\*\*\***:
Method Purpose Use When Stops Early Returns
.some() Check if any match exists You want to test if at least one matches ✅ true / false
.every() Check if all match a condition You want to confirm all meet a condition ✅ true / false
.find() Get the first matching item You want the first matching object ✅ First matching element or undefined
.filter() Get all matching items You want all matches as a new array ❌ Array of matches
.map() Transform all items You want a new array with transformed values ❌ New array
.forEach() Run logic on each item (no return) You want side effects (e.g., logging) ❌ undefined
.reduce() Reduce array to a single value You want to accumulate a total/result ❌ Final accumulated value
for loop Manual, flexible iteration You want full control (e.g., break, continue) ✅ Anything (you define it)
\*/

---


find the time taken by while loop:
let i = 0;
console.time("X");
console.log("before");
while(i < 100000){
i++;
}
console.timeLog("X");
console.log("after");


---

const num1 = 1000000000;
const num2 = 10_000_00_000;
console.log(num1 === num2);

---

/\*
Merge these 2 arrays
const marks = [1,2,3];
const rollnum = [4,5,6];

1. const result = [...marks.concat(rollnum)];
2. const result = [...marks,...rollnum];
   \*/

---


where is the exactly innerChild gets called?
function grandParent() { console.log("grandParent called"); parent() }
function parent() { console.log("parent called"); child(); }
function child() { console.log("child called"); innerChild(); }
function innerChild() { console.log("innerChild called"); console.trace(); // trace the actual all the tress. }
grandParent()


---

let age = "51";
let validAge = "51";
age = age+1;
validAge++;
console.log(age);
console.log(validAge);

---

console.log(+false);
console.log(!"js");

---

const arr= [1,2,3,4];
console.log(1 in arr);
console.log(2 in arr);
console.log(3 in arr);
console.log(4 in arr);

---

let a = 1;
let b = new Number(1);
console.log(a == b);
console.log(a === b);

---

function test() {
try{
return 1;
}finally{
return 2;
}
}
const result = test();
console.log(result);
//try block executes → return 1; is triggered.
//Before returning 1, the finally block runs.
//finally block has return 2; → this overrides the earlier return.
//Function returns 2.

---


[object Object] output: '${{Object}}'
vs
const obj = {};
obj.Object = () => {};
console.log(obj.toString());


---

const arr =[1,2,3,4,5,5];
arr.reduce((acc,next)=>{
console.log(acc);
console.log(next);
});

---

reduce Syntax:
reduce(callbackFn)
reduce(callbackFn, initialValue)
const array = [1, 2, 3, 4]; // Example array
const initialValue = 0;
const sumWithInitial = array.reduce((accumulator, currentValue) => { debugger; // This will pause in your dev tools
return accumulator + currentValue; }, initialValue);
console.log(sumWithInitial); // 10

---

const show=()=>{ //same parameter will not be accepted here }
function show1(a,a){ //same parameter will be accepted her }

---

function show1(a,a){ console.log(a); } show1(3); //Output: undefined ❗ Because second a overrides the first and no second argument was passed. show1(3,9); //First a gets value 3 //Second a (same name) gets value 9 — it overrides the first //Inside the function, a refers to the second one → value is 9

---

console.log("" == []);

---

function test(){ console.log(typeof this); } test.call("");

---

const arr = [1,4,5,[4,5,[6,]]];
function flat(data) { return data.flat(3); }
console.log(flat(arr))
 vs 
function flat(data) { return data.flat(Infinity); }
//This will flatten any depth of nesting. It's more flexible for dynamic or deeply nested arrays.
console.log(flat(arr))

---
