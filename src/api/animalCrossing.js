import instance from '@/api/instance'

export default {
  getVillagers: (params = {}) => instance.get('/villagers', { params })
}
