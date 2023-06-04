<template>
    <div class="flex items-center gap-4">
        <p class="text-xl md:text-2xl uppercase">Регистрация</p>
        <div class="rounded-full bg-white h-0.5 w-8"></div>
    </div>
    <FormKit @submit="reg" type="form" form-class="flex flex-col gap-2 items-center" :actions="false">
        <FormKit name="name" autocomplete="off" validation="required" label="Имя" type="text" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit name="lastname" autocomplete="off" validation="required" label="Фамилия" type="text" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit name="email" autocomplete="off" validation="required|email" label="Email" type="email" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit name="username" autocomplete="off" validation="required" label="Логин" type="text" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit name="password" autocomplete="off" validation="required|length:6" label="Пароль" type="password" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit name="avatar" autocomplete="off" validation="required" label="Аватарка" type="file" accept=".jpg,.png,.webp" outer-class="w-full md:w-1/2" inner-class="$remove:focus-within:ring-blue-500 focus-within:ring-[#829D32] $remove:max-w-md"></FormKit>
        <FormKit type="submit" input-class="$remove:bg-blue-600 bg-[#829D32] $remove:font-normal font-semibold rounded-2xl" :ignore="false">Отправить</FormKit>
		<FormKitMessages/>
   </FormKit>
</template>

<script setup>
    import { FormKitMessages } from '@formkit/vue'

    const { register } = useStrapiAuth()
    const { create } = useStrapi()
    const router = useRouter()

    const reg = async(forms)=>{
        const [ avatar ] = forms.avatar     
        const formData = new FormData()
        formData.append('files', avatar.file)   

        const {data:avatarUploads, error:avatarUploadError} = await useFetch('http://localhost:1337/api/upload',{
            body: formData,
            method:'post',
            key: 'avatar'
        })        

        if (avatarUploadError.value) console.log(avatarUploadError)

        const [ avatarUpload ] = avatarUploads.value

        const { error:userRegError} = await useAsyncData('user', ()=>register({ 
            username:forms.username,
            email:forms.email,
            password:forms.password, 
            name:forms.name, 
            lastname:forms.lastname, 
            avatar:avatarUpload?.id
        }) )
       
        if (userRegError.value) console.log(userRegError)

        router.push('/')
    }

    useServerSeoMeta({
        title: 'Страница регистрации',
        keywords: '',
        description: '',
    })    
</script>