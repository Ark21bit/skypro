<template>
    <transition name="fade">
        <div v-show="menuIsShow" class="w-full top-0 h-screen absolute bg-black bg-opacity-30"></div>
    </transition>
    <header class="grid-container py-4 relative bg-[#0f1119]">
        <div class="flex items-center justify-between">
            <NuxtLink to="/">
                <img src="/images/header/logo.png" alt="" class="h-6">
            </NuxtLink>
            <nav class="text-sm md:text-base flex max-lg:flex-col max-lg:absolute max-lg:z-50 max-lg:w-full left-0 top-0 max-lg:py-6 items-center gap-6 transition-all duration-500 max-lg:border-t-2 border-white bg-[#0f1119]" :class=" menuIsShow ? 'top-full' : 'top-0 max-lg:-translate-y-full' ">
                <NuxtLink to="/courses" class="link-header">Все курсы</NuxtLink>
                <NuxtLink to="/contacts" class="link-header">Контакты</NuxtLink>
                <NuxtLink to="/reviews" class="link-header">Отзывы</NuxtLink>
                <NuxtLink to="/partners" class="link-header">Партнёрам</NuxtLink>
                <NuxtLink to="/profile" class="link-header" v-if="user">Профиль</NuxtLink>
                <button v-if="user" class="link-header" @click="logout">Выйти</button>
                <NuxtLink v-if="!user" to="/reg" class="link-header">Регистрация</NuxtLink>
                <NuxtLink v-if="!user" to="/login" class="link-header">Вход</NuxtLink>
            </nav>
            <button class="w-6 h-4 text-white flex flex-col gap-1 lg:hidden" @click="menuIsShow = !menuIsShow">
                <span class="w-full rounded-full bg-white h-0.5"></span>
                <span class="w-full rounded-full bg-white h-0.5"></span>
                <span class="w-full rounded-full bg-white h-0.5"></span>
            </button>
        </div>
    </header>
</template>

<script setup>
    const user = useStrapiUser()
    const { logout } = useStrapiAuth()

    let menuIsShow = ref(false)
</script>

<style type="text/tailwindcss">
    .link-header {
        @apply flex flex-col after:w-0 after:h-0.5 after:rounded-full after:bg-white after:transition-all after:duration-500 hover:after:w-full font-semibold
    }
</style>