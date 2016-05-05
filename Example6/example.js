
/* EXAMPLE - 1 */

print("<br><b>ASSIGNMENTS</b><br>");

print("<b>Primitive value types:</b> undefined, null, Boolean, Number, String");
var a = 3.14;
print("a: " + a);

var b = a;
a = 4;
print("<br><i>After 'a = b;' and 'a = 4;'</i><br>");
print("a: " + a);
print("b: " + b);

print("<br><b>Reference value types:</b> Object, Array, function");
var arr1 = [0,1,2];
print("arr1: " + arr1);

var arr2 = arr1;
arr1[0] = 99;

print("<br><i>After 'arr2 = arr1;' and 'arr1[0] = 99;'</i><br>");
print("arr1: " + arr1);
print("arr2: " + arr2);

print("<br>-------------------------<br>");

var obj1 = new Object();
obj1.name = "John";
print("obj1.name: " + obj1.name);

var obj2 = obj1;
obj2.name = "Bob";

print("<br><i>After 'obj2 = obj1;' and 'obj2.name = 'Bob';'</i><br>");
print("obj1.name: " + obj1.name);
print("obj2.name: " + obj2.name);





/* EXAMPLE - 2 */

print("<br><b>ARGUMENT PASSING</b><br>");

function addNum(value){
    value += 10
    return value;
}

function setName(obj){
    obj.name = "Bob";
    obj.age = 23;
}

function setAddress(obj){
    obj = new Object();
    obj.address = "14 str. London - ENGLAND"
}

print("<b>Primitive type parameters:</b> Value is <b>COPIED</b> to new local variable.");
var number = 20;
print("number: " + number);

var result = addNum(number);

print("<br><i>After 'number' is passed to 'addNum' function which adds 10 to value.</i><br>");
print("number: " + number);
print("result: " + result);

print("");

print("<b>Refence type parameters:</b> Refence is <b>COPIED</b> and <b>CREATE</b> a new local object."); 
print("But until the reference address is changed, it points to same address. <br>");
var obj = Object();
obj.name = "Nicholas";

print("obj.name: " + obj.name);
print("obj.age: " + obj.age);

setName(obj);

print("<br><i>After 'obj' is passed to 'setName' function which sets 'name' property as 'Bob' and 'age' property as '23'.</i><br>");
print("obj.name: " + obj.name);
print("obj.age: " + obj.age);

setAddress(obj);

print("<br><i>After 'obj' is passed to 'setAddress' function which tries to set 'address' property as '14 str. London - ENGLAND'.</i>") 
print("<i>But the new created parameter object reference address is altered to a new Object.</i> <br>");
print("obj.address: " + obj.address);

