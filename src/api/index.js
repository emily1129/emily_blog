import animalCrossing from '@/api/animalCrossing'

const resource = {
  animalCrossing
}

export default {
  install (Vue) { Vue.prototype.$api = resource }
}
