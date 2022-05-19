<template>
  <div class="relative h-full">
    <div
      v-if="$route.name === 'Home'"
      class="h-full bg-white flex flex-col items-center justify-center"
    />
    <router-view
      v-else
      class="h-full bg-trueGray-100"
    />
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.grid-cols-18 {
  grid-template-columns: repeat(18, minmax(0, 1fr));
}
</style>
