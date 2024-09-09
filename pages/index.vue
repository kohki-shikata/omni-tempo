<template>
  <NuxtLayout name="default">
    <header class="relative mb-24">
      <h1 class="text-[72px] text-center mb-24">OmniTempo</h1>
      <p aria-hidden="true"
        class="text-center text-[64px] font-bold text-black absolute top-16 left-[50%] translate-x-[-50%] leading-[0.8] w-full z-[-1] opacity-25">
        Omnia suo tempore <br /> facienda sunt. </p>
      <p class="text-[24px] text-center mb-2">Prioritize your tangled tasks using metrics as radar chart axes.</p>
      <p class="text-[16px] text-center text-slate-500 mb-8">Everything should be done in its own time.</p>
      <p class="text-[15px] text-center text-lime-600 hover:text-lime-400">
        <NuxtLink to="/privacy">Privacy Statement</NuxtLink>
      </p>
    </header>
    <nav class="flex flex-row items-center justify-center gap-4">
      <button type="button"
        class="btn text-2xl font-bold px-12 py-10 min-h-[300px] min-w-[300px] h-auto border border-slate-700">Simple</button>
      <NuxtLink to="/advanced">
        <button type="button"
          class="btn text-2xl font-bold px-12 py-10 min-h-[300px] min-w-[300px] h-auto border border-slate-700"> Advance
        </button>
      </NuxtLink>
    </nav>
  </NuxtLayout>
</template>


