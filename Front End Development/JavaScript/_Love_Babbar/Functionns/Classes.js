// Classes

// classes consists of state/properties and Behaviour/Functionality


class Human{
	// Properties
	age = 21;		// Public

	//  # is used to mark the property as a private
	#wt = "67Kg";  // private
	ht;


	// Constructor
	constructor(a,h,w){
		this.age = a;
		this.ht = h;
		this.#wt = w;
	}





	// Behaviour

	myAge(){
		console.log(`My age is ${this.age}`)
	}

	describe = () => console.log(`My height is ${this.ht} & weight is ${this.#wt}.`)


	// getter & setter
	// For accessing the private field of the classes from the outside of the class

	get getWt(){
		return this.#wt;
	}


	// The following function is giving ERROR after call
	set setwt(val){
		this.#wt = val;
	}

}

let ob1 = new Human(25,5.7,68);

console.log(ob1)
console.log(ob1.age)
console.log(ob1.ht)
console.log(ob1.getWt)

// ob1.setwt(999);

ob1.myAge()
ob1.describe()




// Default parameter

function myName(name = "Sonu",sname="Dadge"){
	console.log(`My name is ${name} ${sname}`);
}

myName("Rahul")
myName("Rahul","Pandit")
myName("Piya","")


function upper(f , s=f.toUpperCase()){
	console.log(`${f} : ${s}`)
}

upper("Rahul","Rakul")
upper("Rahul")



// We can pass object or array in the default value as  for parameters
function fun1(arr = [12,"34","Rahul loves Piya",323.445]){
	console.log("My value is : "+arr)
}

fun1(323);
fun1({age:12 , ht:"178cm" , wt:90});
fun1()
// following is important
fun1(null)
fun1(undefined)




function fun2(obj= {age:12 , ht:"178cm" , wt:90}){
	console.log("My value is : "+obj)
}
fun2(323);
fun2([43454,"49438503",true ]);
fun2()





// Passing function as a parameter in function 

let age2 = () => 25;

function namAge(name = "Rahul" , age = age2()){
	console.log(`My Name is ${name} & age is ${age}`);
}

namAge();
namAge("Piya");
namAge("MV",22);