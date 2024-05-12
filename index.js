var container = document.getElementById('idNav');
var btnMenu = document.getElementById('idBtnMenu');







function mostrarMenu(){
    
     
    if (container.style.visibility == "hidden") {
        container.style.visibility = "visible";
        container.style.height ="auto";
    } else {
        container.style.visibility = "hidden";
        container.style.height = "60px";
    }

}



