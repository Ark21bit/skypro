<template>
    <div class="flex flex-col gap-6 lg:gap-8">
        <div class="flex items-center gap-4">
            <p class="text-xl md:text-2xl uppercase">Отзывы</p>
            <div class="rounded-full bg-white h-0.5 w-8"></div>
        </div>
        <Swiper :breakpoints="{
            768: {
                'slidesPerView': 2
            },
            1024: {
                'slidesPerView': 3
            },
            1440: {
                'slidesPerView': 4
            },
        }" 
        :slides-per-view="1" :space-between="30" :loop="true" :speed="15000" :modules="[SwiperAutoplay]"
        :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true, reverseDirection: false }"
        class="w-full text-black swiper-reviews">
            <SwiperSlide v-for="item in reviews" class="slide-reviews">
                <div class="flex items-center gap-6">
                    <img src="https://thumb.tildacdn.com/tild3162-6465-4061-b462-336466313032/-/cover/120x120/center/center/-/format/webp/_.jpeg"
                        alt="" class="rounded-full w-20">
                    <p class="text-lg md:text-xl">Имя пользователя</p>
                </div>
                <p class="text-sm md:text-base font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                    harum tempore porro suscipit deserunt quos nemo voluptate soluta qui! Impedit libero enim sint quaerat
                    quo alias sed, accusamus odio omnis.</p>
            </SwiperSlide>
        </Swiper>
        {{reviews}}
    </div>
</template>

<script setup>
    const { find } = useStrapi()

    const { data:reviews, error } = await useAsyncData(
        'reviews',
        () => find('reviews'),
        { transform: ( reviews ) => reviews.data }
    )

    if (error.value) console.log(error); 
</script>

<style type="text/tailwindcss">
.swiper-reviews .swiper-wrapper {
    @apply ease-linear
}

.slide-reviews {
    @apply bg-white p-4 rounded-2xl flex flex-col gap-4
}
</style>