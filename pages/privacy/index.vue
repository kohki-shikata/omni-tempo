<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue'
</script>

<template>
  <NextLayout name="default">
    <div class="h-[100vh] p-8">
      <article>
        <header>
          <h1 class="text-[72px] text-center mb-8">Privacy Policy</h1>
        </header>
        <div class="p-4 lg:w-3/5 mx-auto text-lg lg:text-xl">
          <ul class="[&>*]:list-disc [&>*]:mb-4">
            <li>None of the data you input is stored on any servers or databases</li>
            <li>Specifically, we use Indexed DB on your browser. All your data remains solely in your browser.</li>
            <li>OmniTempo is open source. All of source code is <a
                href="https://github.com/kohki-shikata/omni-tempo">publicly on GitHub.</a> If you are familiar with HTML
              and JavaScript, you can verify that OmniTempo does not upload users' data to the internet.</li>
            <li>However, we do use server-side technologies in some areas. The currently applied services are as folows:
              <ul class="[&>*]:list-disc ml-4 my-4">
                <li>Google Analytics</li>
                <li>Microsoft Clarity</li>
              </ul> These services do not store users' personal data. We specifically promise that all input fields are
              masked in Microsoft Clarity. For those familiar with Microsoft Clarity, this may be a concern. We fully
              understand this and assure you that we are committed to protecting your privacy.</li>
          </ul>
        </div>
      </article>
      <nav class="text-center text-lime-600 hover:text-lime-400">
        <NuxtLink to="/">Back to top</NuxtLink>
      </nav>
    </div>
  </NextLayout>
</template>
