import {assigned as tops} from "./Tops.js";

export function GenerarListado(Categoria){
    const Listah1 = document.getElementById("TituloJS")
    const Lista = document.getElementById("ListaJS");
    const Top = tops[Categoria].Top
    Top.sort((a,b) => b.Estrellas - a.Estrellas);

    const h1 = document.createElement("h1");
    h1.classList.add("centro_inicio")
    h1.innerHTML = `${tops[Categoria].Titulo}`
    Listah1.appendChild(h1)

    const Tab = document.getElementById("TabJS")
    const title = document.createElement("Title")
    title.innerHTML = `MangaVault | ${tops[Categoria].Titulo}`
    

    Top.forEach((item, index) => {
        const Div = document.createElement("div");
        Div.classList.add("caja");
        Div.innerHTML = `
                <a href ="Reseña.html?categoria=${Categoria}&titulo=${item.Titulo}" class = "estilo">
                    <h2>${index + 1}.</h2>
                    <figure>
                        <img src="${item.Logo}" alt="Logo de ${item.Titulo}" width="200">
                    </figure>
                    <div class = "textos">
                        <h3 class = "titulos_top">${item.Titulo}</h3>
                        <p class="descripcion">${item.Sinopsis}</p>
                        <p><strong>Estrellas:</strong> ${item.Estrellas} / 5</p>
                    </div>
                </a>
    `;
        Lista.appendChild(Div);
    });

}

export function GenerarResena(){
    const parametros = new URLSearchParams(window.location.search);
    const categoria = parametros.get('categoria');
    const titulo = parametros.get('titulo');
    console.log(categoria, titulo)
    const todo = tops[categoria].Top
    const item = todo.find(item => item.Titulo === titulo);
    const Listah1 = document.getElementById("TituloJS")
    const h1 = document.createElement("h1");
    h1.classList.add("centro_inicio")
    h1.innerHTML = `MangaVault | Reseña de: ${titulo}`
    Listah1.appendChild(h1)

    const Tab = document.getElementById("TabJS")
    const title = document.createElement("Title")
    title.innerHTML = `MangaVault | Reseña de: ${titulo}`
    Tab.appendChild(title)

    const resena = document.getElementById("ResenaJS");
    const Div = document.createElement("article");
    Div.classList.add("resenas");
    Div.innerHTML = `
        <figure>
            <img class="ampliar" src="${item.Logo}" alt="Logo de ${item.Titulo}" width="200px">
        </figure>
        <div class = "textos">
            <p class="descripcion">${item.Resena}</p>
            <p><strong>Estrellas:</strong> ${item.Estrellas} / 5</p>
        </div>
    `;
    resena.appendChild(Div)
}