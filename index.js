// Cargamos nestras variables
let buttonSubmit = document.getElementById("buttonSubmit");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let punctuation = document.getElementById("punctuation");
let principal = document.getElementById("principal");
let secundario = document.getElementById("secundario");

let valorImprimir = [];
//ocultamos la ventana principal y mostramos la secundaria
buttonSubmit.addEventListener("click", () => {
    principal.classList.remove("block");
    principal.classList.add("hidden");
    secundario.classList.remove("hidden");
    secundario.classList.add("block");
});


//cargaremos a nuestro array los valores el valor del boton seleccionado al seleccionar otro boton se borrara el valor anterior
button1.addEventListener("click", () => {
    let valor = button1.textContent;
    let number = Number(valor);
    if (valorImprimir.length !== 0) {
        valorImprimir = [];
        valorImprimir.push(number);
    } else {
        valorImprimir.push(number);
    }
    punctuation.innerText = `You selected ${valorImprimir[0]} out of 5`;

    // console.log(valorImprimir[0]);
});

button2.addEventListener("click", () => {
    let valor = button2.textContent;
    let number = Number(valor);
    if (valorImprimir.length !== 0) {
        valorImprimir = [];
        valorImprimir.push(number);
    } else {
        valorImprimir.push(number);
    }
    punctuation.innerText = `You selected ${valorImprimir[0]} out of 5`;
    // console.log(valorImprimir[0]);
});

button3.addEventListener("click", () => {
    let valor = button3.textContent;
    let number = Number(valor);
    if (valorImprimir.length !== 0) {
        valorImprimir = [];
        valorImprimir.push(number);
    } else {
        valorImprimir.push(number);
    }
    punctuation.innerText = `You selected ${valorImprimir[0]} out of 5`;
    // console.log(valorImprimir[0]);
});

button4.addEventListener("click", () => {
    let valor = button4.textContent;
    let number = Number(valor);
    if (valorImprimir.length !== 0) {
        valorImprimir = [];
        valorImprimir.push(number);
    } else {
        valorImprimir.push(number);
    }
    punctuation.innerText = `You selected ${valorImprimir[0]} out of 5`;
    // console.log(valorImprimir[0]);
});

button5.addEventListener("click", () => {
    let valor = button5.textContent;
    let number = Number(valor);
    if (valorImprimir.length !== 0) {
        valorImprimir = [];
        valorImprimir.push(number);
    } else {
        valorImprimir.push(number);
    }
    punctuation.innerText = `You selected ${valorImprimir[0]} out of 5`;
    // console.log(valorImprimir[0]);
});







// guardamos el valor del button seleccionado por el usuario en valorImprimir
// button1.addEventListener("click", () => {
//     if (valorImprimir=[]) {
//         valorImprimir.push(button1.textContent);
//     } else {
//         valorImprimir=[];
//         valorImprimir.push(button1.textContent);
//     }
// });
// console.log(valorImprimir);
// button2.addEventListener("click", () => {
//     valorImprimir.push(button2.textContent);
// })
// // console.log(valorImprimir);



