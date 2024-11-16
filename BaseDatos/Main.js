import {assigned as tops} from "./Tops.js";
console.log(tops)

export function GenerarListado(Categoria){
    console.log("Categoria:", Categoria)
    const Lista = document.getElementById(Categoria);
    const Top = tops[Categoria].Top
    Top.forEach((item, index) => {
        // crear contenedor
        const Div = document.createElement("div");
        Div.classList.add(Categoria);

        // crear HTML
        Div.innerHTML = `
        <h2>${index + 1}</h2>
        <img src="${item.Logo}" alt="Logo de ${item.Titulo}" width="100">
        <h3>${item.Titulo}</h3>
        <p class="descripcion">${item.Sinopsis}</p>
        <p><strong>Estrellas:</strong> ${item.Estrellas} / 5</p>
    `;
        Lista.appendChild(Div)
        
    });
}