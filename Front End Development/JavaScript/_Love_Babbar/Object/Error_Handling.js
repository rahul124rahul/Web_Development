// ERROR handling 

// try - catch - finally method


// There are 2 types of errors
	// 1) Compile time errors => These are detected at the parsing time.
	// 2) Run time erroe =>  While code executing 




// Compile-time error (syntax error)

// console.log(1; 



// Runtime Error

// console.log(x)





// Error Handling 
// try catch method

try{
	console.log("I am in try before error code..");
	// console.log(x);
	console.log("My Name is Rahul")
	console.log("The code after the error caught are not executed in this try block..")
}
catch(e){
	// In this block we can do following things
	// retry logic
	// Fallback mechanism
	// Logging
	// custom error
	console.log("I am inside the caught block after ERROR caught.")
	console.log("My ERROR is !!!!!!!!!!!!! \n"+e)
}


// Finally block => this bolck always run either ERRROR found or not

try{
	console.log("Before ERROR")
	console.log(p)
	console.log("After ERROR")
}
catch(e){
	console.log("My ERROR is : "+e);
}
finally{
	console.log("I am finally block I am always Executed")
}




// Custom ERROR
// by using throw
// This is own ERROR for throwing the in certain situations

// try{
// 	console.log(pp);
// }
// catch{
// 	throw new Error("Moye Moye, Haramkhor declare kar pahile !!!!!!!!!!!");
// }




// other way
let ErrorCode = 100234;
if(ErrorCode==100234){
	throw new Error("Invalid Document Nalayaka!!!")
}