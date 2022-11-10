/**
 * It selects all the links in the navbar, removes the class 'seleccionado' from all of them, and then
 * adds the class 'seleccionado' to the link that was clicked
 * @param link - The link that was clicked.
 */
function seleccionar(link){
  let opciones = document.querySelectorAll('#links a');
  opciones[0].className = '';
  opciones[1].className = '';
  opciones[2].className = '';
  opciones[3].className = '';
  link.className = 'seleccionado';

  //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
  let nav = document.getElementById('nav');
  nav.className = '';
}

//Funcion que muestra el menu responsive
function responsiveMenu(){
  let menu = document.getElementById('nav');
  if(menu.className === ''){
    menu.className = 'responsive';
  }else{
    menu.className = '';
  }
}
