<template>
	<Swiper :breakpoints="{
		768: {
			'slidesPerView': 3
		},
		1024: {
			'slidesPerView': 4
		},
		1440: {
			'slidesPerView': 5
		},
	}" :slides-per-view="2" :space-between="30" :loop="true" :speed="5000" :modules="[SwiperAutoplay]"
		:autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true, reverseDirection: false }"
		class="w-full swiper-score">
		<SwiperSlide v-for="item in 10" class="slide-score">
			<p class="text-4xl md:text-5xl">4.9</p>
			<div class="flex flex-col gap-0.5">
				<p class="text-lg md:text-xl">Логотип портала</p>
				<NuxtLink to="/"
					class="text-sm md:text-base underline text-[#787878] transition-colors duration-500 hover:text-white">22
					отзыва</NuxtLink>
			</div>
		</SwiperSlide>
	</Swiper>
</template>

<script setup>

</script>

<style type="text/tailwindcss">
.swiper-score .swiper-wrapper {
	@apply ease-linear
}

.swiper-score {
	@apply col-span-full
}

.slide-score {
	@apply flex items-center gap-4
}
</style>