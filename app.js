
let botonNumero = document.querySelectorAll('.boton-numero')
let input = document.querySelector('.salida')
let operaciones = document.querySelectorAll('#operadores')

botonNumero.forEach(btn => {
    btn.addEventListener('click', (event) =>{
        input.value += event.target.textContent
    })
})

operaciones.forEach











// let uno = document.querySelector('#uno')
// uno.setAttribute('valor', '1')

// let botonNumeros = [uno]


// // const imprimirNumeros = () => {
// //     botonNumeros.addEventListener('click', (event) => {
//         let resultado = botonNumeros[]
// //         return resultado
// //     })
// // }

// console.log(resultado)

// let resultado = ''

// 


// console.log(botonNumero)


