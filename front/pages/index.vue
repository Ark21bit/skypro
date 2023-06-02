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
	
	<div class="flex flex-col gap-6 lg:gap-8">
		<div class="flex items-center gap-4">
			<p class="text-xl md:text-2xl uppercase">Наши курсы</p>
			<div class="rounded-full bg-white h-0.5 w-8"></div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<NuxtLink :to="`/course-${course?.id}`" v-for="course in courses"
				class="rounded-2xl p-4 flex flex-col gap-8 shadow-[0_0_20px_0_#b7e532] transition-transform duration-500 hover:scale-105">
				<div class="flex items-center gap-2 py-0.5 px-2 bg-[#829D32] bg-opacity-60 rounded-full w-fit">
					<Icon name="material-symbols:alarm-rounded" />
					<p>{{ course?.attributes?.time ?? ' ' }} мес.</p>
				</div>
				<div class="flex flex-col gap-4">
					<p class="text-lg uppercase">{{ course?.attributes?.title ?? ' ' }}</p>
					<p class="text-[#787878]">{{ course?.attributes?.description ?? ' ' }}</p>
				</div>
			</NuxtLink>
		</div>
	</div>

	<Reviews />
	<Score />
</template>
  
<script setup>
useServerSeoMeta({
	title: 'Главная',
	keywords: '',
	description: '',
})

/* код для связи с API */

const { find } = useStrapi()

const { data:courses, error } = await useAsyncData(
  'courses',
  () => find('courses'),
  { transform: ( courses ) => courses.data }
)

if ( error.value ) console.log( error )

</script>
