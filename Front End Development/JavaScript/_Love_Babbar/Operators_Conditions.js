// Operators

// Arithmetic operators
let a=12;
let b=2;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)


console.log()
// Unary operators

let r = 23;
console.log(r++);
console.log(++r);
console.log(--r);
console.log(r--);
console.log(r);



console.log()
// Assignment operators
let p =12;
console.log(p)
p+=2;
console.log(p)
p-=4;
console.log(p)
p*=23
console.log(p)
p/=23
console.log(p)
p**=2
console.log(p)



console.log()
// Comparison operators

let m = 99
let n = "99"

console.log(m==n)
console.log(m>n)
console.log(m>=n)
console.log(m<n)
console.log(m<=n)
console.log(m!=n)
console.log(m===n)
console.log(m!==n)




console.log()
// ternary operator

let age=12;
let status = age>=18 ? "Can Vote" : "Can't vote";
console.log(status);




console.log()
// Logical Operators

console.log(true && true);
console.log(true && false);

console.log(true || true);
console.log(false || true);
console.log(false || false);

console.log(!false);
console.log(!true);


// falsy && truthy


// Falsy
// undefined, null, 0, false, NaN, null


console.log("rahul" && true);
console.log(true && 323);




console.log("\nBitwise Operator")
// Bitwise Opeerators

console.log(2&5)
console.log(2|5)
console.log(~0)
console.log(2^2)
console.log(2^3)
console.log(5<<1)
console.log(5>>1)




// Conditional statements
// if-else
// switch
console.log("\nConditional statement")

// if-else
let ag = 188
if(ag>18)console.log("Vote karo");
else if(ag==18)console.log("Haramkhor");
else console.log("Can't Vote");

// Nested if is also applicable



// switch

console.log("\nSwitch case")
let input = 'B'

switch(input){
	case 'A':console.log("INPUT is : A")
	break;
	case 'B':console.log("INPUT is : B")
	break;
	case 'C':console.log("INPUT is : C")
	break;
	case 'D':console.log("INPUT is : D")
	break;
	case 'E':console.log("INPUT is : E")
	break;
	default : console.log("Incorrect input");
}