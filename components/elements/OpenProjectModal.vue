<script lang="ts" setup>
import { onMounted, ref, defineExpose } from 'vue';
import OpenProjectList from '@/components/elements/OpenProjectList.vue';

const openProject = ref<HTMLDialogElement | null>(null);

const handleClick = () => {
  openProject.value?.showModal();
  // モーダルのアクションをここで定義
};

onMounted(() => {
  openProject.value = document.getElementById('openProject') as HTMLDialogElement | null;
});

defineExpose({
  handleClick
});
</script>
<template>
  <dialog id="openProject" class="modal overflow-y-scroll" ref="openProject">
    <div class="w-1/2 p-8 bg-neutral rounded-lg">
      <p class="text-3xl mb-8 font-bold inline-flex items-center justify-between w-full"> Select project:
      <form>
        <button class="btn">Cancel</button>
      </form>
      </p>
      <ul class="border-t border-slate-600 mb-8">
        <li>
          <OpenProjectList />
        </li>
        <li>
          <OpenProjectList />
        </li>
        <li>
          <OpenProjectList />
        </li>
        <li>
          <OpenProjectList />
        </li>
        <li>
          <OpenProjectList />
        </li>
        <li>
          <OpenProjectList />
        </li>
        <li>
          <OpenProjectList />
        </li>
        <li>
          <OpenProjectList />
        </li>
        <li>
          <OpenProjectList />
        </li>
        <li>
          <OpenProjectList />
        </li>
        <!-- 同様にリストアイテムを続ける -->
      </ul>
      <div class="join flex flex-row items-center justify-center">
        <button class="join-item btn">«</button>
        <button class="join-item btn">Page 1</button>
        <button class="join-item btn">»</button>
      </div>
    </div>
  </dialog>
</template>
