<template>
    <button @click="router.go(-1)" class="flex items-center gap-4">
        <Icon name="tabler:arrow-back-up-double" class="text-xl"/>
        <span>Вернуться назад</span>
    </button>
    <p class="text-lg md:text-xl">{{ lesson?.title }}</p>
    <div v-if="lesson?.text" class="text-sm md:text-base w-full whitespace-pre-line" v-html="lesson?.text"></div>
    <video v-if="lesson?.video.data?.[0].attributes.url" :src="lesson?.video.data?.[0].attributes.url" controls class="w-full"></video>
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

    const router = useRouter()
    const route = useRoute()

    const token = useStrapiToken()
    const strapiUrl = useStrapiUrl() 

    const { data:lesson, error } = await useFetch(`courses/${route.params.courseid}/lessons`,{
        baseURL:strapiUrl,
        key:'myCourse',
        headers:{authorization:`Bearer ${token.value}`},
		transform: (course) => course.data.attributes.lessons?.find(a=> a.id == route.params.id)
    })

    if( error.value ) throw createError({ statusMessage:error.value.statusMessage, statusCode:error.value.statusCode })
    if( !lesson.value ) throw createError({ statusMessage:'Not Found', statusCode:404 })


</script>