<template>
    <div class="flex items-center gap-4">
        <p class="text-xl md:text-2xl uppercase">Регистрация</p>
        <div class="rounded-full bg-white h-0.5 w-8"></div>
    </div>
    <FormKit @submit="" type="form" form-class="flex flex-col gap-2 items-center" :actions="false">
        <FormKit name="name" autocomplete="off" validation="required" label="Имя" type="text" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit name="surname" autocomplete="off" validation="required" label="Фамилия" type="text" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit name="email" autocomplete="off" validation="required|email" label="Email" type="email" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit name="login" autocomplete="off" validation="required" label="Логин" type="text" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit name="password" autocomplete="off" validation="required" label="Пароль" type="password" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit type="submit" input-class="$remove:bg-blue-600 bg-[#829D32] $remove:font-normal font-semibold rounded-2xl" :ignore="false">Отправить</FormKit>
		<FormKitMessages/>
   </FormKit>
</template>

<script setup>
    useServerSeoMeta({
        title: 'Страница регистрации',
        keywords: '',
        description: '',
    })    
    import { reset } from '@formkit/core'
    import { FormKitMessages } from '@formkit/vue'
</script>