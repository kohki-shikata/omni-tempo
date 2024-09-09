<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import OpenProjectModal from '@/components/elements/OpenProjectModal.vue';

const openProjectModal = ref<InstanceType<typeof OpenProjectModal> | null>(null);

const openOpenProjectModal = () => {
  if (openProjectModal.value && typeof openProjectModal.value.handleClick === 'function') {
    openProjectModal.value.handleClick();
  } else {
    console.error('Method handleClick is not available on OpenProjectModal component.');
  }
};

onMounted(() => {
  const avan = document.getElementById('avan') as HTMLDialogElement;
  if (avan) {
    avan.showModal();
  }
});
</script>

<template>
  <dialog id="avan" class="modal">
    <OpenProjectModal ref="openProjectModal" />
    <div class="modal-box grid grid-cols-1">
      <form method="dialog">
        <button class="btn btn-block rounded-none rounded-t-xl text-3xl h-fit py-8 inline-flex items-center justify-center border-0 border-b-[1px] border-base-100">New Project</button>
      </form>
      <button class="btn btn-block rounded-none rounded-b-xl text-3xl h-fit py-8 inline-flex items-center justify-center" @click="openOpenProjectModal">Open Project...</button>
    </div>
  </dialog>
</template>
