/*let addButton = document.getElementById('add').addEventListener('click', function(){
    alert("hola")
})
*/
let nombreTarea = document.getElementById('nombreTarea')
let personal = document.getElementById('personal')
let domestica = document.getElementById('domestica')
let entretenimiento = document.getElementById('entretenimiento')
let laboral = document.getElementById('laboral')
let descripcion = document.getElementById('textArea')
let alta = document.getElementById('alta')
let media = document.getElementById('media')
let baja = document.getElementById('baja')
let add = document.getElementById('Agregar')
let listadoDeTareas = document.getElementById('listadoDeTareas')
var botonMostrar = document.getElementById("mostrarDiv")
var miDiv = document.getElementById("ventanita")
let section = document.getElementById("section")

// Ocultar el div por defecto
miDiv.style.display = "none";

// Agregar un controlador de eventos para mostrar el div cuando se haga clic en el botón "mostrarDiv"
botonMostrar.addEventListener("click", function() {
ventanita.style.display = "block";
});

var botonCerrar = document.getElementById("cerrarDiv");

botonCerrar.addEventListener("click", function() {
miDiv.style.display = "none";
});

// add.addEventListener("click", () => {
//         let modelo = `<div>
//         <h3>${"Nombre de la tarea: "+nombreTarea.value}</h3>
//         <p>${"Descripcion: "+descripcion.value}</p>
//         </div>`;
//         let bot = `<button id="ag" type="button" >Agregar</button>
//         <button id="delete" type="button">Borrar</button>`; 
//         listadoDeTareas.style.display = "block";
//         listadoDeTareas.innerHTML = modelo+bot;
//         section.classList.add('borrar');
//         miDiv.classList.add('borrar');
//         nombreTarea.value = " ";
//         descripcion.value = " ";
        
//         });



// botonMostrar.addEventListener("click", () => {
//    miDiv.style.display = "block";
//    listadoDeTareas.classList.add('borrar');

// })
        // function agregarTarea() {
        //   if (nombreTarea.value && descripcion.value) {
        //     let modelo = `<div>
        //       <h3>${"Nombre de la tarea: "+nombreTarea.value}</h3>
        //       <p>${"Descripcion: "+descripcion.value}</p>
        //       <button id="at"type="button">Agregar tarea</button>
        //     </div>`;
        //     listadoDeTareas.style.display = "block";
        //     listadoDeTareas.innerHTML = modelo;
        //     section.classList.add('borrar');
        //     miDiv.classList.add('borrar');
        //     nombreTarea.value = " ";
        //     descripcion.value = " ";
        //   }
        // }
        // add.addEventListener("click", agregarTarea());
        
        // var botonCerrar = document.getElementById("Agregar");

// botonCerrar.addEventListener("click", function() {
//     miDiv.style.display = "none";
// });


// var contenedor = document.getElementById("listadoDeTareas");
// var numDivs = 0;

// add.addEventListener("click", function() {
// //var titulo = document.getElementById("nombreTarea");
// //var descripcion = document.getElementById("descripcion");

// var nuevoDiv = document.createElement("div");
// nuevoDiv.innerHTML = "<h2>" + nombreTarea + "</h2><p>" + descripcion + "</p>";
//         contenedor.appendChild(nuevoDiv);

// numDivs++;
// });

add.addEventListener("click", () => {
        let modelo = document.createElement('div');
        let titulo = document.createElement('h3');
        let descripcionTarea = document.createElement('p');
        let botonAgregar = document.createElement('button');
        let botonBorrar = document.createElement('button');
        titulo.textContent = "Nombre de la tarea: " + nombreTarea.value;
        descripcionTarea.textContent = "Descripcion: " + descripcion.value;
        botonAgregar.textContent = "Agregar tarea";
        botonAgregar.setAttribute('type', 'button');
        botonBorrar.setAttribute('type', 'button');
        botonAgregar.setAttribute('id', 'at');
        botonBorrar.textContent = "Borrar tarea";
        botonBorrar.setAttribute('id', 'x');
        botonAgregar.style.height = "20px";
        botonBorrar.style.height = "20px";
        modelo.appendChild(titulo);
        modelo.appendChild(descripcionTarea);
        modelo.appendChild(botonAgregar);
        modelo.appendChild(botonBorrar);
      
        listadoDeTareas.style.display = "block";
        listadoDeTareas.appendChild(modelo);
        section.classList.add('borrar');
        miDiv.classList.add('borrar');
        nombreTarea.value = " ";
        descripcion.value = " ";
        botonAgregar.addEventListener('click', () => {
        miDiv.classList.remove('borrar')
        listadoDeTareas.style.display = "none";
          })
        botonBorrar.addEventListener('click', ()=> {
        listadoDeTareas.removeChild(modelo);
        })
        if(listadoDeTareas ==" "){

          section.classList.remove('borrar');

        }

        
      })
