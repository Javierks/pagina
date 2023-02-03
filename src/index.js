import React from "react";
import ReactDOm from "react-dom/client";
import "../src/estilos.css";
import horizonte from "../src/img/horizonte.jpg";

const root = ReactDOm.createRoot(document.getElementById("root"))

function pagina(){
    return <div>
        
        <div class="contenedor-rojo">
            <a>INICIO</a>

            <div class="primero">
            <article><img src={horizonte}/></article>
                


<article>


<h1>INFORMACIÓN</h1>
<h2>NOMBRE:  JAVIER FELIPE BERMEO SALZAR</h2>
<h2>CARRERA: INGENIERÍA DE SOFTWARE</h2>
<h2>UNIVERSIDAD: HORIZONTE </h2>
<h2>TELÉFONO: 3188832777</h2>
<h2>DIRECCIÓN: CARRERA 50 #163 B 80</h2>  

</article>


</div>
<div class="contenedor-azul"></div>
        </div>
    </div>
    
    
}
    root.render(pagina())
    
        



