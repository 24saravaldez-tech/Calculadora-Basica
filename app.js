
let botonNumero = document.querySelectorAll('.boton-numero')
let input = document.querySelector('.salida')
let operaciones = document.querySelectorAll('.operador')
let noPermitidosInicio = '*/+%'
let operadoresNormales = '/*-+%'
let eliminarTodo = document.querySelector('.eliminar')
let eliminarCaracter = document.querySelector('#borrar')
let resultado = document.querySelector('.resultado')
let numeros = '0123456789'


function guardarUltimoCaracter(caracter){
   let ultimo = caracter.slice(-1);
   return ultimo
}

botonNumero.forEach(btn => {
    btn.addEventListener('click', (event) =>{
        input.value += event.target.textContent
        guardarUltimoCaracter(input.value)
    })
})

botonNumero.forEach(btn => {
    btn.addEventListener('keydown', (event) =>{
        input.value += event.key
        guardarUltimoCaracter(input.value)
    })
})


operaciones.forEach(btn => {
    btn.addEventListener('click', (event) => {
        if(input.value.length < 1 && noPermitidosInicio.includes(event.target.textContent)){
            alert('No se permiten estas operaciones al inicio.')
            input.value = ''
        }
        
        if (operadoresNormales.includes(guardarUltimoCaracter(input.value))){
          input.value = input.value.slice(0, -1)
          input.value += event.target.textContent
          guardarUltimoCaracter(input.value)

        } else {

        input.value += event.target.textContent
        guardarUltimoCaracter(input.value)
        }

        })
    } )



eliminarTodo.addEventListener('click', (event) => {
    input.value = ''
    return
})



eliminarCaracter.addEventListener('click', (event) => {
    input.value = input.value.slice(0, -1)
    return
})



resultado.addEventListener('click', (event) => {
    input.value = eval(input.value)  //no es la fomra recomendada por varias razones: mal rendimiento, dificultad de depuración e inseguirdad
 return
})



document.addEventListener('keydown', (event) => {

    if(event.key == 'Backspace'){
        input.value = input.value.slice(0, -1)
        return

    }if(event.key == 'Delete'){
        input.value = ''
        return

    } if(event.key == 'Enter'){
        input.value = eval(input.value)
        return
    }


    if (input.value.length < 1 && noPermitidosInicio.includes(event.key)) {
        alert('No se permiten estas operaciones al inicio.')
        input.value = ''
        return

    } 
    
    if (operadoresNormales.includes(guardarUltimoCaracter(input.value)) && operadoresNormales.includes(event.key)) {
        
        input.value = input.value.slice(0, -1)
        input.value += event.key
        return
    }


    if (operadoresNormales.includes(event.key)) {
        input.value += event.key
        return
    }



    if(numeros.includes(event.key)){
        input.value += event.key
        return
    }

})



                      // input.value = input.value.replace(input.value[input.value.length - 1], event.target.textContent)
        //} else if (input.value[input.value.length -1].includes(operadoresNormales)) {
          //  alert('No se pueden repetir caracteres')
          //  input.value += event.target.textContent
          
// eliminarCaracter.addEventListener('keydown', (event) => {
//     if(event.key == "Delete"){
//         input.value = ''                                         //NO FUNCIONO PORQUE SE LE ESTABA DANDO EL EVENT.KEY A UNA TECLA, CUANDO DEBIA OCURRIR EN TODO EL DOCUMENTO
//     } 
// })
// eliminarCaracter.addEventListener('keydown', (event) => {        //NO FUNCIONO PORQUE SE LE ESTABA DANDO EL EVENT.KEY A UNA TECLA, CUANDO DEBIA OCURRIR EN TODO EL DOCUMENTO
//     if(event.key == "Backspace"){
//         input.value = input.value.slice(0, -1)
//     } 
// })


    // if(event.key == '1'){
    //     input.value += 1
    // } 
    
    // if(event.key == '2'){
    //     input.value += 2
    // } 
    
    // if(event.key == '3'){
    //     input.value += 3
    // } 
    
    // if(event.key == '4'){
    //     input.value += 4
    // } 
    
    // if(event.key == '5'){
    //     input.value += 5
    // } 
    
    // if(event.key == '6'){
    //     input.value += 6
    // } 
    
    // if(event.key == '7'){
    //     input.value += 7

    // } if(event.key == '8'){
    //     input.value += 8

    // } if(event.key == '9'){
    //     input.value += 9

    // } if(event.key == '0'){
    //     input.value += 0
    // }
    
       
