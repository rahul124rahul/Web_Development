
// Variable Scoping 

// Global Scope
// function Scope
// Block Scope


// Global Scope
var age=21;     // we can use canst or var also for global scope
console.log(age)
{
	console.log(age)
}

if(true){
	console.log(age)
}

for(let i=0;i<2;i++)console.log(age)





// Function Scope

function sayHello(){
	let n = "Piya"          // In case of var and const also it shows same behaviour
	console.log("Hello Rahul & ",n);
}

// console.log(n);    // this variable 'n' is not accessible outside the function scope
sayHello();






// Block Scope

{
	var height = "172cm";
	console.log(height);


	let hh = 233;
	console.log(hh);


	const o = "Om";
	console.log(o);
}


// Var variable is accessible outside of the block b/c it is not a block element
console.log(height);

// This will through an ERROR b/c it is block element
// console.log(hh);



// This will through an ERROR b/c it is block element
// console.log(o);






// Temporal Dead Zone

