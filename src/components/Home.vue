/
<template>
  <h1 class="mb-6 font-extrabold text-3xl">NOMBRE COMPLETO</h1>
  <p class="mb-2"> <span class="font-extrabold">Nombre:</span> {{ name }}</p>
  <p class="mb-6"><span class="font-extrabold">Apellido:</span> {{ lastName }}</p>
  <form @submit.prevent="saveName" class="grid gap-4 lg:grid-cols-3 sm:grid-cols-12">
    <input v-model="newName.name" type="text" class="p-2 mr-1 border border-gray-600 rounded" />
    <input v-model="newName.lastName" type="text" class="p-2 ml-1 border border-gray-600 rounded" />
    <button type="submit" class="p-2 ml-2 text-white bg-indigo-600 rounded">Submit</button>
  </form>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
import {useRouter} from 'vue-router'
const router = useRouter()

const name = computed(() => {
  return store.state.user.name
})
const lastName = computed(() => {
    return store.state.user.lastName
})

const newName = ref({
    name: '',
    lastName: ''
})
function saveName() {
    store.dispatch('saveName', newName.value)
    store.dispatch('getNotificationNew')
    router.push('/about')
}
</script>

