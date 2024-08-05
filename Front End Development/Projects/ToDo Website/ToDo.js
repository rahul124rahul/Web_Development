let list=[
	{
		item:'Buy Cake' , 
		duedate:'11/11/2011'
	},
	{
		item: 'Go to eat',
		duedate:'11/11/2011',
	}
];
displayToDoList()

function addToDo(){
	let inp = document.querySelector('#input');
	let inpdate = document.querySelector('#date');
	let inpVal = inp.value;
	let dateVal = inpdate.value;

	// Check following process by own
	if(inpVal=='' || dateVal=='' || inpVal==undefined)return;

	list.push({item:inpVal, duedate:dateVal})
	inp.value='';
	inpdate.value='';
	console.log(list)
	displayToDoList()
}

function displayToDoList(){
	let tag = document.querySelector('.table_to_do');
	
	let newhtml=``;

	for(i in list){
		let {item,duedate} = list[i];
		newhtml+=`
		<span>${item}</span>
		<span>${duedate}</span>
		<button class="delete" onclick="list.splice(${i},1); displayToDoList() ">Delete</button>
		`;
	}
	tag.innerHTML = newhtml;
}