<template>
  <div class="relative h-full">
    <div class="grid grid-cols-18 gap-2 p-2">
      <img
        v-for="villager in villagers"
        :key="villager.id"
        :src="villager.icon_uri"
        :alt="villager.personality"
      >
    </div>
    <img
      src="@/assets/logo.png"
      alt="redpay.io"
      class="fixed absolute-center"
    >
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      villagers: []
    }
  },
  created () {
    this.$api.animalCrossing.getVillagers()
      .then(res => {
        this.$set(this.$data, 'villagers', Object.values(res).sort(() => Math.random() - 0.5))
      })
  }
}
</script>

<style scoped>
.absolute-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.grid-cols-18 {
  grid-template-columns: repeat(18, minmax(0, 1fr));
}
</style>
