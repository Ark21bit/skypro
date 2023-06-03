<template>
    <button @click="handleError">На главную</button>
    <p>{{ error.statusCode }}</p>
    <p>{{ error.statusMessage }}</p>
    {{error}}
  </template>
  <script setup>
  const { error } = defineProps({
    error: Object
  })
  const handleError = () => clearError({ redirect: '/' })
  </script>