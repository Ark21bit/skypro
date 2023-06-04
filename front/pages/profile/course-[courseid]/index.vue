<template>
    <div class="flex flex-col gap-6 lg:gap-8">
		<div class="flex items-center gap-4">
			<p class="text-xl md:text-2xl uppercase">Уроки курса</p>
			<div class="rounded-full bg-white h-0.5 w-8"></div>
		</div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <NuxtLink v-for="lesson in course?.attributes?.lessons" :to="`/profile/course-${$route.params.courseid}/lessons-${lesson.id}`" class="flex flex-col gap-6 md:gap-8 rounded-2xl overflow-hidden bg-[#272830]">
                <img src="/images/lessons/main.png" alt="">
                <div class="flex flex-col px-4 pb-6 md:pb-8">
                    <Icon name="material-symbols:play-circle" class="text-3xl self-end"/>
                    <p class="text-base md:text-lg px-4 pb-4">{{ lesson.title }}</p>
                </div>
            </NuxtLink>
        </div>
	</div>
</template>

<script setup>
    useServerSeoMeta({
        title: 'Страница своих курсов',
        keywords: '',
        description: '',
    })
    definePageMeta({
        middleware: ["auth"]
    })

    const route = useRoute()

    const token = useStrapiToken()

    const { findOne } = useStrapi()

    const { data:course, error } = await useAsyncData('myCourse',
	 	()=>findOne('courses/lessons', route.params.courseid),
	 	{ 
			headers:{authorization:`Bearer ${token.value}`},
			transform: (course) => course.data
		})     

	if( error.value ) console.log(error);
</script>