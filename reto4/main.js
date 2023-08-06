// // url de la api
// const url ="http(s)://gateway.marvel.com/"
// // llamado a la url 
// fetch(url)
// //pasamos la respuesta a json
// .then(res => res.json())
// //imprimir la respuesta en json
// .then(data=> console.log(data))
// // .catch((err)=> console.error(err))
const marvelCharacters = [
  {
    name: "Iron Man",
    image: "https://static.wikia.nocookie.net/marveldatabase/images/0/0a/Iron_Man_Vol_6_1_Brooks_Variant_Textless.jpg/revision/latest?cb=20211207231858"
  },
  {
    name: "Spider-Man",
    image: "https://blog.latam.playstation.com/tachyon/sites/3/2022/06/35cad566eb5c0eb56188715723bbcb0c3d28982d.jpg"
  },
  {
    name: "Captain America",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/capitan-america-1553587672.jpg"
  },
  {
    name: "Black Widow",
    image: "https://depor.com/resizer/Z6_kGXj1cKLqEkEZ01-57JAXf1Y=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EHU7OZ6TZFE67IM6D7ADYGS44I.jpg"
  },
  {
    name: "Hulk",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-increible-hulk-1554403044.jpg?crop=1xw:1xh;center,top&resize=1200:*"
  },
  {
    name: "Thor",
    image: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/05/Thor-156.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1"
  },
  {
    name: "Doctor Strange",
    image: "https://img.europapress.es/fotoweb/fotonoticia_20161105173040_1200.jpg"
  },
  {
    name: "Black Panther",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/black-panther-wakanda-forever-escena-post-creditos-hijo-1668174468.jpg"
  },
  {
    name: "Ant-Man",
    image: "https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2018/04/15/ant-man-and-wasp.jpg"
  },
  {
    name: "Wasp",
    image: "https://i.pinimg.com/736x/71/95/53/71955333f083012976828e6ac762c135.jpg"
  },
  {
    name: "Scarlet Witch",
    image: "https://i.pinimg.com/originals/fd/77/a7/fd77a7943c9a44f3e2fec847d6bf69d1.jpg"
  },
  {
    name: "Vision",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/New_York_Comic_Con_2015_-_The_Vision_%2821916157810%29.jpg"
  },
  {
    name: "Captain Marvel",
    image: "https://media.gq.com.mx/photos/5c829e8e61bbe1ebeb91e652/16:9/w_2560%2Cc_limit/captainmarvel.jpg"
  },
  {
    name: "Falcon",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a9/Nuevo_EXO-7_Falcon.png/revision/latest?cb=20210311153716&path-prefix=es"
  },
  {
    name: "Winter Soldier",
    image: "https://images.squarespace-cdn.com/content/v1/52a86cb9e4b098a46d38a18c/1465307888719-XAHNSHTL9891SSRFF3U1/winter-soldier-fan-art-tony-santiago.jpg?format=750w"
  },
  {
    name: "War Machine",
    image: "https://img.asmedia.epimg.net/resizer/pLdU9uGQMct4FYuNVQiz-bPOovI=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/DTXECJYH2RPD3H3VM44OKKM6CY.jpg"
  },
  {
    name: "Hawkeye",
    image: "https://www.nacionflix.com/__export/1627573749751/sites/debate/img/2021/07/29/jaremy-renner-hawkeye.jpg_881623903.jpg"
  },
  {
    name: "Groot",
    image: "https://ae01.alicdn.com/kf/H482a014f44374d90aa99612c2ed27506T/Marvel-Groot-en-tutores-de-la-galaxia-rbol-hombre-vengadores-40cm-tama-o-grande-BJD-figura.jpg_Q90.jpg_.webp"
  },
  {
    name: "Rocket",
    image: "https://i.pinimg.com/originals/9a/17/95/9a1795b6a6d00e263459634516f064c3.jpg"
  },
  {
    name: "Drax",
    image: "https://i.blogs.es/59d193/drax/840_560.png"
  },
];

let comenzar = document.getElementById('btn1')
let pantalla1 = document.getElementById('pantalla1')
let pantalla2 = document.getElementById('pantalla2')
let pantalla3 = document.getElementById('pantalla3')
let pantalla4 = document.getElementById('pantalla4')
let pantalla5= document.getElementById('pantalla5')
let btnx = document.getElementById('btnx')
let carousel = document.getElementById("carousel")
let j1 = document.getElementById('j1')
let j2 = document.getElementById('j2')
let cartasj = document.getElementById('cartasj')
let cj1 = document.getElementById('cj1') 
let continuar = document.getElementById('continuar')
let vat = document.getElementById('vat')
let vr = document.getElementById('vr')
let j1c = document.getElementById('j1c')
let jugadores = []
let cartas = []

  

