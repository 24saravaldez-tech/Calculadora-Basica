//let botonNumero = document.querySelectorAll('.boton-numero')
let input = document.querySelector('.salida')
//let operaciones = document.querySelectorAll('.operador')
//let noPermitidosInicio = '*/+%'
//let operadoresNormales = '/*-+%'
let eliminarTodo = document.querySelector('.eliminar')
let eliminarCaracter = document.querySelector('#borrar')


let botones = document.querySelectorAll('.numero')
let operadores = document.querySelectorAll('.operador')
//let input = document.querySelector('#pantalla')

botones.forEach(btn => {
    btn.addEventListener('click', (event) => {
        input.value += event.target.textContent
    })
})

const buscarMultiplicacion = (datos) => {
    let arreglo = []
    while (datos.includes('*') || datos.includes('/')) {
        for (let i = 0; i < datos.length; i++) {
            if (datos[i] == '*' || datos[i] == '/') {
                arreglo[0] = datos[i - 1]
                arreglo[1] = datos[i]
                arreglo[2] = datos[i + 1]

                let decimales = controlDecimales(arreglo)

                if (decimales){
                    input.value = 'Doble Punto'
                    return;
                }

                let calculo = calcular(arreglo)
                datos.splice(i - 1, 3, calculo)
            }

        }
    }

    return datos;
}

const operacion = () => {
    let resultado  = 0
    let operacionLarga = input.value
    let operadoresTamanio = 0
    let operadores = '+-/*'
    let datos = []

    datos = operacionLarga.trim().split(' ')

    for(let b =0; b < datos.length; b++)
    {
        if(datos[b] == ""){
            let signos = datos[b-1] + datos[b+1]
            switch(signos){
                case '+-':
                    datos.splice(b-1, 3, '-')
                    break;
                case '++':
                    datos.splice(b-1, 3, '+')
                    break;
                case '--':
                    datos.splice(b-1, 3, '+')
                    break;
                case '-+':
                    datos.splice(b-1, 3, '-')
                    break;
                case '*-':
                    datos.splice(b, 3, parseFloat(datos[b+2])*-1)

                    break;
                case '*+':
                    datos.splice(b-1, 3, '*')
                    break;
                case '/+':
                    datos.splice(b-1, 3, '/')
                    break;
                case '/-':
                    datos.splice(b, 3, parseFloat(datos[b+2]) * -1)
                    break;
                default:
                    return 'Math Error'
            }

        }else if(operadores.includes(datos[b])  && b == 0){
            if(datos[b] == '-'){
                datos[b+1] = parseFloat(datos[b+1]) * -1
            }else{
                datos[b+1] = parseFloat(datos[b+1]) * 1
            }
            datos.shift()
        }
    }

    console.log(datos)

   for (let i = 0; i <= datos.length; i++) {
        if (operadores.includes(datos[i])) {
            console.log(datos[i])
            operadoresTamanio++
        }
    }

    datos = buscarMultiplicacion(datos)


    for (let j = 0; j < operadoresTamanio; j++) {
       if(datos.length >= 3){
        let decimales = controlDecimales(datos)
        if(decimales) {
            input.value = 'Doble punto'
            return;
        }
            resultado = calcular(datos)
       }else{
            resultado = datos[0]
       }
    }

    input.value = resultado
}

const calcular = (datos) => {
    let calculo;

    switch (datos[1]) {
        case '+':
            calculo = parseFloat(datos[0]) + parseFloat(datos[2])

            datos.shift()
            datos.shift()
            datos.shift()
            datos.unshift(calculo)
            return calculo;
            break;
        case '-':
            calculo = parseFloat(datos[0]) - parseFloat(datos[2])
            datos.shift()
            datos.shift()
            datos.shift()
            datos.unshift(calculo)
            return calculo;
            break;
        case '*':
            calculo = parseFloat(datos[0]) * parseFloat(datos[2])
            datos.shift()
            datos.shift()
            datos.shift()
            datos.unshift(calculo)
            return calculo;
            break;
        case '/':
            calculo = parseFloat(datos[0]) / parseFloat(datos[2])
            datos.shift()
            datos.shift()
            datos.shift()
            datos.unshift(calculo)
            return calculo;
            break;
        default:
            return 'expresion mal formada'
    }
}


operadores.forEach(operador => {
    operador.addEventListener('click', (event) => {
        if (event.target.textContent == '=') {
            operacion()
        } else {
            input.value += ' ' + event.target.textContent + ' '
        }
    })
})


const controlDecimales = (arreglo) => {
    let count = 0
    //[2.5.5, +, 3]
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo[i].length; j++) {
            if (arreglo[i][j] == '.') {
                count++
            }
        }

        if (count > 1) {
            return true
        }


// definir nuestra calculadora
// Hacer operaciones Largas.
// Aceptar Negativos
// 5
// solo signos mas y menos juntos.






// // eliminarTodo.addEventListener('click', (event) => {
// //     input.value = ''
// //     return
// // })



// // eliminarCaracter.addEventListener('click', (event) => {
// //     input.value = input.value.slice(0, -1)
// //     return
// // })



// // resultado.addEventListener('click', (event) => {
// //     input.value = eval(input.value)  //no es la fomra recomendada por varias razones: mal rendimiento, dificultad de depuración e inseguirdad
// //  //return
// // })



// // document.addEventListener('keydown', (event) => {

// //     if(event.key == 'Backspace'){
// //         input.value = input.value.slice(0, -1)
// //         return

// //     }if(event.key == 'Delete'){
// //         input.value = ''
// //         return

// //     } if(event.key == 'Enter'){
// //         input.value = eval(input.value)
// //     }


// //     if (input.value.length < 1 && noPermitidosInicio.includes(event.key)) {
// //         alert('No se permiten estas operaciones al inicio.')
// //         input.value = ''
// //         return
// //     } 
    
// //     if (operadoresNormales.includes(guardarUltimoCaracter(input.value)) && operadoresNormales.includes(event.key)) {
// //         input.value = input.value.slice(0, -1)
// //         input.value += event.key
// //         return
// //     }


// //     if (operadoresNormales.includes(event.key)) {
// //         input.value += event.key
// //         return
// //     }



// //     if(numeros.includes(event.key)){
// //         input.value += event.key
// //         return
// //     }

// // })