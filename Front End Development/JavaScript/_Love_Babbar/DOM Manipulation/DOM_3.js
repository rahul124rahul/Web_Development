let para2 = document.getElementById('spara')

console.log(para2)

console.log(para2.style);

para2.style.backgroundColor = 'Grey';


let div2 =  document.getElementById('sdiv');
console.log(div2)

console.log(div2.style)

console.log(div2.style.cssText)

div2.style.cssText = "background-color:violet; padding: 1rem ; color:red ; "

// .setAttribute

let div1 = document.querySelector('#fdiv')

console.log(div1);

// if class/id not exist in the element new entry is created
div1.setAttribute('class','divClass')

// if class/id exist in the element entry is updated
div1.setAttribute('class','divClass2')

div1.setAttribute('style','background-color: yellow; padding :4rem; ')



div2.setAttribute('style',"padding:6rem; background-color: yellowGreen; ")


// .className
let para1 = document.querySelector('#fpara')
console.log(para1)

// Getting the list of all the classes in the selected element
console.log(para1.classList)
console.log(para1.className)

para1.className = "R Sonu Piya";

console.log(para1.classList)
console.log(para1.className)



// .classList

console.log(div2.classList);
div2.classList = "Rahul Ganesh Dadge"
console.log(div2.classList);

div2.classList.remove("Ganesh")
console.log(div2.classList);
console.log(div2.className); 


// .classList.toggle

// this will add case if not present
div2.classList.toggle("GaneshDadge")
console.log(div2.classList);
console.log(div2.className); 

// this will deleted/removed in case of present
div2.classList.toggle("GaneshDadge")
console.log(div2.classList);
console.log(div2.className); 


// .classList.contains
// it checks presence of the class inside the element
console.log(div2.classList.contains('Rahul'))
console.log(div2.classList.contains('piya'))
console.log(div2.classList.contains('RAHUL'))