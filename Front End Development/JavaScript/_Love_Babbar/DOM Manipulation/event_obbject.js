let anchor = document.getElementById('a1')

anchor.addEventListener('double click', function(){
	event.preventDefault();
	anchor.textContent = "Don't touch Haramkhor!!";
})






//    M1

// let paras = document.querySelectorAll('p');

// function alertMsg(event){
// 	alert(`You have clicked on the para no. : ${event.target.textContent}`);
// }

// for(let i=2;i<paras.length ; i++){
// 	let para = paras[i];
// 	para.addEventListener('click',alertMsg)
// }




//    M2

function alertpara(event){
	if(event.target.nodeName == "SPAN"){
		alert(`You have pressed on ${event.target.textContent}`)
	}
}

let mydiv = document.querySelector('#wrapper');

document.addEventListener('click', alertpara);