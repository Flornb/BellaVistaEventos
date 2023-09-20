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


// footer













