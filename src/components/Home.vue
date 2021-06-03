/
<template>
  <h1 class="mb-6 font-extrabold text-3xl">NOMBRE COMPLETO</h1>
  <p class="mb-2"><span class="font-extrabold">Nombre:</span> {{ name }}</p>
  <p class="mb-6">
    <span class="font-extrabold">Apellido:</span> {{ lastName }}
  </p>
  <form
    @submit.prevent="saveName"
    class="grid gap-4 lg:grid-cols-3 sm:grid-cols-12"
  >
    <input
      v-model="data.newName.name"
      type="text"
      class="p-2 mr-1 border border-gray-600 rounded"
    />
    <input
      v-model="data.newName.lastName"
      type="text"
      class="p-2 ml-1 border border-gray-600 rounded"
    />
    <button type="submit" class="p-2 ml-2 text-white bg-indigo-600 rounded">
      Submit
    </button>
  </form>
</template>

<script>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    // data
    let data = reactive({
      newName: {
        name: '',
        lastName: '',
      },
    })

    // computed
    let name = computed(() => store.state.user.name)
    let lastName = computed(() => store.state.user.lastName)

    // methods
    function saveName() {
      store.dispatch('saveName', data.newName)
      store.dispatch('getNotificationNew')
      router.push('/about')
    }

    return {
      data,
      name,
      lastName,
      saveName
    }
  },
}
</script>
