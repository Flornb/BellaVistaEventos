// menu section
let visible_menu = false;
let menu = document.getElementById("nav");
function showHideMenu(){
    console.log("click click")
    if(visible_menu==false){
        menu.style.display = "block";
        visible_menu = true;
    }
    else{
        menu.style.display = "none";
        visible_menu = false;
    }
}

// if select, hide menu 
let links = document.querySelectorAll ("nav a");
for(let i = 0; i < links.length; i++){
    links[i].onClick = function(){
        menu.style.display = "none";
        visible_menu = false;
    }
}

// aos

// lounges carousel 
$(document).ready(function () {
    // Selecciona todas las imágenes del carrusel
        var carouselImages = $(".carousel__thumbnails label img");

    // Asigna un evento de clic a cada imagen del carrusel
        carouselImages.click(function () {
        // Obtiene el ID del botón de radio correspondiente
            var radioID = $(this).parent("label").attr("for");

        // Activa el botón de radio correspondiente
            $("#" + radioID).prop("checked", true);
        });
    });














