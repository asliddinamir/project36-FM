const btns = document.querySelectorAll('button')
const slide1 = document.querySelector('#slide1')
const slide2 = document.querySelector('#slide2')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        slide1.classList.toggle('hidden')
        slide2.classList.toggle('hidden')
    })
})