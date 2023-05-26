<template>
    <div>
      <p class="text-6xl text-green-800">привет мир</p>
      <FormKit type="form" v-model="value">
          <FormKit type="text" name="name" validation="required|not:Admin" label="Name" help="Enter your character's full name" placeholder="первый input"/>
          <FormKit type="text" name="fio" validation="required|not:Admin" label="Name" help="Enter your character's full name" placeholder="первый input"/>        
      </FormKit>
    </div>
    {{ error }}
    {{ data }}
  </template>
  
  <script setup>
  let value = ref({})

  const {public:{baseUrl}} = useRuntimeConfig()
  
  const { data, error } = await useFetch('/courses',{
    baseURL:baseUrl
  })
  console.log(data)
  </script>