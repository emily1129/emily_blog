<template>
  <div
    id="app"
    class="flex flex-col"
  >
    <div class="flex flex-grow">
      <div class="w-1/6 lg:w-64 p-4 bg-orange-500 border-r border-gray-200 text-2xl text-white">
        <img
          src="@/assets/icons/btn_menu.png"
          class="w-6 h-6 m-4 mb-10 cursor-pointer"
        >
        <div
          v-for="(link, i) in links"
          :key="i"
        >
          <router-link
            class="flex flex-row mx-8 my-6 py-2 items-center space-x-3 border-b border-orange-400"
            :to="'/' + link.name"
          >
            <p>
              {{ link.label }}
            </p>
          </router-link>
        </div>
      </div>
      <div class="flex flex-grow flex-col overflow-x-hidden">
        <router-view class="flex-grow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      links: [
        {
          name: 'profile',
          label: 'Profile'
        },
        {
          name: 'web',
          label: 'Web'
        },
        {
          name: 'ui',
          label: 'UI'
        },
        {
          name: 'seniorProject',
          label: 'Senior Project'
        },
        {
          name: 'photography',
          label: 'Photography'
        }
      ]
    }
  }
}
</script>
