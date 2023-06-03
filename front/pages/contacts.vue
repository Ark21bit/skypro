<template>
    <div class="flex items-center gap-4">
        <p class="text-xl md:text-2xl uppercase">Контакты</p>
        <div class="rounded-full bg-white h-0.5 w-8"></div>
    </div>
    <div class="flex flex-col gap-6 text-base md:text-lg">
        <div class="flex flex-col gap-1">
            <p>Дата создания:</p>
            <p class="font-normal">21.01.2023</p>
        </div>
        <div class="flex flex-col gap-1">
            <p>Режим и график работы:</p>
            <p class="font-normal">С понедельника по пятницу с 8:00 до 20:00</p>
        </div>
        <div class="flex flex-col gap-1">
            <p>Адрес:</p>
            <p class="font-normal">С понедельника по пятницу с 8:00 до 20:00</p>
        </div>
        <div class="flex flex-col gap-1">
            <p>Контакты:</p>
            <NuxtLink class="text-[#829D32] underline underline-offset-2 transition-all duration-500 hover:opacity-50" to="mailto:skynet@example.com">skynet@example.com</NuxtLink>
            <NuxtLink class="text-[#829D32] underline underline-offset-2 transition-all duration-500 hover:opacity-50" to="tel:+79093044826">+7 909 304 48 26</NuxtLink>
        </div>
        <div class="flex items-center gap-1">
            <p>БИК:</p>
            <p class="font-normal">049706609</p>
        </div>
        <div class="flex items-center gap-1">
            <p>р/с:</p>
            <p class="font-normal">40817810575007046538</p>
        </div>
        <div class="flex items-center gap-1">
            <p>к/с:</p>
            <p class="font-normal">30101810300000000609</p>
        </div>
        <div class="flex flex-col gap-1">
            <p>Образовательные программы:</p>
            <p v-for="course in courses" class="font-normal">{{ course?.attributes?.title ?? ' ' }}</p>
        </div>
        
    </div>
    <div class="col-[full] h-[350px] lg:h-[500px] mt-20 lg:mt-[70px]">
        <ClientOnly>      
            <yandex-map :coords="coord" :zoom="17" class="w-full h-full">
                <ymap-marker marker-id="Ymap1" :coords="coord"/>
            </yandex-map>
        </ClientOnly>
    </div>
</template>

<script setup>
    useServerSeoMeta({
        title: 'Контакты',
        keywords: '',
        description: '',
    })
    let coord = ref([56.121160, 47.277974])
    
    const { find } = useStrapi()

    const { data:courses, error } = await useAsyncData(
    'courses',
    () => find('courses'),
    { transform: ( courses ) => courses.data }
    )

    if ( error.value ) console.log( error )
</script>