<script setup>

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const developer = 'U20241D945 - Gabriel Stefano Yanac Flores'
</script>

<template>
  <footer
      class="app-footer"
      aria-label="Application footer"
  >
    <p>
      {{ t('footer.copyright') }}
    </p>

    <p>
      {{ t('footer.developedBy') }}
      {{ developer }}
    </p>
  </footer>
</template>

<style scoped>
.app-footer {
  margin-top: 3rem;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #ddd;
}

.app-footer p {
  margin: 0.25rem 0;
}
</style>