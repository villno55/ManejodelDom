
    const paNew = document.createElement("p");
    paNew.textContent = "párrafo creado dinámicamente";
    document.body.appendChild(paNew);

    const btnBorrar = document.querySelector("#eliminar");
    btnBorrar.addEventListener("click", () => {
      const primP = document.querySelector("p");
      if (primP) {
        primP.remove();
      }
    });
