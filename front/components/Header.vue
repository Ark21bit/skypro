<template>
    <transition name="fade">
        <div v-show="menuIsShow" @click="menuIsShow = !menuIsShow" class="lg:hidden w-full top-0 h-screen absolute bg-black bg-opacity-30"></div>
    </transition>
    <header class="grid-container py-4 relative bg-white dark:bg-[#0f1119]">
        <div class="flex items-center justify-between">
            <NuxtLink to="/" class="flex items-center gap-2">
                <img src="/images/header/logo.png" alt="" class="w-12">
                <p class="font-semibold text-xl">SkyNet</p>
            </NuxtLink>
            <nav class="text-sm md:text-base flex max-lg:flex-col max-lg:absolute max-lg:z-50 max-lg:w-full left-0 top-0 max-lg:py-6 items-center gap-6 transition-all duration-500 max-lg:border-t-2 border-[#0f1119] dark:border-white bg-white dark:bg-[#0f1119]" :class=" menuIsShow ? 'top-full' : 'top-0 max-lg:-translate-y-full' ">
                <NuxtLink to="/courses" class="link-header">Все курсы</NuxtLink>
                <NuxtLink to="/contacts" class="link-header">Контакты</NuxtLink>
                <NuxtLink to="/reviews" class="link-header">Отзывы</NuxtLink>
                <NuxtLink to="/partners" class="link-header">Партнёрам</NuxtLink>
                <NuxtLink to="/profile" class="link-header" v-if="user">Профиль</NuxtLink>
                <button v-if="user" class="link-header" @click="logout">Выйти</button>
                <NuxtLink v-if="!user" to="/reg" class="link-header">Регистрация</NuxtLink>
                <NuxtLink v-if="!user" to="/login" class="link-header">Вход</NuxtLink>
            </nav>
            <div class="flex items-center gap-4">
                <button class="lg:hidden" @click="menuIsShow = !menuIsShow">
                    <Icon name="ic:sharp-menu" class="text-2xl"/>
                </button>            
                <UseDark v-slot="{ isDark, toggleDark }">
                    <button @click="toggleDark()">
                        <Icon name="fluent:dark-theme-20-regular" class="text-2xl"/>
                    </button>
                </UseDark>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { UseDark } from '@vueuse/components'

    const isDark = useDark()

    const user = useStrapiUser()
    const { logout } = useStrapiAuth()

    let menuIsShow = ref(false)
</script>

<style type="text/tailwindcss">
    .link-header {
        @apply flex flex-col after:w-0 after:h-0.5 after:rounded-full after:bg-[#0f1119] dark:after:bg-white after:transition-all after:duration-500 hover:after:w-full font-semibold
    }
</style>