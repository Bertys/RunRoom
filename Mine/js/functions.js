
// Comienzo de la script
makeList();




var listContainer22 = document.createElement("div");
      listContainer22.id="result";
////////////////////////////

var divItem = document.createElement("div");
divItem.id="xXx";

var list = document.querySelectorAll('li.listTt');

Array.prototype.slice.call(list).forEach(function(listItem){
  listItem.addEventListener('click', function(e){
      
    // Add it to the page
    document.getElementById("viewport").appendChild(listContainer22);
    console.log(this.innerHTML);
      var result = "<div id=\"resulTT\"><img class=\"floatL\" src="+arrPersonajes[this.id].imagen+"><b>"+arrPersonajes[this.id].name()+"</b><br><b>Alias:</b> "+arrPersonajes[this.id].alias+"<br><b>Nacimiento:</b> "+arrPersonajes[this.id].nacimiento+"<br><b>Familia:</b> "+arrPersonajes[this.id].familia+"</div>";
      document.getElementById("result").innerHTML = "<div id=\"xXx\" onclick=\"closeIt()\">X</div>";
      document.getElementById("result").innerHTML += result;
      document.getElementById("result").innerHTML += "<ul id=\"final\"><li id=\"des\" class=\"active\" onclick=\"description()\">Description</li><li id=\"his\" onclick=\"history()\">Historia</li><li id=\"act\" onclick=\"actriz()\">Actriz</li></ul>";
      
      document.getElementById("result").innerHTML += "<div id=\"descript\" class=\"\">"+arrPersonajes[this.id].descripcion+"</div>";
      document.getElementById("result").innerHTML += "<div id=\"history\" class=\"none\">"+arrPersonajes[this.id].historia+"</div>";
      document.getElementById("result").innerHTML += "<div id=\"actr\" class=\"none\">"+arrPersonajes[this.id].actriz+"</div>";
      
      document.getElementById("result").style.display = "block";
      document.getElementById("nameBC").innerHTML = this.name;
      document.getElementById("lista").style.width = "50%";
      document.getElementById("result").style.width = "50%";
      document.getElementById("viewport").style.width = "100%";
      document.getElementById("lista").style.float = "left";
      

      cambiarEscudo(this.id);

  });
});


///////////////////////////////////////////////////////////////////////////////
//FUNCIONES AUXILIARES
///////////////////////////////////////////////////////////////////////////////

//Función principal que nos crea la lista
function makeList() {

    // Primero de todo creamos el elemento para llenarlo posteriormente
    var listContainer = document.createElement("div");
    listContainer.id="lista";
    
    // Lo añadimos a la pagina mediante inyeccion js
    document.getElementById("viewport").appendChild(listContainer);

    // Creamos el elemento lista
    var listLegend = document.createElement("ul");

    // Lo llenamos con todos los componentes que necesitamos
    listContainer.innerHTML += "<ul id=\"subMenu\" class=\"\"><li class=\"active\">Favoritos</li><li>Listado de Casas</li><li>Personajes Secundarios</li></ul>";
    listContainer.innerHTML += "<ul id=\"stats\"><li>Top (2)</li><li>Sin Valorar (2)</li><li>Actualizados (4)</li></ul><br><br>";

    
    // Creamos un nuevo elemento de lista
    var listElement = document.createElement("ul");

    // Lo añadimos a la pagina
    listContainer.appendChild(listElement);

    // Llenamos la lista con la información de los personajes, a través de un loop for para recorrer el Array entero.
    var numberOfListItems = arrPersonajes.length;
    
    for (var i = 0; i < numberOfListItems; ++i) {

        var listItem = document.createElement("li");
        
        //Comprobaciones para añadir efectos visuales como el ribete o el borde izq
        if(arrPersonajes[i].valoracion>3){
           listItem.classList.add("top");
           }

        if(arrPersonajes[i].actualizado==1){
           listItem.classList.add("neww");
           }
        
        //información auxiliar para seleccionar luego los elementos con más facilidad
        listItem.id=i;
        listItem.classList.add("listTt");
        listItem.name=arrPersonajes[i].name();
        
        // Dibujamos las estrellas para la valoración y dependiendo de ésta le asignamos una clase u otra
        switch(arrPersonajes[i].valoracion) {
            case 5:
                listItem.innerHTML = "<div><span class=\"star on\"></span><span class=\"star on\"></span><span class=\"star on\"></span><span class=\"star on\"></span><span class=\"star on\"></span></div>";
                break;
            case 4.5:
                listItem.innerHTML = "<div><span class=\"star on\"></span><span class=\"star on\"></span><span class=\"star on\"></span><span class=\"star on\"></span><span class=\"star half\"></span></div>";
                break;
            case 3:
                listItem.innerHTML = "<div><span class=\"star on\"></span><span class=\"star on\"></span><span class=\"star on\"></span><span class=\"star\"></span><span class=\"star\"></span></div>";
                break;
            default:
                listItem.innerHTML = "<div><span class=\"star\"></span><span class=\"star\"></span><span class=\"star\"></span><span class=\"star\"></span><span class=\"star\"></span></div>";
        }

        
        //Le añadimos los datos que faltan para crear el bloque entero
        listItem.innerHTML += "<div><img class=\"display\" src="+arrPersonajes[i].imagen+"></div>";
        listItem.innerHTML += "<div><b>"+arrPersonajes[i].name()+"</b><br>"+ arrPersonajes[i].familia+"</div>";
        

        // Lo ponemos finalmente en la pagina
        listElement.appendChild(listItem);
    }
}

