
let botonNumero = document.querySelectorAll('.boton-numero')
let input = document.querySelector('.salida')
let operaciones = document.querySelectorAll('.operador')

botonNumero.forEach(btn => {
    btn.addEventListener('click', (event) => {
        input.value += event.target.textContent
    })
})

operaciones.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.target.textContent.includes()

    })
})
