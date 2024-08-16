// Math object

console.log("Math Object")

console.log(Math.PI)
console.log(Math.max(2,22,32,1,-1,122332))
console.log(Math.min(2,22,32,1,-1,122332))
console.log(Math.round(2323.56))
console.log(Math.round(2323.44))
console.log(Math.round(2323.50))

console.log(Math.floor(2323.50)) 
console.log(Math.floor(-232.50)) 
console.log(Math.ceil(-232.50)) 
console.log(Math.ceil(232.1573)) 

console.log(Math.abs(-1))
console.log(Math.abs(-5.2323))
console.log(Math.abs(234.23))
console.log(Math.abs(23423))


console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

console.log(Math.sqrt(4))
console.log(Math.sqrt(12))
console.log(Math.sqrt(34))
console.log(Math.sqrt(81))

console.log(Math.pow(2,5))
console.log(Math.pow(9,3))


// Date object

let curr = new Date();

console.log(curr)

let newDate = new Date("May 30 2003 15:23")

console.log(newDate)

let date = new Date(2002,4,30,15,23)
console.log(date)
console.log(date.getDay())
console.log(date.getFullYear())
console.log(date.getMonth())


console.log()
console.log(curr.getDate())
console.log(curr.getMonth())
console.log(curr.getFullYear())

console.log(curr.getHours())
console.log(curr.getMinutes())
console.log(curr.getSeconds())

console.log(curr.getTime())
console.log(curr.getMilliseconds())

console.log()
console.log(date.setFullYear(2024)) ;
console.log(date);
