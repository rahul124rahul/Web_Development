// Functions 

function myName(){
	console.log("Rahul Ganesh Dadge !!");
}

myName();

function print_1_to_100(){
	for(let i=1;i<=100;i++)console.log(i);
}

// print_1_to_100();
// print_1_to_100();



// Passing single variable in fucntion
function printNO(n){
	console.log(n);
}

printNO(34);



// passing 2 variables
function avg(a,b){
	console.log(`The averae of ${a} & ${b} : ${(a+b)/2}`);
}

avg(2,4);
avg(23,22);
avg(223.5,223);



// Return function

function getSum(a,b,c){
	let s = a+b+c;
	return s;
}

console.log(getSum(1,4,6));



function getFullName(firstName , lastName){
	return firstName+" "+ lastName;


	console.log("This lines not Executed in any situation beacuse these are after the return statement in the function !!! ")
}

let fullName = getFullName('Rahul',getFullName('Ganesh','Dadge'));

console.log(fullName)





// Another method of function defination

// M2

let multi = function(a,b){
	return a*b;
}

console.log(multi(4,2));


// m3

let pow = (x,y) => {
	return x**y;
}

console.log(pow(2,5));


// M4

let PowOfTwo = n =>2**n;

console.log(PowOfTwo(6));


// Callback Function
// 
