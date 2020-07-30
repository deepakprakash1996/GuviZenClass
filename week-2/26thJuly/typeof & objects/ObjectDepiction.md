#Objects and it's internal representation..

##Objects:
Objects plays a vital role in the programming languages. JS objects are containers for named values called properties or methods.The data types are of 2 types
in Javascript which can be listed as,

`Primitive Data Type (Eg: string, number, boolean, null etc)`

`Composite Data Type (Eg: object)`

Primitve data types can store only single value whereas objects can store multiple values of primitva data in it. Primitive data types are of copy by value and compositive data types are copy by reference.

-Array is an object in JS (which internally stores the values as a json object).
-Array is indexed based on the index number whereas Json object entries are identified based on the key and it's value pair.

Example 1: COPY BY VALUE

var a = 10;
var b = a;
var b = 20;
console.log(a) //gives 10 ->copy by value

Example 2: COPY BY REFERENCE

var arr = [1];
var arr1 = arr;
arr1[0]= 5;
console.log(arr)//gives 5 ->copy by reference