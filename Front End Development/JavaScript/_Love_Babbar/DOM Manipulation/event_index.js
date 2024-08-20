
// let start_event_monitoring = monitorEvent(document);
// let end_event_monitoring = unmonitorEvent(document);


function changePara1(event){
	console.log(event)
	let para1 = document.querySelector('#fp')
	
	console.log(para1)
	
	para1.textContent = "Hiii Sonu!!"
}

let para1 = document.querySelector('#fp')

// Adding the event listener
para1.addEventListener('click',changePara1)

// removing the event listener
// for removing the eventListener we must have to pass the same function which has passed at time of adding eventListener
// para1.removeEventListener('click',changePara1);