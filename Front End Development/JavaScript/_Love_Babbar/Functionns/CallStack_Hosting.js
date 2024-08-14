// Hosting 

// Process of variable & function defination shifts to the top of current scope (code or our file)



// Function hosting 
// Following call will not through an error
// as we are calling it before it's defination
sayMyName()

function sayMyName(){
	console.log("My Name is RAHUL");
}

sayMyName()


// variable hosting 

// variable declaration shifts at the top of the file not the value assigned to it
console.log(p)
var p = 4;
console.log(p)


// console.log(pp)     // Not decalring variable anywhere will through an ERROR

k = null
console.log(k)
console.log(typeof k)




// In case of the let and const


// let  not support to hosting 

// console.log("pp : "+pp)		// This will through an ERROR
let pp = "Piya"
console.log("pp : "+pp)



// const
// const also not supports to hosting 

// console.log("pi : "+pi)    // This will through an ERROR
const pi = 3.14;
console.log("pi : "+pi)





// If function declaration changed from function declaration method to function expression method then function hosting will not work for it.

// greet();      // This function will not support function hosting
let greet = function(){
	console.log("Good morning dear.");
}	
greet();



// following will through an ERROR
// bb(99);

// But following will not
console.log(bb)

var bb = n => console.log("You have entered : "+n);

bb(45);



// In case of class Hosting will not support

// const ob2 = new human()     // This will through an ERROR

class human{
	
}
const ob1 = new human() 



// Function  in JS are called as first class citizens 
// b/c   Function can assigned to variable
		// passed as an argument
		// can return function
		// create an array of functions (used in DataStructures)
		// can use as property in an object


// passed the function as an argument
function greetMe(greet , name){
	console.log("Hello "+name);
	greet()
}

greetMe(greet,"Rahul");



// In following case we are returning function
function call(n){
	return n => n*n;
}

let cal = call(5)
let ans = cal(10)
console.log(cal); 
console.log(ans);



// create an array of functions (used in DataStructures)
const arr = [
	 (a,b) => a+b,
	 (a,b) => a-b,
	 function(a,b){ 
		return a*b;
	 },
	 (a,b) => a/b,
]

let add = arr[0]
let sub = arr[1]
let mul = arr[2]

console.log(add(2,3))
console.log(sub(5,3))
console.log(mul(2,3))



// can use as property in an object

let obj = {
	age:21,
	name:"RAHUL",
	greet: () => console.log("I am greeting."),
}

console.log(obj)
obj.greet()
console.log(obj.name)