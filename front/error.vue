<template>
    <div class="flex flex-col gap-6 md:gap-8 min-h-screen items-center justify-center">
      <p class="text-[#829D32] text-7xl md:text-8xl lg:text-9xl">{{ error.statusCode }}</p>
      <p class="text-lg md:text-xl">{{ error.statusMessage }}</p>
      <button @click="handleError" class="text-xl md:text-2xl lg:text-3xl w-fit bg-[#829D32] px-4 py-2 rounded-full">На главную</button>
      {{error}}
    </div>
  </template>
  <script setup>
  const { error } = defineProps({
    error: Object
  })
  const handleError = () => clearError({ redirect: '/' })
  </script>