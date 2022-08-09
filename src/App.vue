<template>
  <div>
    <div v-if="!widthPhone">
      <router-view />
      <div v-if="router.currentRoute.value.fullPath === '/'">
        <BottomNavigator />
      </div>
    </div>
    <div v-else>
      Especially for mobile Phone
    </div>
  </div>
</template>

<script setup>
import BottomNavigator from './components/BottomNavigator.vue';
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue';
const router = useRouter();
const dimension = window.innerWidth;
const widthPhone = ref(false);
onMounted(() => {
  if (dimension > 500) {
    widthPhone.value = true 
  }
})
</script>