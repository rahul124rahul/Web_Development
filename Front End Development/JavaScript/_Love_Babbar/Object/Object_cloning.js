// This is important concept for cloning the object by udinng spread and assign method 

// Object Cloning

let obj  = {
	age:21,
	wt:67,
	ht:"177cm",
}

console.log(obj)

obj.color = "red";
console.log(obj)


// There are 3 ways of cloning operators
	
// 1) by using spread operator
let obj2 = {...obj};

obj2.color = "Green";

console.log(obj);
console.log(obj2);


// 2) Assign method

let obj1 = {
	val:"₹9990",
	rating:"5 star"
}

let obj3 = Object.assign({},obj,obj1)

obj3.color = "Pink"
console.log(obj)
console.log(obj1)
console.log(obj3)




// 3) Iteration method
let obj4={}

for(key in obj3){
	obj4[key] = obj3[key];
}

obj3.quality = "Best";

console.log(obj3)
console.log(obj4)



// Garbage Collector
// In JavaScript there is no control of us on the Garbage collector manually