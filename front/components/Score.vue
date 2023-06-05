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
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.4</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/academy.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">10 отзывов</p>
			</div>
		</SwiperSlide>
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.4</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/catalog.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">12 отзывов</p>
			</div>
		</SwiperSlide>
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.3</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/kurs.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">17 отзывов</p>
			</div>
		</SwiperSlide>
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.9</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/kurses.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">20 отзывов</p>
			</div>
		</SwiperSlide>
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.7</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/obrazoval.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">19 отзывов</p>
			</div>
		</SwiperSlide>
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.2</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/sravni.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">7 отзывов</p>
			</div>
		</SwiperSlide>
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.4</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/academy.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">10 отзывов</p>
			</div>
		</SwiperSlide>
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.4</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/catalog.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">12 отзывов</p>
			</div>
		</SwiperSlide>
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.3</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/kurs.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">17 отзывов</p>
			</div>
		</SwiperSlide>
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.9</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/kurses.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">20 отзывов</p>
			</div>
		</SwiperSlide>
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.7</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/obrazoval.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">19 отзывов</p>
			</div>
		</SwiperSlide>
		<SwiperSlide class="slide-score">
			<p class="text-4xl md:text-5xl">4.2</p>
			<div class="flex flex-col gap-0.5">
				<img class="w-48 h-10 aspect-video object-contain object-left invert dark:invert-0" src="/images/score/sravni.png" alt="">
				<p class="text-sm md:text-base text-[#787878]">7 отзывов</p>
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