<script lang="ts" setup>
import Footer from '@/components/interfaces/footer.vue'
</script>

<template>
  <div>
    <div class="h-[calc(100vh_-_38px)]">
      <slot />
    </div>
    <div class="min-h-[38px]">
        <Footer />
    </div>
  </div>
</template>
