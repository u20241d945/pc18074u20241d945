<script setup>

import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import ProductCard from './product-card.vue'
import { ProductService } from '../../infrastructure/services/product.service.js'

const { t } = useI18n()

const products = ref([])
const loading = ref(true)
const error = ref(false)

const productService = new ProductService()

/**
 * Loads the product catalog from the API.
 *
 * @returns {Promise<void>}
 */
const loadProducts = async () => {
  try {
    loading.value = true
    error.value = false

    products.value = await productService.getProducts()
  } catch (exception) {
    console.error('Error loading products:', exception)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadProducts()
})
</script>

<template>
  <section
      class="catalog-section"
      aria-labelledby="featured-products-title"
  >

    <h1 id="featured-products-title">
      {{ t('catalog.featuredProducts') }}
    </h1>

    <p v-if="loading">
      {{ t('catalog.loading') }}
    </p>

    <p v-else-if="error">
      {{ t('catalog.loadError') }}
    </p>

    <div
        v-else
        class="product-grid"
    >
      <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>

  </section>
</template>

<style scoped>
.catalog-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.catalog-section h1 {
  margin-bottom: 2rem;
  text-align: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
  }

  .catalog-section {
    padding: 1rem;
  }
}
</style>