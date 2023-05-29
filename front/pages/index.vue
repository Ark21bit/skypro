<template>
    <img src="/images/header/logo.png" alt="" class="h-20">
    <div class="dark:bg-white bg-black transition-colors duration-500 ease-linear rounded-md p-2 flex w-fit group/icon">
      <Icon name="uil:18-plus" class="text-white dark:text-black group-hover/icon:text-blue-400 transition-colors duration-500 ease-linear"/>
    </div>
    <UseDark v-slot="{ isDark, toggleDark }">
      <button @click="toggleDark()" class="text-white">
        <Icon :name="isDark? 'iconamoon:mode-dark-fill' : 'heroicons-solid:sun'" class="text-white group-hover/icon:text-blue-400 transition-colors duration-500 ease-linear"/>
      </button>
    </UseDark>
</template>
  
<script setup>  
import { UseDark } from '@vueuse/components'
</script>