//Función secundária para cambiar el escudo de la casa según el Personaje
function cambiarEscudo(idPj){
    switch (idPj) {
    case "0":
        document.getElementById("logo").style.background = "url('../imagenes/imagesGot/casas.jpg') 0px -16px";
        break;
    case "1":
        document.getElementById("logo").style.background = "url('../imagenes/imagesGot/casas.jpg') -165px -16px";
        break;
    case "2":
        document.getElementById("logo").style.background = "url('../imagenes/imagesGot/casas.jpg') -90px -16px";
        break;
    case "3":
        document.getElementById("logo").style.background = "url('../imagenes/imagesGot/casas.jpg') -230px -96px";
        break;
    case "4":
        document.getElementById("logo").style.background = "url('../imagenes/imagesGot/casas.jpg')  -90px -16px";
        break;
    case "5":
        document.getElementById("logo").style.background = "url('../imagenes/imagesGot/casas.jpg') -165px -16px";
        break;
//    default:
//        document.getElementById("logo").style.background = "url('/imagenes/transparent.png') 0px 0px";
//        break;
    }
}

//Función auxiliar para cerrar la "ventana emergente" con los detalles del personaje
function closeIt(){
        document.getElementById("lista").style.width = "100%";
        document.getElementById("result").style.display = "none";
        document.getElementById("nameBC").innerHTML = "";
        document.getElementById("logo").style.background = "url('../imagenes/transparent.png') -165px -16px";
}

//Funciones auxiliares para llevar el control del flujo de información según los clicks del usuario
function actriz(){
        document.getElementById("descript").style.display = "none";
        document.getElementById("history").style.display = "none";
        document.getElementById("actr").style.display = "block";
        document.getElementById("final").style.display = "block";
        document.getElementById("act").classList.add("active");
        document.getElementById("his").classList.remove("active");
        document.getElementById("des").classList.remove("active");
}

function description(){
        document.getElementById("descript").style.display = "block";
        document.getElementById("history").style.display = "none";
        document.getElementById("actr").style.display = "none";
        document.getElementById("act").classList.remove("active");
        document.getElementById("his").classList.remove("active");
        document.getElementById("des").classList.add("active");
}

function history(){
        document.getElementById("descript").style.display = "none";
        document.getElementById("history").style.display = "block";
        document.getElementById("actr").style.display = "none";
        document.getElementById("act").classList.remove("active");
        document.getElementById("his").classList.add("active");
        document.getElementById("des").classList.remove("active");
}