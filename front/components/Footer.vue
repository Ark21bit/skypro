<template>
    <footer class="grid-container py-4 mt-auto border-t-2 border-[#0f1119] dark:border-none dark:bg-gradient-to-b from-[#0f1119] to-black font-semibold text-sm md:text-base">
        <div class="flex flex-col gap-8 lg:gap-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-max h-fit">
                    <p class="col-span-full uppercase">Профессии</p>
                    <!-- <NuxtLink to="/" class="link-footer">Веб-разработчик</NuxtLink>
                    <NuxtLink to="/" class="link-footer">Python-разработчик</NuxtLink> -->
                    <NuxtLink to="/course-6" class="link-footer">Аналитик данных</NuxtLink>
                    <NuxtLink to="/course-7" class="link-footer">Java-разработчик</NuxtLink>
                    <NuxtLink to="/course-8" class="link-footer">Графический дизайнер</NuxtLink>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-max h-fit">
                    <p class="col-span-full uppercase">О нас</p>
                    <NuxtLink to="/courses" class="link-footer">Курсы</NuxtLink>
                    <NuxtLink to="/contacts" class="link-footer">Контакты</NuxtLink>
                    <NuxtLink to="/reviews" class="link-footer">Отзывы</NuxtLink>
                    <NuxtLink to="/partners" class="link-footer">Партнёрам</NuxtLink>
                    <NuxtLink to="/login" class="link-footer">Вход в SkyNet</NuxtLink>
                </div>
            </div>
            <div class="flex items-start max-md:gap-8 max-md:flex-col md:justify-between">
                <div class="flex flex-col gap-2">
                    <NuxtLink class="link-footer" to="mailto:skynet@example.com">skynet@example.com</NuxtLink>
                    <NuxtLink class="link-footer" to="tel:+79093044826">+7 909 304 48 26</NuxtLink>
                    <p class="text-[#0f1119] text-opacity-80 dark:opacity-100 dark:text-[#787878]">© SkyNet 2023</p>
                </div>
                <div class="flex items-center gap-4">
                    <NuxtLink to="https://t.me/s/okchemk" target="_blank">
                        <img src="/images/icons/tg.png" alt="" class="w-10 h-10">
                    </NuxtLink>
                    <NuxtLink to="https://vk.com/chemk21" target="_blank">
                        <img src="/images/icons/vk.png" alt="" class="w-10 h-10">
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style type="">
    .link-footer {
        @apply text-[#0f1119] dark:text-[#787878] transition-colors duration-500 hover:text-opacity-80 dark:opacity-100 dark:hover:text-white h-fit
    }
</style>