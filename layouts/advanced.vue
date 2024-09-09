<script lang="ts" setup>
import Footer from '@/components/interfaces/footer.vue'
</script>

<template>
  <div>
    <div class="h-[calc(100vh_-_38px)]">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <div class="grid grid-cols-2">
          <slot name="graph" />
          <slot name="dashboard" />
        </div>
      </main>
    </div>
  </div>
</template>