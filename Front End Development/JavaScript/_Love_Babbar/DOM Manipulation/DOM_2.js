let q = document.querySelector('.r')
console.log(q)

let newele1 = document.createElement('h2')
let newele2 = document.createElement('h2')
let newele3 = document.createElement('h2')
let newele4 = document.createElement('h2')

console.log(newele1)

newele1.textContent = "This is new element i'm adding beforebegin."
newele2.textContent = "This is new element i'm adding afterbegin."
newele3.textContent = "This is new element i'm adding beforeend."
newele4.textContent = "This is new element i'm adding afterend."

// console.log(newele)

q.insertAdjacentElement('beforebegin',newele1)
q.insertAdjacentElement('afterbegin',newele2)
q.insertAdjacentElement('beforeEnd',newele3)
q.insertAdjacentElement('AfterEnd',newele4)
// q.insertAdjacentHTML('beforebegin',newele)





// Removal of the child from the document object of window object

let parent = document.querySelector('.r');
let child = document.querySelector('#three')
// Done the above successfully
parent.removeChild(child);