const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// also another option could be mouseover event
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})