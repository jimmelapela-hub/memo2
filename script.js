// Inicializa el contador del carrito, usando el almacenamiento local si existe.
let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
const cartCountElement = document.querySelector('.cart-count');

// Función para actualizar el contador en la interfaz y en el almacenamiento local
function updateCartCount(newCount) {
    cartCount = newCount;
    // Asegura que el elemento existe antes de intentar actualizarlo
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        localStorage.setItem('cartCount', cartCount);
        
        // Mostrar u ocultar el contador si está vacío
        // Opcional: Si el contador al iniciar es 0, no se muestra.
        if (cartCount > 0) {
            cartCountElement.style.display = 'inline-block';
        } else {
            cartCountElement.style.display = 'none';
        }
    }
}

// Lógica principal al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializa el contador al cargar
    updateCartCount(cartCount); 

    // 1. Seleccionar todos los botones de "Añadir al Carrito"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // 2. Agregar un "escuchador de eventos" a cada botón
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            // Lógica para agregar 1 producto al carrito
            const newCount = cartCount + 1;
            updateCartCount(newCount);
            
            // (Opcional) Feedback visual rápido
            const originalText = button.textContent;
            button.textContent = '✅ Añadido!';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 1500);
        });
    });
});