comenzar.addEventListener('click', () => {
    pantalla1.style.display = 'none'
    pantalla2.style.display =  'block'

    jugadores= [
      {
        nombre: j1.value,
        cartas : []
        
      },
      {
        nombre: j2.value,
       cartas : []
      },
      ]
    
      setTimeout(ejecutarDespuesDe3Segundos, 3000);


    })
function ejecutarDespuesDe3Segundos() {
    pantalla2.style.display = 'none'
    pantalla3.style.display = 'inline-flex'
    pantalla3.style.display = 'column'
    // display: inline-flex;
    // flex-direction: column;
    iniciarJuego()
}


  
//pantalla 3

btnx.addEventListener('click',() => {
  pantalla1.style.display = "flex"
  pantalla3.style.display = "none"
  j1.value=""
  j2.value=""
  })

  const cartasJuego = []
 const iniciarJuego = () => { 
 
  // jugadores.push(j1.value)
  

  while (cartasJuego.length < 6 ){
    const random = Math.floor(Math.random()* marvelCharacters.length)
    console.log(random)
    
  if (cartasJuego.indexOf(marvelCharacters[random])== -1){
    cartasJuego.push(marvelCharacters[random])
  }
  }

  let active = ""

  cartasJuego.forEach((carta, index) => {
    if (index === 0) active = 'active'
    else active = ''
    if (index <=2){ 
      carousel.innerHTML += `<div class="carousel-item ${active}">
      <h3>Cartas de ${j1.value}</h3><img src="${carta.image}" class="d-block w-100" alt="...">
      <div class="carousel-caption">
      <h4>${carta.name}</h4>
      </div>
      
      </div>`;
    } else {
      carousel.innerHTML += `<div class="carousel-item ${active}">
      <h3>Cartas de ${j2.value}</h3><img src="${carta.image}" class="d-block w-100" alt="...">
      <div class="carousel-caption">
      <h4>${carta.name}</h4>
      </div>
      
      </div>`;
      
    }
  })
  
  
jugadores[0].cartas.push(cartasJuego.slice(0,2))
jugadores[1].cartas.push(cartasJuego.slice(3,5))
    


console.log(jugadores[0].nombre, jugadores[0].cartas)
console.log(jugadores[1].nombre, jugadores[1].cartas)

}



continuar.addEventListener('click', () => {
    pantalla3.style.display = "none";
    pantalla4.style.display = "block";
    
    })

    //pantalla4

// vat.addEventListener('click', ()=> {
//   pantalla4.style.display = "none"
//   pantalla3.style.display = "flex"
//   iniciarJuego()
// })

// vr.addEventListener('click', () =>{
//   pantalla4.style.display = "none"
//   pantalla5.style.display = "block"
//   const lista = document.getElementById('j1c')

//   jugadores.forEach(el => {
    
//     console.log(el.nombre , el.cartas, "desde ver resultado")
//     lista.innerHTML +=  `
//       <li>${el.nombre}</li>
      
//     <br><br>
//       <li><img src="${el.image}"></li>`
//     return
//   })
  
// })


//pantalla 5



// const miArray = ['objeto1', 'objeto2', 'objeto3', 'objeto4', 'objeto5'];

// Seleccionamos el elemento <ul> del HTML

  //   </div>`;
  // } else {
  //   carousel.innerHTML += `<div class="carousel-item ${active}">
  //   <h3>Cartas de ${j2.value}</h3><img src="${carta.image}" class="d-block w-100" alt="...">
  //   <div class="carousel-caption">
  //   <h4>${carta.name}</h4>
  //   </div>
    
  //   </div>`;

// jugadores.map((jugadores) =>{
  // return lista.innerHTML+=  `<li><img src="${jugadores.image}<h4>${jugadores.name}</h4>"</li>`
// })
// cartasJuego.forEach((carta, index) => {
//   if (index <=2)
//     lista.innerHTML += 
//    })
   

// // Generamos un template string con el contenido de la lista
// const listaContenido = `
//   <li>${cartasJuego[0].image}</li>
  
// <br><br>
//   <li>${jugadores[1].image}</li>
// `

// // Agregamos el contenido a la lista
// lista.innerHTML = listaContenido;


// probar con funcion map para mostrar resultado en la pantalla 5 