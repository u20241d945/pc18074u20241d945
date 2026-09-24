<script setup>

import { useI18n } from 'vue-i18n'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const { t } = useI18n()

/**
 * @returns {Promise<void>}
 */
const shareProduct = async () => {
  const imageUrl = props.product.getImageUrl()

  if (navigator.share) {
    await navigator.share({
      title: props.product.title,
      text: props.product.description,
      url: imageUrl
    })

    return
  }

  await navigator.clipboard.writeText(imageUrl)
}
</script>

<template>
  <pv-card class="product-card">
    <template #header>
      <img
          class="product-image"
          :src="product.getImageUrl()"
          :alt="product.title"
      />
    </template>

    <template #title>
      {{ product.title }}
    </template>

    <template #subtitle>
      {{ product.category }} - {{ product.brand }}
    </template>

    <template #content>
      <div class="product-information">

        <div class="product-field">
          <strong>{{ t('catalog.description') }}:</strong>
          <span>{{ product.description }}</span>
        </div>

        <div class="product-field">
          <strong>{{ t('catalog.price') }}:</strong>
          <span>
                        ${{ product.price.toFixed(2) }}
                    </span>
        </div>

        <div class="product-field">
          <strong>{{ t('catalog.discount') }}:</strong>
          <span>
                        {{ product.discountPercentage }}%
                    </span>
        </div>

        <div class="product-field">
          <strong>{{ t('catalog.stock') }}:</strong>

          <pv-tag
              :value="`${product.availabilityStatus} (${product.stock})`"
              severity="info"
          />
        </div>

        <div class="product-field">
          <strong>{{ t('catalog.dimensions') }}:</strong>

          <div class="dimensions">
                        <span>
                            {{ t('catalog.width') }}:
                            {{ product.dimensions?.width }}
                        </span>

            <span>
                            {{ t('catalog.height') }}:
                            {{ product.dimensions?.height }}
                        </span>

            <span>
                            {{ t('catalog.depth') }}:
                            {{ product.dimensions?.depth }}
                        </span>
          </div>
        </div>

        <div class="product-field">
          <strong>{{ t('catalog.warranty') }}:</strong>
          <span>{{ product.warrantyInformation }}</span>
        </div>

        <div class="product-field">
          <strong>{{ t('catalog.shipping') }}:</strong>
          <span>{{ product.shippingInformation }}</span>
        </div>

      </div>
    </template>

    <template #footer>
      <div class="card-footer">

        <div class="reviews-container">
          <strong>{{ t('catalog.reviews') }}</strong>

          <pv-list
              :options="product.reviews"
              aria-label="Product reviews"
          >
            <template #option="{ option }">
              <div class="review-item">
                                <span>
                                    {{ option.rating }}
                                </span>

                <span>
                                    {{ option.comment }}
                                </span>
              </div>
            </template>
          </pv-list>
        </div>

        <pv-button
            :label="t('catalog.shareProduct')"
            icon="pi pi-share-alt"
            aria-label="Share product"
            @click="shareProduct"
        />

      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.product-card {
  height: 100%;
}

.product-image {
  width: 100%;
  height: 280px;
  object-fit: contain;
  padding: 1rem;
}

.product-information {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.dimensions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
}

.reviews-container {
  flex: 1;
}

.review-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

@media (max-width: 768px) {
  .card-footer {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>