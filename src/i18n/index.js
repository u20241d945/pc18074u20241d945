import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        app: {
            title: 'Falabella Products'
        },
        catalog: {
            featuredProducts: 'Featured Products',
            description: 'Description',
            price: 'Price',
            discount: 'Discount',
            stock: 'Stock',
            dimensions: 'Dimensions',
            width: 'Width',
            height: 'Height',
            depth: 'Depth',
            warranty: 'Warranty',
            shipping: 'Shipping',
            reviews: 'Reviews',
            shareProduct: 'Share Product',
            loading: 'Loading products...',
            loadError: 'Unable to load products.'
        },
        footer: {
            copyright: 'Copyright © 2026 Falabella Perú. All rights reserved.',
            developedBy: 'Developed by'
        }
    },

    es: {
        app: {
            title: 'Productos Falabella'
        },
        catalog: {
            featuredProducts: 'Productos Destacados',
            description: 'Descripcion',
            price: 'Precio',
            discount: 'Descuento',
            stock: 'Stock',
            dimensions: 'Dimensiones',
            width: 'Ancho',
            height: 'Alto',
            depth: 'Profundidad',
            warranty: 'Garantia',
            shipping: 'Envio',
            reviews: 'Reseñas',
            shareProduct: 'Compartir Producto',
            loading: 'Cargando productos...',
            loadError: 'No se pudieron cargar los productos.'
        },
        footer: {
            copyright: 'Copyright © 2026 Falabella Perú. Todos los derechos reservados.',
            developedBy: 'Desarrollado por'
        }
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

export default i18n