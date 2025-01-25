<template>
  <h1 class="text-ucsd-yellow uppercase font-mono">Contact Us</h1>
  <div class="grid grid-cols-5 gap-4 sm:gap-8 pt-12">
    <div class="col-span-5 md:col-span-2">
      <section>
        <h3 class="pb-2">Phone</h3>
        <p class="text-xl">{{ doc.phone }}</p>
      </section>
      <section>
        <h3>Address</h3>
        <p class="text-xl">{{ doc.email }}</p>
      </section>

      <section>
        <h3>Email</h3>
        <p class="text-xl">{{ doc.address }}</p>
      </section>

    </div>
    <div class="col-span-5 md:col-span-3">
      <iframe
        :src="doc.mapAPI"
        width="100%"
        height="450"
        class="rounded-xl sm:rounded-3xl border-2"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>


<script setup lang="ts">

const doc = await useAsyncData(() => queryCollection('root').path('/contact').first())

definePageMeta({
  layout: 'contactsblue'
})

</script>
