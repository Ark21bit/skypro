<template>
    <div class="flex flex-col gap-6 lg:gap-8">
        <div class="flex items-center gap-4">
            <p class="text-xl md:text-2xl uppercase">Отзывы</p>
            <div class="rounded-full bg-[#0f1119] dark:bg-white h-0.5 w-8"></div>
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
            <SwiperSlide v-for="review in reviews" class="slide-reviews">
                <div class="flex items-center gap-6">
                    <img :src="review?.attributes?.users_permissions_user?.data?.attributes?.avatar?.data?.attributes?.formats?.large?.url" alt="" class="rounded-full w-20">                        
                    <p class="text-lg md:text-xl">{{ review?.attributes?.users_permissions_user?.data?.attributes?.name }} {{ review?.attributes?.users_permissions_user?.data?.attributes?.lastname }}</p>
                </div>
                <p class="text-sm md:text-base font-medium">{{ review?.attributes?.description }}</p>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
    const { find } = useStrapi()

    const { data:reviews, error } = await useAsyncData(
        'reviews',
        () => find('reviews?populate[0]=users_permissions_user&populate[1]=users_permissions_user.avatar'),
        { transform: ( reviews ) => reviews.data }
    )

    if (error.value) console.log(error); 
</script>

<style type="text/tailwindcss">
.swiper-reviews .swiper-wrapper {
    @apply ease-linear
}

.slide-reviews {
    @apply bg-[#0f1119] text-white dark:text-[#0f1119] dark:bg-white p-4 rounded-2xl flex flex-col gap-4
}
</style>