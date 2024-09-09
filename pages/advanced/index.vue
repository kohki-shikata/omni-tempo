<script setup lang="ts">
import { ref } from 'vue';
import AvanModal from '@/components/elements/AdvancedAvanModal.vue';
import ChartGroup from '@/components/elements/ChartGroup.vue';
import { useDashboardScreenState } from '@/composables/useDashboardScreeenState';

// グローバルステートの取得
const state = useDashboardScreenState().activeScreen;

// data-task-id属性を取得するメソッド
const getDataAttribute = (event: Event) => {
  const target = event.currentTarget as HTMLElement;
  const screenType = target.dataset.screenType;
  // console.log('Screen type:', screenType);
  if(screenType !== undefined) {
    state.active = screenType
  }
};
</script>
<template>
  <NuxtLayout name="advanced">
    <template #graph>
      <div class="h-[100vh] p-8 bg-base-300 overflow-y-scroll">
        <h1 class="font-bold text-4xl mb-12">Project title goes here...</h1>
        <div class="inline-flex items-center justify-center w-full">
          <ChartGroup />
        </div>
      </div>
    </template>
    <template #dashboard>
      <AvanModal />
      <div class="h-[100vh] p-8 overflow-y-scroll">
        <div role="tablist" class="grid grid-flow-col auto-cols-fr tabs tabs-bordered mb-8">
          <a @click="getDataAttribute" role="tab"
            :class="'tab h-auto pb-2 ' + (state.active === 'project-preference' ? 'tab-active' : '')"
            data-screen-type="project-preference"> Project preference </a>
          <a @click="getDataAttribute" role="tab"
            :class="'tab h-auto pb-2 ' + (state.active === 'tasks' ? 'tab-active' : '')" data-screen-type="tasks"> Tasks
          </a>
          <a @click="getDataAttribute" role="tab"
            :class="'tab h-auto pb-2 ' + (state.active === 'other' ? 'tab-active' : '')" data-screen-type="other"> Other
          </a>
        </div>
        <div class="advanced-screen-project-preferences w-full"
          v-if="state.active === 'project-preference' ? true : false">
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text">Project title</span>
            </div>
            <input type="text" placeholder="Type here" class="input input-bordered w-3/5" />
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">Description</span>
            </div>
            <textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
          </label>
        </div>
        <div class="advanced-screen-other w-full" v-if="state.active === 'tasks' ? true : false">
          <p>tasks screen</p>
        </div>
        <div class="advanced-screen-tasks w-full" v-if="state.active === 'other' ? true : false">
          <p>other screen</p>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
