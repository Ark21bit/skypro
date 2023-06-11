<template>
    <div class="w-full shadow-[0_0_20px_-7px] dark:shadow-none bg-white rounded-2xl p-4 flex flex-col gap-6" v-auto-animate>
		<p class="text-lg md:text-xl text-[#829D32]">Поможем вам в выборе курса и окажем любую помощь</p>
        <FormKit id="feedback" @submit="feedback" type="form" form-class="flex flex-col gap-4 w-full" :actions="false">
			<div class="flex max-md:flex-col gap-4">
				<FormKit name="name" autocomplete="off" validation="required" label-class="[--floating-Labels-focus-bg:white] [--floating-Labels-text:#787878]" label="Имя" type="text" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32]"></FormKit>
				<FormKit name="email" autocomplete="off" validation="required|email" label-class="[--floating-Labels-focus-bg:white] [--floating-Labels-text:#787878]" label="Почта" type="email" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32]"></FormKit>
				<FormKit v-model="value" name="course" type="select" autocomplete="off" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32]">
					<option value="Курс не выбран">Курс не выбран</option>
					<option v-for="course in courses" :value="course.attributes.title">{{ course.attributes.title }}</option>
				</FormKit>
				<FormKit type="submit" input-class="$remove:bg-blue-600 bg-[#829D32] $remove:font-normal font-semibold rounded-2xl" outer-class="md:ml-auto" :ignore="false">Отправить</FormKit>
			</div>
			<FormKitMessages/>
        </FormKit>
        <p class="-mt-5 text-[#787878] text-[10px] md:text-xs">Оставляя заявку вы даёте согласие на обработку персональных данных.</p>					
		<button type="button" @click="message.title = null" class="flex items-center gap-4 px-6 py-2 rounded-2xl w-fit text-[#0f1119]" :class="message.type ? 'shadow-[0_0_20px_-7px]' : 'bg-red-500'" v-if="message.title">
			<span>{{message.title}}</span>
			<Icon name="material-symbols:close-rounded" class="text-xl"/>
		</button>		
	</div>	
</template>

<script setup>
import { reset } from '@formkit/core'
import { FormKitMessages } from '@formkit/vue'

const token = "6082770868:AAEvYKZ9xLk7XRGHVe5PzJ1A1i6gw8_bnZo"
const chat_id = "-935846056"
const URL = `https://api.telegram.org/bot${token}/sendMessage`

const user = useStrapiUser()

const { find } = useStrapi()

const value = ref('Курс не выбран')

const { data:courses, error } = await useAsyncData(
'courses',
() => find('courses'),
{ transform: ( courses ) => courses.data }
)

if ( error.value ) console.log( error)

let message = ref({title:null, type:true})

const feedback = async(forms) =>{
    let msg = "<b>Заявка с сайта!</b>\n"
	+ `<b>Пользователь:</b> ${user.value.username ?? 'Не определённый пользователь'}\n`
	+ `<b>Имя:</b> ${forms.name}\n`
    + `<b>Email:</b> ${forms.email}\n`
    + `<b>Желаемый курс:</b> ${forms.course}\n`
	const {data, error} = useFetch(URL,{
		body:{
			'chat_id': chat_id,
			'parse_mode': 'html',
			'text': msg
		},
		method:'post'
	})

	if (error.value) return message.value.title = 'При отправке произошла ошибка!', message.value.type = false
	message.value.title = 'Успешная отправка!', message.value.type = true 
	reset('feedback')
}

</script>