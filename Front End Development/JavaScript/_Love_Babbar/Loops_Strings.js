// Loops in JavaScript

// for loop
// While loop
// do while loop

// for in loop
// for each loop
// for of loop

for(let i=1 ; i<100;i++){
	if(i%5==0)continue;
	if(i>34)break;
	console.log(i);
}



console.log()
// while loop
let j=1
while(j<20){
	// if(j==23)continue;		This will cause infinte loop insted of this we have to do following 

	if(j==13){
		j++;
		continue;
	}
	console.log(j)
	j++;
}


console.log()
// do while loop
// at least 1 time executes if condition in the while is false then also

let p=1;
do{
	console.log(p++)
}while(p==10);





console.log()
// Stings in JavaScript

let name = "Rahul G. D."
let name1 = 'Rahul G. D.'
let name2 = `Rahul 
G. 
D.`
console.log(name)
console.log(typeof name)
console.log(name1)
console.log(name2)


// Operations on string

let o1 = "English "
let o2 = "Is Very Imaportant.";

console.log(o1+o2)
console.log(`${o1}${o2}`)



console.log(o1.length)
console.log(o2.length)

console.log(o1.toUpperCase())
console.log(o2.toUpperCase())
console.log(o1.toLowerCase());
console.log(o2.toLowerCase());


// How to get particular substring from the string 
let str = "Hello Piya, I love You!!";

console.log(str.substring(6,))


// For ignoring the special character we put \ this forword slash in front of this this will treat it as common character

let sentense = "Hello \"how\" are you ?"
console.log(sentense)

// Split menthod for splittting the content in array on basis of anny character
let words = sentense.split(" ")

console.log(words)


// Join method to join the array content
let jj = words.join('-');
console.log(jj)