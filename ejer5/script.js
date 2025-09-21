const btnClickMe = document.getElementById("clickMe");
    const btnRemove = document.getElementById("removeEvent");

    function mostrarAlerta() {
      alert("¡Botón clickeado!");
    }

    btnClickMe.addEventListener("click", mostrarAlerta);

    btnRemove.addEventListener("click", () => {
      btnClickMe.removeEventListener("click", mostrarAlerta);
      alert("Evento eliminado del botón Click Me");
    });
