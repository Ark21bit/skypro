<template>
    <div class="h-screen bg-black">
      <img src="https://app.logoza.ru/?logo=774ddf8438933c093f902ce3b16fbfc1" alt="">
    </div>
  </template>
  
  <script setup>
  let value = ref({})

  const {public:{baseUrl}} = useRuntimeConfig()
  
  const { data, error } = await useFetch('/courses',{
    baseURL:baseUrl
  })
  console.log(data)
  </script>