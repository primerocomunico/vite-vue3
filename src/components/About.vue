/<template>
  <div>
      <h1 class="mb-6 font-extrabold text-3xl">Tu Nombre Completo es: {{completeName}}</h1>
      <button @click="edit" class="p-2 ml-2 text-white bg-indigo-600 rounded">¿Quieres editarlo?</button>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore()
import {useRouter} from 'vue-router'
const router = useRouter()

const name = computed(() => {
  return store.state.user.name
})
const lastName = computed(() => {
    return store.state.user.lastName
})
const completeName = computed(() => {
    return `${name.value} ${lastName.value}`
})

function edit() {
    store.dispatch('getNotificationEdit')
    router.back()
}
</script>

