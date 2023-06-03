<template>
    <div class="col-span-full w-full bg-cover bg-top bg-[url(/images/reviews/bg.jpg)] py-8 lg:py-12 -mt-8 lg:-mt-12 relative">
        <div class="absolute bg-black top-0 left-0 bg-opacity-40 w-full h-full"></div>
        <div class="wrapper flex flex-col justify-center h-full text-white z-10 relative">
            <p class="text-3xl md:text-4xl lg:text-5xl text-center">Отзывы наших студентов</p>
        </div>
    </div>

    <Reviews/>
        
    <div class="flex flex-col gap-4 w-full rounded-2xl bg-cover bg-center bg-[url(/images/reviews/job.jpg)] relative justify-center overflow-hidden p-4">
        <div class="absolute bg-black top-0 left-0 bg-opacity-70 w-full h-full"></div>
        <div class="flex items-center gap-4 z-10">
            <p class="text-xl md:text-2xl uppercase">Выбор курса</p>
            <div class="rounded-full bg-white h-0.5 w-8"></div>
        </div>
        <NuxtLink to="/courses" class="w-full rounded-full bg-[#829D32] text-white transition-colors duration-500 hover: px-5 py-3 text-lg md:text-xl z-10 text-center">Хочу новые знания</NuxtLink>
    </div>
</template>

<script setup>
    useServerSeoMeta({
        title: 'Отзывы',
        keywords: '',
        description: '',
    })
</script>