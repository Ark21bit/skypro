<template>
    <div class="flex flex-col gap-6 lg:gap-8">
		<div class="flex items-center gap-4">
			<p class="text-xl md:text-2xl uppercase">Мои данные</p>
			<div class="rounded-full bg-white h-0.5 w-8"></div>
		</div>
        <div class="flex flex-col gap-2">
            <p>Имя:</p>
            <p class="font-normal">{{ user.name }}</p>
        </div>
        <div class="flex flex-col gap-2">
            <p>Фамилия:</p>
            <p class="font-normal">{{ user.lastname }}</p>
        </div>
        <div class="flex flex-col gap-2">
            <p>Логин:</p>
            <p class="font-normal">{{ user.username }}</p>
        </div>
        <div class="flex flex-col gap-2">
            <p>Email:</p>
            <p class="font-normal">{{  user.email }}</p>
        </div>
	</div>
    <div class="flex flex-col gap-6 lg:gap-8">
		<div class="flex items-center gap-4">
			<p class="text-xl md:text-2xl uppercase">Мои курсы</p>
			<div class="rounded-full bg-white h-0.5 w-8"></div>
		</div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" v-if="courses?.length > 0">
            <NuxtLink v-for="course in courses" :to="`/profile/course-${course.id}`" class="rounded-2xl bg-[#272830] p-4 flex flex-col transition-all duration-500 hover:bg-opacity-80">
                <span class="uppercase text-lg md:text-xl pb-32 grow">{{ course.attributes.title }}</span>
                <span class="rounded-full px-6 py-2 bg-[#829D32] text-sm md:text-base w-fit">Начать обучение</span>
            </NuxtLink>
        </div>
        <div v-else class="flex flex-col gap-4 justify-center items-center">
            <p class="text-center text-lg md:text-xl lg:text-2xl">Тут пока ничего нет. Для оформления курса перейдите на соответствующую страницу.</p>
            <NuxtLink to="/courses" class="rounded-full px-6 py-2 bg-[#829D32] text-base md:text-lg w-fit">Выбрать курс</NuxtLink>
        </div>
	</div>
</template>

<script setup>
    useServerSeoMeta({
        title: 'Профиль',
        keywords: '',
        description: '',
    })
    definePageMeta({
        middleware: ["auth"]
    })

	const user = useStrapiUser()
	const token = useStrapiToken()

	const { find } = useStrapi()

	const { data:courses, error } = await useAsyncData('myCourses',
	 	()=>find('courses/lessons'),
	 	{ 
			headers:{authorization:`Bearer ${token.value}`},
			transform: (courses) => courses.data
		}	 
	)

	if( error.value ) console.log(error)
</script>