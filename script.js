const form = document.querySelector('.form')
const Input = document.querySelectorAll('.inp')
const inputname = document.querySelector('#name')
const inputsurname = document.querySelector('#surname')
const inputtel = document.querySelector('#tel')
const inputemail = document.querySelector('#email')
const taskList = document.querySelector('.task-list')
const emptyList = document.querySelector('.empty-list')
const btn = document.querySelector('.btn-primary')


const addTask = e => {
	e.preventDefault()
	const name = inputname.value
	const surname = inputsurname.value
	const tel = inputtel.value
	const email = inputemail.value
	const taskHTMl = `
		<li class="list-group-item">
			<p class='labelname p'>${name}</p> 
			<p class='labelsurname p'>${surname}</p>
			<p class='labeltel p'>${tel}</p>
			<p class='labelemail p'>${email}</p>
		<div class="button">
			<button type='button' class='btn-action' data-action='delete'> Видалити
			</button>
		</div>
		</li>
	`
	taskList.insertAdjacentHTML('beforeend', taskHTMl)
	inputname.value = '';
	inputsurname.value = '';
	inputtel.value = '';
	inputemail.value = '';	
	if (taskList.children.length > 1) {
		emptyList.classList.add('hidden');
}
}
const deleteTask = e => {
	if (e.target.dataset.action === 'delete') {
		const parentNode = e.target.closest('.list-group-item')
		parentNode.remove()
	}
	if (taskList.children.length === 1) {
    emptyList.classList.remove('hidden');
	}
}


form.addEventListener('submit', addTask)
taskList.addEventListener('click', deleteTask);