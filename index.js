const form = document.getElementById('form');
const inputs = document.querySelectorAll('.form-input');

function onSubmit(e) {
  e.preventDefault();
  const obj = {};

  inputs.forEach(input => {
    if (input.value) {
      input.classList.remove('input-error')
      obj[input.id] = input.value;
    } else {
      input.classList.add('input-error')
    }
  })

  const hasError = [...inputs].some(item => item.classList.contains('input-error'))

  if (!hasError) {
    console.log('obj', obj)
  }
}

function handleClick(e) {
  if (e.target.classList.contains('checkbox')) {
    e.target.nextSibling?.classList.toggle('completed')
  } else if (e.target.classList.contains('delete')) {
    e.target.closest('li')?.remove()
  }
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(res => {
    const container = document.createElement('ul')
    container.classList.add('todo-container')
    document.body.appendChild(container)

    res.forEach(todo => {
      const todoLi = document.createElement('li')
      const todoSpan = document.createElement('span')
      const deleteSpan = document.createElement('span')
      const checkbox = document.createElement('input')

      checkbox.classList.add('checkbox')
      todoSpan.classList.add('todo-title')
      deleteSpan.classList.add('delete')

      todoLi.id = todo.id
      checkbox.type = 'checkbox'
      todoSpan.innerText = todo.title
      deleteSpan.innerText = ' DELETE'

      todoLi.appendChild(checkbox)
      todoLi.appendChild(todoSpan)
      todoLi.appendChild(deleteSpan)
      container.appendChild(todoLi)
    })

    container.addEventListener('click', handleClick)
  })
