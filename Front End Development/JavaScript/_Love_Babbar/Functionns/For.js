// vIMP

// Practice this important for loop types of this tutorial



let arr = [10,20,30,21];

// forEach Loop on array in JavaScript
arr.forEach((ele,i)=>{
	console.log(`Element at index ${i} is ${ele}`);
})


// forIn to traverse in object for key and key value access

let obj = {
	name:"Rahul Dadge",
	age:22,
	height:'172cm',
	quote: function(){
		console.log("Don't forget that how they gave distance when you needed love.");
	},

}

for(let key in obj){
	console.log(key," "+obj[key]);
}


// for-of loop

let ar = [10,20,30,40]
// Following will access the elements from the array directly
for(let a of ar)console.log(a);

// Following will access the index or the iterator
for(let a in ar)console.log(a);

let s1 = "Technology"

for(let l of s1)console.log(l);






// ARRAY & FUNCTIONS
let arrr = [10,20,30,40,50];

let sum = function(arr){
	let s=0;
	arr.forEach((ele)=> s+=ele)
	return s;
}


let ans = sum(arrr)
console.log("Sum by ForEach : "+ ans)

let sum2 = function(arr){
	let s=0;
	for(let a of arr)s+=a;
	return s;
}

console.log("Sum by for of : "+sum2(arrr));


let sum3 = function(arr){
	let s=0;
	for(let a in arr)s+=arr[a];
	return s;
}
console.log("Sum by for in : "+sum3(arrr));
