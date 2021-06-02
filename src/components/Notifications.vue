/<template>
  <div>
      <div
      v-if="store.state.user.newNotification || store.state.user.editNotification"
      class="w-full lg:w-1/2 pt-3 pr-3"
    >
      <div
        class="
          flex flex-col
          lg:flex-row-reverse
          rounded
          overflow-hidden
          h-auto
          lg:h-32
          border
          shadow shadow-lg
        "
      >
        <img
          class="block h-auto w-full lg:w-48 flex-none bg-cover"
          src="https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <div
          class="
            bg-white
            rounded-b
            lg:rounded-b-none lg:rounded-r
            p-4
            flex flex-col
            justify-between
            leading-normal
          "
        >
          <div v-if="store.state.user.newNotification" class="text-black font-bold text-xl mb-2 leading-tight">
            Alguien ha creado un nuevo nombre:
          </div>
          <div v-if="store.state.user.editNotification" class="text-black font-bold text-xl mb-2 leading-tight">
            Alguien quiere editar el nombre:
          </div>
          <p class="text-grey-darker text-base">{{ completeName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const name = computed(() => {
  return store.state.user.name
})
const lastName = computed(() => {
  return store.state.user.lastName
})
const completeName = computed(() => {
  return `${name.value} ${lastName.value}`
})
</script>