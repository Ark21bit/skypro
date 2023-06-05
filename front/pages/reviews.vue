<template>
    <div class="col-span-full w-full bg-cover bg-top bg-[url(/images/reviews/bg.jpg)] py-8 lg:py-12 -mt-8 lg:-mt-12 relative">
        <div class="absolute bg-black top-0 left-0 bg-opacity-40 w-full h-full"></div>
        <div class="wrapper flex flex-col justify-center h-full text-white z-10 relative">
            <p class="text-3xl md:text-4xl lg:text-5xl text-center">Отзывы наших студентов</p>
        </div>
    </div>

    <Reviews/>
        
    <div class="flex flex-col gap-4 w-full rounded-2xl bg-cover bg-center bg-[url(/images/reviews/job.jpg)] relative justify-center overflow-hidden p-4">
        <div class="absolute bg-black top-0 left-0 bg-opacity-70 w-full h-full"></div>
        <div class="flex items-center gap-4 z-10">
            <p class="text-xl md:text-2xl uppercase text-white">Выбор курса</p>
            <div class="rounded-full bg-white h-0.5 w-8"></div>
        </div>
        <NuxtLink to="/courses" class="w-full rounded-full bg-[#829D32] text-white transition-colors duration-500 hover: px-5 py-3 text-lg md:text-xl z-10 text-center">Хочу новые знания</NuxtLink>
    </div>

    <div class="flex flex-col gap-6 md:gap-8" v-if="user">
        <div class="flex items-center gap-4">
            <p class="text-xl md:text-2xl uppercase">Добавить свой отзыв</p>
            <div class="rounded-full bg-white h-0.5 w-8"></div>
        </div>
        <FormKit @submit="addReview" id="addReview" type="form" form-class="flex flex-col gap-2 items-center" :actions="false">
            <FormKit name="description" autocomplete="off" validation="required" label="Текст отзыва" type="textarea" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md" input-class="#remove:text-gray-700 text-white"></FormKit>
            <FormKitMessages class="w-full md:w-1/2"/>
            <FormKit type="submit" input-class="$remove:bg-blue-600 bg-[#829D32] $remove:font-normal font-semibold rounded-2xl" :ignore="false">Отправить</FormKit>
            <button type="button" @click="message.title = null" class="flex items-center gap-4 px-6 py-2 rounded-2xl w-fit" :class="message.type? 'bg-green-500' : 'bg-red-500'" v-if="message.title">
                <span>{{message.title}}</span>
                <Icon name="material-symbols:close-rounded" class="text-xl"/>
            </button>
        </FormKit>
    </div>
</template>

<script setup>
    import { reset } from '@formkit/core'
    import { FormKitMessages } from '@formkit/vue'
    useServerSeoMeta({
        title: 'Отзывы',
        keywords: '',
        description: '',
    })

    let message = ref({title:null, type:true})

    const { create } = useStrapi()
    const user = useStrapiUser()
    const token = useStrapiToken()
    const strapiUrl = useStrapiUrl()

    const addReview = async(forms) =>{      
        message.value = {title:null, type:true}
        const { data, error } = await useFetch(`reviews`, {
            baseURL:strapiUrl,
            method: 'POST',
            body:forms,
            headers:{Authorization:`Bearer ${token.value}`},            
        })

        if (error.value) return message.value.title = 'При отправке произошла ошибка!', message.value.type = false
        message.value.title = 'Успешная отправка!', message.value.type = true 
	    reset('addReview')
    }
</script>