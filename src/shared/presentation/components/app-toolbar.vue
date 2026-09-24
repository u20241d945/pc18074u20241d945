<script setup>

import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const languageOptions = [
  {
    label: 'EN',
    value: 'en'
  },
  {
    label: 'ES',
    value: 'es'
  }
]

const selectedLanguage = ref(locale.value)

const logoUrl = import.meta.env.VITE_FALABELLA_LOGO_URL

/**
 * @param {string} language
 * @returns {void}
 */
const changeLanguage = language => {
  locale.value = language
}

watch(selectedLanguage, newLanguage => {
  changeLanguage(newLanguage)
})
</script>

<template>
  <header>
    <pv-toolbar
        class="app-toolbar"
        aria-label="Application toolbar"
    >
      <template #start>
        <div class="brand">
          <img
              :src="logoUrl"
              alt="Falabella Perú logo"
              class="brand-logo"
          />

          <span class="brand-title">
                        {{ t('app.title') }}
                    </span>
        </div>
      </template>

      <template #end>
        <pv-select-button
            v-model="selectedLanguage"
            :options="languageOptions"
            option-label="label"
            option-value="value"
            aria-label="Select interface language"
        />
      </template>
    </pv-toolbar>
  </header>
</template>

<style scoped>
.app-toolbar {
  border-radius: 0;
  padding: 1rem 2rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.brand-title {
  font-size: 1.5rem;
  font-weight: 600;
}

@media (max-width: 600px) {
  .app-toolbar {
    padding: 0.75rem 1rem;
  }

  .brand-title {
    font-size: 1rem;
  }

  .brand-logo {
    width: 36px;
    height: 36px;
  }
}
</style>