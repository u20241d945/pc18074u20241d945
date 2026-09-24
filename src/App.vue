<script setup>

import AppToolbar from './shared/presentation/components/app-toolbar.vue'
import AppFooter from './shared/presentation/components/app-footer.vue'
import ProductList from './catalog/presentation/components/product-list.vue'
</script>

<template>
  <div class="app-container">

    <app-toolbar />

    <main>
      <product-list />
    </main>

    <app-footer />

  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
}

body {
  font-family: Arial, sans-serif;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>