<template>
    <div class="col-span-full bg-[url(/images/courses/bg.jpg)] bg-cover w-full h-96 bg-top-left py-8 lg:py-12 -mt-8 lg:-mt-12 relative">        
        <div class="absolute bg-black top-0 left-0 bg-opacity-60 w-full h-full"></div>
        <div class="wrapper flex flex-col gap-8 lg:gap-12 text-white z-10 relative">
            <div class="flex flex-col gap-1">
                <p class="text-3xl md:text-4xl lg:text-5xl text-center">{{ course?.attributes?.title }}</p>
                <p class="text-3xl md:text-4xl lg:text-5xl text-center">новая работа уже через</p>
                <p class="text-3xl md:text-4xl lg:text-5xl text-center">{{ course?.attributes?.time }} мес.</p>
            </div>
            <button class="w-full rounded-full bg-[#829D32] text-white transition-colors duration-500 hover: px-5 py-3 text-lg md:text-xl">Записаться на курс</button>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="flex flex-col gap-4">
            <p class="uppercase">Найдем вам работу или вернем деньги</p>
            <p class="text-[#787878]">Если не устроим вас на новую работу за 4 месяца после курса</p>
        </div>
        <div class="flex flex-col gap-4">
            <p class="uppercase">Даем юридические гарантии</p>
            <p class="text-[#787878]">Не просто обещаем, а прописываем условия в договоре</p>
        </div>
        <div class="flex flex-col gap-4">
            <p class="uppercase">Научим с нуля</p>
            <p class="text-[#787878]">Получится, даже если у вас нет опыта в IT</p>
        </div>
    </div>
	
	<Feedback/>
    <Warranty/>
    <Students/>

    <div class="flex flex-col gap-6 md:gap-8">
        <div class="flex items-center gap-4">
			<p class="text-xl md:text-2xl uppercase">Наши преподаватели</p>
			<div class="rounded-full bg-white h-0.5 w-8"></div>
		</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex gap-4" v-for="teacher in teachers">
                <img :src="teacher.attributes.img.data.attributes.formats.large.url" alt="" class="rounded-md w-24 md:w-28">
                <div class="flex flex-col gap-2">
                    <p class="text-[#787878] text-sm md:text-base">{{teacher?.attributes?.name}} {{teacher?.attributes?.lastname}}</p>
                    <p class="text-base md:text-lg">{{teacher?.attributes?.description}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="flex flex-col gap-4">
            <p class="uppercase">Возврат денег</p>
            <p class="text-[#787878]">Если вы передумаете учиться, то мы вернем полную сумму в течение первых двух недель</p>
        </div>
        <div class="flex flex-col gap-4">
            <p class="uppercase">Сэкономьте 13%</p>
            <p class="text-[#787878]">Получите налоговый вычет. Все подробности — у менеджера при записи на курс</p>
        </div>
        <div class="flex flex-col gap-4">
            <p class="uppercase">Остались вопросы?</p>
            <p class="text-[#787878]">Позвоните нам или оставьте свои данные в форме выше</p>
        </div>
    </div>

    <div class="bg-white rounded-2xl p-4 flex flex-col gap-6 lg:gap-8 text-black">
        <div class="flex max-md:flex-col md:justify-between md:items-center gap-4">
            <p class="text-xl md:text-2xl lg:text-3xl">Программа обучения</p>
            <p class="rounded-full border border-black w-fit px-4 py-1 text-xs md:text-sm">{{ course?.attributes?.time * 32 }} ч. обучения</p>            
        </div>
        <ul class="list-inside list-disc">
            <li>Индивидуальная проверка домашних заданий</li>
            <li>Поддержка наставника</li>
            <li>Мастер-классы онлайн с реальными рабочими задачами</li>
        </ul>
    </div>
</template>

<script setup>
    useServerSeoMeta({
        title: 'Страница курса',
        keywords: '',
        description: '',
    })

    const route = useRoute()
    
    /* код для выборки преподавателей с API */
    
    const { find } = useStrapi()

    const { data:teachers, error:errorTeachers } = await useAsyncData(
        'teachers',
        () => find('teachers?populate=img'),
        { transform: ( teachers ) => teachers.data }
    )

    if ( errorTeachers.value ) console.log( errorTeachers )

     /* код для выборки курса с API */
     
    const strapiUrl = useStrapiUrl()

    const { data:course, error:errorCourse } = await useFetch(`courses/${route.params.id}`, {
        baseURL:strapiUrl,
        key:'course',
        transform: ( course ) => course.data
    })
    
    if ( errorCourse.value ) throw createError({ statusCode: errorCourse.value.statusCode, statusMessage: errorCourse.value.statusMessage })  
</script>