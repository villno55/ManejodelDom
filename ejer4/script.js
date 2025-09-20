    const nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = "Soy un nuevo div";

    const viejoDiv = document.querySelector("div");
    viejoDiv.parentNode.replaceChild(nuevoDiv, viejoDiv);

    console.log("Div reemplazado correctamente");
