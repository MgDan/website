//console.log("hola")//

document.addEventListener('DOMContentLoaded', fn);

function fn(){
    let cursos = [
        {nombre:"Javascript", descripcion:"Curso de Javascript basico"},
        {nombre:"Java", descripcion:"Curso de Java avanzado"}
    ];
    let contenedor = document.getElementById("contenedor");
    //document.getElementsByClassName('prueba')
    cursos.forEach(info=>{
        console.log(info);
        let div = document.createElement("div");
        div.classList.add("card");
        let img = document.createElement('img');
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        let a = document.createElement("a");
        let titulo = document.createTextNode(info.nombre);
        let descripcion = document.createTextNode(info.descripcion);
        let textoLink = document.createTextNode("Leer mas");
        h4.appendChild(titulo);
        p.appendChild(descripcion);
        a.appendChild(textoLink);
        div.appendChild(img);
        div.appendChild(h4);
        div.appendChild(p);
        div.appendChild(a);
        contenedor.appendChild(div);
    });
}

