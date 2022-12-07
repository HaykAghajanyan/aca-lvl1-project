const form = document.getElementById('form');
const inputs = document.querySelectorAll('.form-input');


function onSubmit(e) {
  e.preventDefault();
  const obj = {};

  inputs.forEach(input => {
    if(input.value) {
      input.classList.remove('input-error')
      obj[input.id] = input.value;
    } else {
      input.classList.add('input-error')
    }
  })

  const hasError = [...inputs].some(item => item.classList.contains('input-error'))

  if(!hasError) {
    console.log('obj', obj)
  }
}
