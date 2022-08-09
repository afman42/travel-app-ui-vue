<template>
  <section class="sm:rounded-tr-xl sm:rounded-tl-xl sm:block sm:fixed sm:py-2 sm:bottom-0 sm:inset-x-0 sm:z-50 sm:text-black sm:bg-white">
    <div class="sm:flex sm:justify-between sm:mx-[60px] sm:items-center">
      <router-link to="/">
          <img :src="IconHome" alt="example" />
      </router-link>
      <router-link to="/likes">
          <img :src="IconHeart" alt="example" />
      </router-link>
      <router-link to="/profile">
          <img :src="IconAccount" alt="example" />
      </router-link>
    </div>
  </section>
</template>

<script setup>
import IconHome from '../assets/images/home.png'
import IconHeart from '../assets/images/heart.png'
import IconAccount from '../assets/images/account.png'
</script>