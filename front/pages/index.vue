<template>
	<p class="text-3xl md:text-4xl lg:text-5xl">Поднимитесь на новый уровень знаний с SkyNet - вашим надежным партнером в обучении!</p>
	<div class="flex flex-col gap-6 lg:gap-8">
		<div class="flex items-center gap-4">
			<p class="text-xl md:text-2xl uppercase">Наши преимущества</p>
			<div class="rounded-full bg-white h-0.5 w-8"></div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-sm md:text-base">
			<div class="flex flex-col gap-4">
				<p class="uppercase text-base md:text-lg">Достойная зарплата</p>
				<p class="text-[#787878]">Найдем вам работу по новой профессии с гарантированным уровнем стартовой зарплаты.
				</p>
			</div>
			<div class="flex flex-col gap-4">
				<p class="uppercase text-base md:text-lg">Возврат денег</p>
				<p class="text-[#787878]">Если не устроим на работу за 4 месяца — вернем деньги.</p>
			</div>
			<div class="flex flex-col gap-4">
				<p class="uppercase text-base md:text-lg">Железная гарантия</p>
				<p class="text-[#787878]">Все условия зафиксировали в договоре.</p>
			</div>
		</div>
	</div>
	
	<Warranty/>
	<Students/>		
	
	<Courses :courses="courses"/>

	<Reviews />	
	<NuxtLink to="/reviews" class="flex items-center justify-end gap-2">
		<span>Все отзывы</span>
		<Icon name="material-symbols:arrow-right-alt-rounded" />
	</NuxtLink>

	<Score />
</template>
  
<script setup>
	useServerSeoMeta({
		title: 'Главная',
		keywords: ['Электронная платформа обучения', 'платформа обучения' , 'SkyNet'],
		description: 'SkyNet — программирование, маркетинг, аналитика и другие профессии. Онлайн-курсы.',
		lang: 'ru'
	})

	/* код для связи с API */

	const { find } = useStrapi()

	const { data:courses, error } = await useAsyncData(
	'courses',
	() => find('courses'),
	{ transform: ( courses ) => courses.data.slice(0, 6) }
	)

	if ( error.value ) console.log( error )
</script>
