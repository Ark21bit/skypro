<template>
    <img src="/images/header/logo.png" alt="" class="h-20">
    <p class="text-white whitespace-pre">{{ data }}</p>
</template>
  
  <script setup>
  const { data, error, } = await useCFetch('/courses')
  
  console.log(error);
  </script>