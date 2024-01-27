var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var btn3 = document.querySelector('.btn3')
var pops = document.querySelector('.pop_screen')
var inp1 = document.querySelector('.inp1')
var inp2 = document.querySelector('.inp2')
var text = document.querySelector('.text')
var pop_up = document.querySelector('.click_to_popup')
var main = document.querySelector('.main')
var alldetete = document.querySelector('.alldelete')
var fav = document.querySelector('.fav')
var edit = document.querySelector('.edit')
var editedTodo = null

function del(event) {
  event.target.parentElement.remove()
}

pop_up.addEventListener('click', () => {
  pops.style.display = 'block'
})

btn3.addEventListener('click', () => {
  pops.style.display = 'none'
  clearvalue()
})

function clearvalue() {
  inp1.value = ''
  inp2.value = ''
  text.value = ''
}

function edited(event) {
  pops.style.display = 'block'
  const todo = event.target.parentElement
  inp1.value = todo.querySelector('h1').innerText
  inp2.value = todo.querySelector('h3').innerText
  text.value = todo.querySelector('p').innerText
  editedTodo = todo
}

btn2.addEventListener('click', (event) => {
  event.preventDefault()

  if (editedTodo) {
    editedTodo.querySelector('h1').innerText = inp1.value
    editedTodo.querySelector('h3').innerText = inp2.value
    editedTodo.querySelector('p').innerText = text.value
    clearvalue()
    pops.style.display = 'none'
    editedTodo = null
  } else {
    let div = document.createElement('div')
    div.setAttribute('class', 'todo')
    div.innerHTML = `<h1>${inp1.value}</h1>
    <h3>${inp2.value}</h3>
    <p>${text.value}</p>
    <button class="edit" onclick="edited(event)">Edit</button>
    <button class="btn1" onclick="del(event)">delete</button>
    <button class="fav" onclick="favorite(this)"><i class="fa-regular fa-heart"></i></button>`
    main.append(div)

    pops.style.display = 'none'
    clearvalue()
  }
})

alldetete.addEventListener('click', () => {
  var todos = document.querySelectorAll('.todo')
  todos.forEach((val) => {
    val.remove()
  })
})

updateAllDeleteButtonVisibility()

function favorite(fav) {
  fav.classList.toggle('clicked')
}

// var btn1 = document.querySelector('.btn1')
// var btn2 = document.querySelector('.btn2')
// var btn3 = document.querySelector('.btn3')
// var pops = document.querySelector('.pop_screen')
// var inp1 = document.querySelector('.inp1')
// var inp2 = document.querySelector('.inp2')
// var text = document.querySelector('.text')
// var pop_up = document.querySelector('.click_to_popup')
// var main = document.querySelector('.main')
// var alldetete = document.querySelector('.alldelete')
// var fav = document.querySelector('.fav')
// var edit = document.querySelector('.edit')

// // pop_screen2, pop2, inp3, inp4, btn4, btn5
// var pop_screen2 = document.querySelector('.pop_screen2')
// var pop2 = document.querySelector('.pop2')
// var inp3 = document.querySelector('.inp3')
// var inp4 = document.querySelector('.inp4')
// var btn4 = document.querySelector('.btn4')
// var btn5 = document.querySelector('.btn5')
// var text2 = document.querySelector('.text2')
// var todoEvent = null

// function del(event) {
//   event.target.parentElement.remove()
// }

// pop_up.addEventListener('click', () => {
//   pops.style.display = 'block'
// })

// btn3.addEventListener('click', () => {
//   pops.style.display = 'none'
// })

// function clearvalue() {
//   inp1.value = ''
//   inp2.value = ''
//   text.value = ''
// }

// btn2.addEventListener('click', (event) => {
//   event.preventDefault()
//   let div = document.createElement('div')
//   div.setAttribute('class', 'todo')
//   let newvalue = (div.innerHTML = `<h1>${inp1.value}</h1>
//   <h3>${inp2.value}</h3>
//   <p>
//     ${text.value}
//   </p>
//   <button class="edit" onclick="edited(event)">Edit</button>
//   <button class="btn1" onclick="del(event)">delete</button>
//   <button class="fav" onclick="favorite(this)"><i class="fa-regular fa-heart"></i></button>`)
//   main.append(div)

//   pops.style.display = 'none'
//   clearvalue()
// })

// function edited(event) {
//   pop_screen2.style.display = 'block'
//   const todoEvent = event.target.parentElement
//   inp3.value = todoEvent.querySelector('h1').innerText
//   inp4.value = todoEvent.querySelector('h3').innerText
//   text2.value = todoEvent.querySelector('p').innerText
// }

// btn4.addEventListener('click', () => {
//   todoEvent.querySelector('h1').innerText = inp3.value
//   todoEvent.querySelector('h3').innerText = inp4.value
//   todoEvent.querySelector('p').innerText = text2.value

//   pop_screen2.style.display = 'none'
//   cleareditedvalue()
// })

// btn5.addEventListener('click', () => {
//   pop_screen2.style.display = 'none'
//   cleareditedvalue()
// })

// alldetete.addEventListener('click', () => {
//   let todos = document.querySelectorAll('.todo')

//   todos.forEach((val) => {
//     val.remove()
//   })
// })

// function favorite(fav) {
//   fav.classList.toggle('clicked')
// }

// function cleareditedvalue() {
//   inp3.value = ''
//   inp4.value = ''
//   text2.value = ''
//   todoEvent = null
// }
