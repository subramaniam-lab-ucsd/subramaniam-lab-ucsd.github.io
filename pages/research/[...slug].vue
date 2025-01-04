<template>
  <div>
    <h1 class="font-serif font-italic py-4">{{ article.title }}</h1>
    <!-- <h5>{{ article.description }}</h5> -->
    <ContentDoc :document="article" />
  </div>
</template>

<script setup>

// Get the slug from the route
const route = useRoute()
console.log(route)
// Get the slug array from the route
const slugArray = route.params.slug // This will be an array for nested routes
const slugPath = slugArray.join('/') // Convert to string path

// Fetch the content document
const article = await queryContent().where({ _path: `/research/${slugPath}` }).findOne()

if (!article) {
  // Handle 404 if article is not found
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found',
  })
}
</script>
