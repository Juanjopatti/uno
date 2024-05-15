var barraNav = `
    <nav class="navbar navbar-expand-sm navbar-dark ">
        <div class="container-fluid">
            <a class="navbar-brand" href="javascript:void(0)"><img src="./img/uno_color.png" alt="Logo" width="130px"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span><i class="fa-solid fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
                <div>
                    <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="nosotros.html">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Tienda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Categorías</a>
                    </li>
                    </ul>
                </div>
                <div>
                    <form class="d-flex">
                    <input class="form-control me-2" type="text">
                    <button class="btn btn-primary" type="button">Buscar</button>
                    </form>
                </div>
            </div>
        </div>
    </nav>
`
document.getElementById('idHeader').innerHTML=barraNav;

var btnWsp =`
    <a href="https://wa.me/541169989872?text=Hola%20quiero%20mas%20info"><i class="fa-brands fa-whatsapp"></i></a>
    `

document.getElementById('idWsp').innerHTML=btnWsp;

var piePag = `
    <div class="links_pie">
        <a href="#">Inicio</a>
        <a href="nosotros.html">Nosotros</a>
        <a href="contacto.html">Contacto</a>
        <a href="index.html">Tienda</a>

    </div>
    <div class="redes">
        <span><a href="https://www.facebook.com/profile.php?id=61559456645704" target="_blank"><i class="fa-brands fa-facebook"></i> </a></span>
        <span><a href="redes.html" target="_blank"><i class="fa-brands fa-instagram"></i></a></span>
        <span><a href="redes.html" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></span>
        <span><a href="https://www.youtube.com/channel/UCEyWFkWDSM3XAO_s-RsM-vQ" target="_blank"><i class="fa-brands fa-youtube"></i></a></span>
        <span><a href="https://wa.me/541169989872?text=Hola%20quiero%20mas%20info" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></span>

    </div>
    <div class="texto">
        <p><span class="titulo">Nuestra tienda está en Monte Grande, Buenos Aires, Argentina</span><br>
        trabajamos con clientes de todo el país. ¡pongase en contacto con nosotros!</p>
    </div>
    <div class="contacto">
        <span><i class="fa-solid fa-envelope"></i><span class="correo"><b>info_uno@gmail.com</b></span></span>
        <span><i class="fa-solid fa-square-phone"></i><span class="spcontac"><b>(011)69989872</b></span></span>
        <span class="ubicacion"><i class="fa-solid fa-location-dot"></i><span class="spcontac"><b>Paraná 1394</b></span><br> Buenos Aires | Argentina</span>
        </div>
    <div class="copy">
        <p>Copyright<i class="fa-regular fa-copyright"></i>UNO Todos los derechos reservados</p>
    </div>`

    document.getElementById('idFooter').innerHTML=piePag;




