//console.log("hola")//

document.addEventListener('DOMContentLoaded', fn);

function fn(){
    let cursos = [
        {nombre:"Javascript", descripcion:"Curso de Javascript basico"},
        {nombre:"Java", descripcion:"Curso de Java avanzado"}
    ];
    let contenedor = document.getElementById("contenedor");
    cursos.forEach(info=>{
        console.log(info);
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let titulo = document.createTextNode(info.nombre);
        let descripcion = document.createTextNode(info.descripcion);
        h2.appendChild(titulo);
        p.appendChild(descripcion);
        div.appendChild(h2);
        div.appendChild(p);
        contenedor.appendChild(div);
    });
}

