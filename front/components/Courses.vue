<template>
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
</template>

<script setup>
    const { courses } = defineProps({
        courses:{ type:Array, default:[] }
    })    
</script>
