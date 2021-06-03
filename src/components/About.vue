<template>
  <div>
    <h1 class="mb-6 font-extrabold text-3xl">
      Tu Nombre Completo es: {{ completeName }}
    </h1>
    <button @click="edit" class="p-2 ml-2 text-white bg-indigo-600 rounded">
      ¿Quieres editarlo?
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    // computed
    let name = computed(() => store.state.user.name)
    let lastName = computed(() => store.state.user.lastName)
    let completeName = computed(() => `${name.value} ${lastName.value}`)

    // methods
    function edit() {
      store.dispatch('getNotificationEdit')
      router.back()
    }

    return {
      completeName,
      edit,
    }
  },
}
</script>
