// Variable global para almacenar los productos seleccionados
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar productos al carrito
const agregarAlCarrito = (nombre, imagen, precio) => {
    // Agregar el producto como un objeto al carrito
    carrito.push({nombre, imagen, precio});

    // Actualizar el contador visual del carrito
    actualizarContador();

    // Mostrar una alerta de confirmación
    alert(`Agregaste: ${nombre} al carrito`);
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

// Función para actualizar el contador del carrito
const actualizarContador = () => {
    // Cambiar el contenido del HTML con el ID contador-carrito
    document.getElementById("contador-carrito").textContent = carrito.length;
};

// Guarda el contenido del carrito en el almacenamiento local antes de cerrar la página
window.addEventListener("beforeunload", () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
});

// Inicializar el contador del carrito al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();
});




