<template>
    <div class="w-full bg-white rounded-2xl p-4 flex flex-col gap-6">
		<p class="text-lg md:text-xl text-[#829D32]">Поможем вам разобраться в курсах и подберём лучшее решение</p>
        <FormKit @submit="feedback" type="form" form-class="flex max-md:flex-col md:items-end gap-4 w-full" :actions="false">
            <FormKit name="name" label-class="text-black" label="Имя" type="text" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32]"></FormKit>
            <FormKit name="email" label-class="text-black" validation="email" label="Почта" type="email" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32]"></FormKit>
			<FormKit type="submit" input-class="$remove:bg-blue-500 bg-[#829D32] $remove:font-normal font-semibold rounded-2xl" outer-class="md:ml-auto" :ignore="false">Отправить</FormKit>
        </FormKit>
        <p class="-mt-5 text-[#787878] text-[10px] md:text-xs">Оставляя заявку вы даёте согласие на обработку персональных данных.</p>
	</div>
</template>

<script setup>
const token = "6082770868:AAEvYKZ9xLk7XRGHVe5PzJ1A1i6gw8_bnZo"
const chat_id = "-935846056"
const URL = `https://api.telegram.org/bot${token}/sendMessage`

const feedback = async(forms) =>{
    let message = "<b>Заявка с сайта!</b>\n"
	+ `<b>Отправитель</b>: ${forms.name}\n`
    + `<b>Email</b>: ${forms.email}\n`
	const {data, error} = useFetch(URL,{
		body:{
			'chat_id': chat_id,
			'parse_mode': 'html',
			'text': message
		},
		method:'post'
	})
	if (error.value) return console.log(error)
}

</script>