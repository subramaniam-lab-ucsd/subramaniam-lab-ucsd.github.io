<template>
  <div>
    <ContentRenderer :value="data"/>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(() => queryCollection('root').path('/').first());
</script>
