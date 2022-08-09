<template>
  <section class="sm:rounded-tr-xl sm:rounded-tl-xl sm:block sm:fixed sm:py-2 sm:bottom-0 sm:inset-x-0 sm:z-50 sm:text-black sm:bg-white">
    <div class="sm:flex sm:justify-between sm:mx-[60px] sm:items-center">
      <a href="javascript:void()">
          <img :src="IconHome" alt="example" />
      </a>
      <a href="javascript:void()">
          <img :src="IconHeart" alt="example" />
      </a>
      <a href="javascript:void()">
          <img :src="IconAccount" alt="example" />
      </a>
    </div>
  </section>
</template>

<script setup>
import IconHome from '../assets/images/home.png'
import IconHeart from '../assets/images/heart.png'
import IconAccount from '../assets/images/account.png'
</script>