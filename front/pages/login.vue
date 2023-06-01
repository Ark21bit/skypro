<template>
    <FormKit type="form" @submit="logIn">
        <FormKit name="login" type="text" label="Логин"></FormKit>
        <FormKit name="password" type="password" label="пароль"></FormKit>
    </FormKit>
</template>

<script setup>
const { login } = useStrapiAuth()

const router = useRouter()

const logIn = async(forms)=>{    
    const { data, error } = await useAsyncData( 'login', () => login({ identifier: forms.login, password: forms.password }) )
    if ( error.value ) return console.log(error)
    router.push('/')
}
</script>
