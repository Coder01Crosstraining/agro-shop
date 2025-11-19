document.addEventListener('DOMContentLoaded', () => {

    /*
    * SINCRONIZAR CONTADOR DEL CARRITO EN TODAS LAS BURBUJAS Y HEADER
    */
    function updateCartCounters() {
        // Leer el carrito desde localStorage
        const cartData = JSON.parse(localStorage.getItem('ofmedical_cart')) || [];
        const totalItems = cartData.reduce((sum, item) => sum + (item.quantity || 0), 0);
        
        const headerCounter = document.getElementById('cart-counter');
        const bubbleCounter = document.getElementById('cart-bubble-counter');
        
        if (headerCounter) {
            headerCounter.textContent = totalItems;
        }
        
        if (bubbleCounter) {
            bubbleCounter.textContent = totalItems;
        }
    }

    // Actualizar al cargar la página
    updateCartCounters();

    // Escuchar cambios en localStorage y actualizar contadores
    window.addEventListener('storage', updateCartCounters);
    
    // También actualizar cuando hay cambios locales (misma pestaña)
    // Crear evento personalizado que se dispara desde cart.js
    window.addEventListener('cartUpdated', updateCartCounters);

    /*
    * CONTROLADOR DEL SLIDER DE BANNERS CON SWIPER
    */
    const heroSwiper = new Swiper('#heroSwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.slider-dots',
            clickable: true,
            dynamicBullets: false,
        },
        navigation: {
            nextEl: '.slider-btn-next',
            prevEl: '.slider-btn-prev',
        },
        effect: 'slide',
        speed: 500,
        centeredSlides: true,
    });

    /*
    * CONTROLADOR DEL MENÚ DE NAVEGACIÓN MÓVIL
    * Se encarga de mostrar y ocultar el menú en dispositivos móviles
    * al hacer clic en el botón de hamburguesa.
    */
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            document.body.classList.toggle('mobile-menu-open');
        });
    }

    /*
    * CONTROLADOR DE LA PÁGINA DE CATÁLOGO
    * Gestiona la renderización, el filtrado de productos por categoría y la activación
    * de filtros a través de parámetros en la URL.
    */
    const productGrid = document.getElementById('product-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const noResultsMessage = document.getElementById('no-results-message');

    if (productGrid && filterBtns.length > 0) {

        const renderProducts = (category = 'all') => {
    productGrid.innerHTML = '';

    const filteredProducts = productos.filter(product => {
        if (category === 'all') return true;
        return product.category === category;
    });

    if (filteredProducts.length === 0) {
        if (noResultsMessage) noResultsMessage.style.display = 'block';
    } else {
        if (noResultsMessage) noResultsMessage.style.display = 'none';

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.category = product.category;

            // ✨ REFACTORIZACIÓN: Se elimina la lógica de "buttonClass". Ahora todos los botones son iguales.
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-short-desc">${product.short_desc || ''}</p> 
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        Añadir a Cotización
                    </button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }
};

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('.filter-btn.active')) {
                    document.querySelector('.filter-btn.active').classList.remove('active');
                }
                btn.classList.add('active');
                const category = btn.getAttribute('data-category');
                renderProducts(category);
            });
        });

        // Lógica para leer el parámetro de la URL y activar un filtro
        const urlParams = new URLSearchParams(window.location.search);
        const categoryFromURL = urlParams.get('category');

        if (categoryFromURL) {
            const filterToActivate = document.querySelector(`.filter-btn[data-category="${categoryFromURL}"]`);
            if (filterToActivate) {
                filterToActivate.click(); // Simula un clic para activar el filtro
            } else {
                renderProducts(); // Si la categoría no existe, muestra todos
            }
        } else {
            renderProducts(); // Renderizado inicial si no hay parámetro en la URL
        }
    }
});