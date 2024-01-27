var main = document.querySelector('.main')
var con = document.querySelector('.container')
var inp1 = document.querySelector('.inp1')
var inp2 = document.querySelector('.inp2')
var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var btn3 = document.querySelector('.btn3')
var btn4 = document.querySelector('.btn4')
var text = document.querySelector('.text')
var add_item = document.querySelector('.add_item')
var pop_screen = document.querySelector('.pop_screen')
var pop = document.querySelector('.pop_up')
var alldelete = document.querySelector('.alldelete')
var inputForEdit = null
var heartIcon = document.getElementById('icon')

function del(event) {
  event.target.parentElement.remove()
}

add_item.addEventListener('click', (event) => {
  event.preventDefault()
  pop_screen.style.display = 'block'
})

btn4.addEventListener('click', (event) => {
  event.preventDefault()
  pop_screen.style.display = 'none'
})

alldelete.addEventListener('click', (event) => {
  event.preventDefault()

  let todo = document.querySelectorAll('.container')

  todo.forEach((val) => {
    val.remove()
  })
})

function clearThis() {
  inp1.value = ''
  inp2.value = ''
  text.value = ''
}

function edited(event) {
  event.preventDefault()

  var retrive = event.target.parentElement
  inp1.value = retrive.querySelector('h1').innerText
  inp2.value = retrive.querySelector('h4').innerText
  text.value = retrive.querySelector('p').innerText
  inputForEdit = retrive

  pop_screen.style.display = 'block'
}

btn3.addEventListener('click', (event) => {
  event.preventDefault()

  if (inputForEdit) {
    inputForEdit.querySelector('h1').innerText = inp1.value
    inputForEdit.querySelector('h4').innerText = inp2.value
    inputForEdit.querySelector('p').innerText = text.value

    pop_screen.style.display = 'none'
    inputForEdit = null
    clearThis()
  } else {
    const div = document.createElement('div')
    div.setAttribute('class', 'container')
    div.innerHTML = ` <h1>${inp1.value}</h1>
  <h4 style="text-decoration: underline; color: rgb(60, 60, 60)">${inp2.value}</h4>
  <p>${text.value}</p>
  <button class="btn1" onclick = "edited(event)" >Edit</button>
  <button class="btn2" onclick="del(event)">Delete</button>
  <button id="icon" onclick="fav(this)">
  <i class="fa-regular fa-heart"></i>
</button>`

    main.append(div)
    clearThis()
    pop_screen.style.display = 'none'
  }
})

function fav(fav) {
  fav.classList.toggle('clicked')
}

// alldelete.addEventListener('click', (event) => {
//   event.preventDefault()
//   let todos = document.querySelectorAll('.container')

//   todos.forEach((val) => {
//     val.remove()
//   })
// })

// add_item.addEventListener('click', () => {
//   pop_screen.style.display = 'block'
// })

// function del(event) {
//   event.target.parentElement.remove()
// }

// function clearAll() {
//   inp1.value = ''
//   inp2.value = ''
//   text.value = ''
// }

// function edited(event) {
//   pop_screen.style.display = 'block'
//   const inpvalue = event.target.parentElement

//   inp1.value = inpvalue.querySelector('h1').innerText
//   inp2.value = inpvalue.querySelector('h3').innerText
//   text.value = inpvalue.querySelector('p').innerText
//   inputForEdit = inpvalue
// }
// btn3.addEventListener('click', (event) => {
//   event.preventDefault()

//   if (inputForEdit) {
//     inputForEdit.querySelector('h1').innerText = inp1.value
//     inputForEdit.querySelector('h3').innerText = inp2.value
//     inputForEdit.querySelector('p').innerText = text.value
//     clearAll()
//     pop_screen.style.display = 'none'
//     inputForEdit = null
//   } else {
//     let div = document.createElement('div')
//     div.setAttribute('class', 'container')
//     div.innerHTML = `<h1>${inp1.value}</h1>
//         <h3>${inp2.value}</h3>
//         <p>${text.value} </p>
//         <button class="btn1"  onclick = "edited(event)" >Edit</button>
//         <button class="btn2" onclick="del(event)">Delete</button>`

//     main.append(div)

//     pop_screen.style.display = 'none'
//     clearAll()
//   }
// })

// btn4.addEventListener('click', () => {
//   pop_screen.style.display = 'none'
// })

// heartIcon.addEventListener('click', () => {
//   this.classList.toggle('clicked')
// })
