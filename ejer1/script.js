const divInfo = document.getElementById("info");
    console.log("Texto del div info:", divInfo.textContent);
    
    const detalle = document.querySelector(".detalle");
    detalle.textContent = "Este es un detalle modificado";

    const parrafos = document.querySelectorAll("p");
    parrafos.forEach(p => p.style.backgroundColor = "lightblue");
