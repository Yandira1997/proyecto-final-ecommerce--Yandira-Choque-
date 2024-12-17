const botonGuardar = document.querySelector("#guardar");
const botonMostrar = document.querySelector("#mostrar");
const botonBorrar = document.querySelector("#borrar");


botonGuardar.addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;
    localStorage.setItem("nombreUser", nombre);
    alert("Nombre guardado");
});

botonMostrar.addEventListener("click", () => {
    const nombreGuardado = localStorage.getItem("nombreUser");
    if (nombreGuardado) {
        document.querySelector("#resultado").textContent = `Guardaste ${nombreGuardado}`;
    } else {
        document.querySelector("#resultado").textContent = "No hay nombre guardado";
    }
});

botonBorrar.addEventListener("click", () => {
    localStorage.removeItem("nombreUser")
    alert("Nombre eliminado")
    document.querySelector("#resultado").textContent = "";
});


