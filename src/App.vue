<template>
  <div class="p-4">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>Hello Vue 3 + Vite</h2>
    <router-view></router-view>

    <notifications />
  </div>
</template>

<script setup>
import Notifications from '../src/components/Notifications.vue'
components: {
  Notifications
}
</script>
