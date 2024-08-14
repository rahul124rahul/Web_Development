// Array in JavaScript

// Array is collection of items/elements

// syntax :   []   / array constructor

let arr1 = [1,2,3,4,"Rahul",true];

console.log(arr1);

let arr2 = new Array(false , 'r' , "Mine",233.34);
console.log(arr2)
console.log(typeof arr2)

// Accessing the element from the array
console.log(arr2[0])
console.log(arr2[1])
console.log(arr2[2])
console.log(arr2[3])
console.log(arr2[4])		// undefined 


console.log()



// Built in methods in  the array object in JavaScript
// push, pop, shift, unshift, slice, splice , map, filter, sort, indexof, find, reduce

console.log(arr2);
arr2.push("Push method on array");
console.log(arr2);
arr2.pop()
console.log(arr2);

console.log()
arr2.unshift("unshift method on array");
console.log(arr2)
arr2.shift()
console.log(arr2)


// Slice method

console.log()
let p = arr2.slice(2,4);
console.log(p)



console.log("\nAdded more elements in the array")
arr2.push(12,23,34,35,4,5,56);
console.log(arr2)



// IMP
// splice method 
// 1 se 4 elements remove karo aur age wale elements ignore kardo
arr2.splice(1,4,"Rahul is best boy","Fuck off",45465,"Papa !!",443.23);
console.log(arr2)



// v.IMP
// Map

console.log("\nMap Method on the array in JavaScript")

let a1 = [10,20,30,40,50];

let squareA1 = a1.map((ele,index) => {
	console.log(index+" "+ele+" "+ele*ele);
	return ele*ele;
})

console.log(squareA1);



// Imp & similar to map
// Filter

console.log()
let ar1 = new Array(12,23,34,45,454,556,76,7788,455,5664);

console.log(ar1);

let even = ar1.filter((no)=>{
	// if(no % 2==0)return true;
	// else return false;

	return no%2==0;
})

console.log(`The even array is ${even}`);


// For gettting only string values from the array we can use following method
console.log(arr2)
let strArr = arr2.filter((ele) =>{
	return typeof(ele)=='string';   // remember to keep datatype in single/double cote
})

console.log(strArr)




// IMP 
// reduce Method

let arr = new Array(14,15,13,12,11);

let sum = arr.reduce((acc,curr)=>{
	return acc+curr;			// In each iteration the calculated value is passed to or assigned to the acc(accumulator) And At last returned finally
},0)		// Here acc(accumulator's) initial value is passed

console.log("\n"+arr);
console.log(`\nSum of all the array elements is : ${sum}`)



// Sort method()
console.log("\n"+arr);
arr.sort()
console.log(""+arr);


// reverse the sorted array for getting the descending order elements of an array
arr.reverse()
console.log(arr)





// indexof method
console.log(arr.indexOf(11))
console.log(arr.indexOf(12))
console.log(arr.indexOf(13))
console.log(arr.indexOf(14))
console.log(arr.indexOf(15))



// find() method  od array in JavaScript

// The JavaScript find() method is used to return the first element in an array that satisfies a specified test function. It iterates through each element of the array and returns the first one that meets the condition defined in the callback function. If no element satisfies the condition, the method returns `undefined`. Importantly, the find() method does not alter the original array.
let f1 = arr.find((e)=>{
	return e>12;
})

console.log(f1);