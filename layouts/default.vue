<template>
  <header>
    <Navigation />
  </header>
  <body>
    <main class="flex-grow layout-container pt-12">
      <slot />
    </main>
  </body>
  <div>
    <Footer />
  </div>
</template>

<style scoped>
/* Optional styles for header and footer */
header,
footer {
  z-index: 10;
}
</style>

<script setup>
useSeoMeta({
  title: 'Subramaniam Lab',
  ogTitle: 'Subramaniam Lab',
  description: 'Systems Biology & Systems Medicine',
  ogDescription: 'Systems Biology & Systems Medicine',
  // ogImage:'',
  // twitterCard: 'summary_large_image',
})
</script>
