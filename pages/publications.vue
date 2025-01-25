<template>
  <div>
    <h1>{{members}}</h1>
  </div>
</template>

<script setup lang="ts">
const members = await queryCollection('publications')
  .where('stem', '=', 'shiva')
  .first()

</script>