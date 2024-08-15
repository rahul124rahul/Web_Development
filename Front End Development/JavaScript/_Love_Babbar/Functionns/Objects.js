//  Following are Non-Primitive dataTypes / reference type DataTypes
	// Objects
	// Arrays
	// Functions


// All the primitive dataTypes use stact memory
// All non-primitive dataTypes are created over Heap Memory
	// For accessing the heap-memory we require the iterator which uses stack memory




// Objects in JavaScript

let ob1 = {
	name:"Rahul",
	age: 21,
	work: "Student",
	obj1_1:{
		task:"This is object inside in object",
	},
	fun1:function(){
		console.log("This is function inside in the object");
	},
}

console.log(ob1);
console.log(ob1.name);
console.log(ob1.age);
console.log(ob1.work);
console.log(ob1.obj1_1);
console.log(ob1.fun1);

ob1.fun1()

console.log(typeof ob1)
console.log(typeof ob1.fun1)



// Following is the Shallow copy of javascript object
// In this only same reference is stored in the new variable.
// On new objct is created 
// both references points to same object so change in one is reflected in all b/c it changes in object directly

let ob2 = ob1;
console.log(ob1)
console.log(ob2)

ob2.name = "Piya";
console.log(ob1)
console.log(ob2)


// Deep copy of the object in JavaScript
// In this new object is created and the all the key-value pairs or the properties are copied in that object and passed the reference of that object in the variable declared 
let newObj = JSON.parse(JSON.stringify(ob1));

// In the above process the function is not copied to the new object


console.log(ob1);
console.log(newObj);

newObj.age = 2928;

console.log("\nJSON ")
console.log(ob1);
console.log(newObj);

delete newObj['work']
console.log(newObj);


delete newObj['obj1_1']
newObj['Height'] = "172cm";
console.log(newObj);


newObj.red = () =>console.log("This is red Function!!!!")
console.log(newObj);