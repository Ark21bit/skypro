<template>
    <button @click="router.go(-1)" class="flex items-center gap-4">
        <Icon name="tabler:arrow-back-up-double" class="text-xl"/>
        <span>Вернуться назад</span>
    </button>
    <p class="text-lg md:text-xl">{{ lesson.title }}</p>
    <div v-if="lesson.text" class="text-sm md:text-base w-full whitespace-pre-line" v-html="lesson.text"></div>
    <video v-if="lesson.video.data?.[0].attributes.url" :src="lesson.video.data?.[0].attributes.url" controls class="w-full"></video>
    <Feedback/>
</template>

<script setup>
    useServerSeoMeta({
        title: 'Страница уроков',
        keywords: '',
        description: '',
    })
    definePageMeta({
        middleware: ["auth"]
    })
    const route = useRoute()

    
    const token = useStrapiToken()

    const {findOne} = useStrapi()
 
    const { data:lesson, error } = await useAsyncData('myCourse',
	 	()=>findOne('courses/lessons', route.params.courseid),
	 	{ 
			headers:{authorization:`Bearer ${token.value}`},
			transform: (course) => course.data.attributes.lessons?.find(a=> a.id == route.params.id)
	})     
    if (error.value) console.log(error);
    

    const router = useRouter()

</script>