<template>
   <Courses :courses="courses"/>
    <Feedback/>
</template>

<script setup>
    useServerSeoMeta({
		title: 'Все курсы',
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