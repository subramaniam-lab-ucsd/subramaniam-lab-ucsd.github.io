<template>
  <div>
    <!-- <h1>{{members}}</h1> -->
  </div>
</template>

<script setup lang="ts">
const {data}  = await useAsyncData(() => queryCollection('members').where('stem', '=', 'shiva').first());
cons
</script>


