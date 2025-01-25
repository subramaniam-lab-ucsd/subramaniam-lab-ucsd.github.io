<template>
  <div>
    {{data}}
  </div>
</template>

<script setup lang="ts">
const data  = await useAsyncData(() => queryCollection('root').path('/teaching').first());
</script>
