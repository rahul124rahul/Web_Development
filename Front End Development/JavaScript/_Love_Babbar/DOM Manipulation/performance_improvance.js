// code1

const t1 = performance.now();
for(let i=0;i<100 ; i++){
	let para = document.createElement('p');
	para.textContent = "This is para NO.: "+(i+1);
	document.body.appendChild(para);
}
const t2 = performance.now();

console.log("Total time taken by this code will be : "+(t2-t1));



// Code 2


let t3 = performance.now();

let mydiv = document.createElement('div');


for(let i=1 ; i<=100 ; i++){
	let c = document.createElement('p');
	c.textContent = "Para no is : "+i;
	mydiv.appendChild(c);
}

document.body.appendChild(mydiv)
let t4 = performance.now();

console.log("2nd code format takes time : "+(t4-t3));





// Document Fragment


// Best code

let t5 = performance.now();
let fragment  = document.createDocumentFragment();


for(let i=1;i<=100 ; i++){
	let para = document.createElement('p');
	para.textContent = "Frag para no : "+i;
	
	// no reflow and no repaint for the below line 
	fragment.appendChild(para);
}

document.body.appendChild(fragment)
let t6 = performance.now();

console.log("Best Practice time required : "+(t6-t5));