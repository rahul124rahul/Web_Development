// var variable defination

var a=23;

console.log(a);

// block level scope not accessible outside

function print(){
	var p=90;

	a="Rahul";
	console.log(p)
}
// console.log(p)   // This will give an error
print();

console.log("The a value is updarted as : "+a+" in print function block !!!!!!!");


var a = true;

console.log("The redeclaration of the already declared variable is possible as like a : "+a);



// let varaiable

let rr=43443;            // It has global scope & can be updated from anywhere 
console.log(`rr : ${rr}`); 

function value(){
	rr++;     
	console.log(`Value of the rr inside value funciton is : ${rr}`);

	let block_var = 1221;   // this variable has local scope accessible from inside only
	
	console.log(`The bolck_val is only accessible inside the block : `+block_var);
}


value();
console.log(`rr : ${rr}`); 
 

// console.log(`The bolck_val is not accessible outside the block : `+block_var);      // this will through an error

// let rr = "Piya";   // This will also through ERROR
console.log(`rr : ${rr}`); 





// Const


const o = 23;
console.log(o)

// o=9;		// Not possible
console.log(o)

// const o = 32;  // this is alno not possible





// Variable Naming Convention

// Prefer Camel Case Convwntion
// eg., nameOfStudent , ageOfPersion

// Ḍon't use reserved keywords
// start variable by _, alphabet, & $
let $o = "₹120";
console.log($o);

let _u = "Love You";
console.log(_u);

// let 12dsjf = "dfdnv"    // This will through an ERROR 



// DataTypes

// number 
let aa = 12.2334;
// string
let bb = "Rahul";
// boolean
let cc = true;
// object (null)
let dd = null;
// underfined
let ee;

console.log(aa)
console.log(typeof aa)

console.log(bb)
console.log(typeof bb)

console.log(cc)
console.log(typeof cc)

console.log(dd)
console.log(typeof dd)

console.log(ee)
console.log(typeof ee)

// BigInt
// Following are two methods of defining the bifg int variable

let ff = BigInt(" 3333333333334893484444444444444444444444444444444444444444444444444444444444339999999999999976555555555555555555999999999999999999999");
console.log(ff)
console.log(typeof ff)

// M2
let ff2 = 3333333333334893484444444444444444444444444444444444444444444444444444444444339999999999999976555555555555555555999999999999999999999n;

console.log(ff2)
console.log(typeof ff2)


// Symbol

const sym = Symbol("Rahul")

console.log(sym);
console.log(typeof sym);

const sym1 = Symbol("Rahul")

console.log(sym1);
console.log(typeof sym1);

// Here created every symbol is unique with it's datatypes also

console.log(sym==sym1)
console.log(sym===sym1)

const ss = Symbol(3.14)
console.log(ss) 
console.log(typeof ss)

// Following will show data type  as function  & if we put blank () like above it will show dataTyoe as symbol 
const ss1 = Symbol
console.log(ss1) 
console.log(typeof ss1) 

