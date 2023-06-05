<template>
    <div class="flex items-center gap-4">
        <p class="text-xl md:text-2xl uppercase">Логин</p>
        <div class="rounded-full bg-white h-0.5 w-8"></div>
    </div>
    <FormKit @submit="logIn" type="form" form-class="flex flex-col gap-2 items-center" :actions="false">
        <FormKit name="login" autocomplete="off" validation="required" label="Логин" type="text" label-class="[--floating-Labels-focus-bg:white] [--floating-Labels-text:#787878] dark:[--floating-Labels-focus-bg:#0f1119] dark:[--floating-Labels-text:white]" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit name="password" autocomplete="off" validation="required" label="Пароль" type="password" label-class="[--floating-Labels-focus-bg:white] [--floating-Labels-text:#787878] dark:[--floating-Labels-focus-bg:#0f1119] dark:[--floating-Labels-text:white]" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit type="submit" input-class="$remove:bg-blue-600 bg-[#829D32] $remove:font-normal font-semibold rounded-2xl" :ignore="false">Отправить</FormKit>
		<FormKitMessages/>
   </FormKit>
</template>

<script setup>
    useServerSeoMeta({
            title: 'Логин',
            keywords: '',
            description: '',
        })
    const { login } = useStrapiAuth()

    const router = useRouter()

    const logIn = async(forms)=>{    
        const { data, error } = await useAsyncData( 'login', () => login({ identifier: forms.login, password: forms.password }) )
        if ( error.value ) return console.log(error)
        router.push('/')
    }
</script>
