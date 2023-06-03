<template>
    <div class="flex max-md:flex-col gap-6 items-center">
        <div class="w-full md:w-1/2 text-2xl md:text-3xl lg:text-4xl">Наша цель — обучить как можно больше людей IT-профессиям</div>
        <div class="w-full md:w-1/2">
            <img src="/images/partners/main.jpg" alt="" class="rounded-2xl">
        </div>
    </div>
    <div class="flex flex-col gap-6 md:gap-8">
        <div class="flex items-center gap-4">
            <p class="text-xl md:text-2xl uppercase">Варианты сотрудничества</p>
            <div class="rounded-full bg-white h-0.5 w-8"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div class="flex flex-col gap-4 p-4 bg-[#272830] rounded-2xl">
                <div class="p-2 bg-[#787878] w-fit rounded-full self-end">
                    <Icon name="ph:wallet-fill" class="text-3xl"/>
                </div>
                <p class="text-base md:text-lg uppercase grow">CPA</p>
                <p class="text-xs md:text-sm text-[#787878]">Заплатим за каждого клиента, которого вы приведете к нам</p>
            </div>
            <div class="flex flex-col gap-4 p-4 bg-[#272830] rounded-2xl">
                <div class="p-2 bg-[#787878] w-fit rounded-full self-end">
                    <Icon name="mdi:chat" class="text-3xl"/>
                </div>
                <p class="text-base md:text-lg uppercase grow">Бартерное сотрудничество</p>
                <p class="text-xs md:text-sm text-[#787878]">Сделаем взаимные публикации на разных площадках и обменяемся офферами</p>
            </div>
            <div class="flex flex-col gap-4 p-4 bg-[#272830] rounded-2xl">
                <div class="p-2 bg-[#787878] w-fit rounded-full self-end">
                    <Icon name="ph:student-fill" class="text-3xl"/>
                </div>
                <p class="text-base md:text-lg uppercase grow">Корпоративное обучение</p>
                <p class="text-xs md:text-sm text-[#787878]">Научим ваших сотрудников актуальным навыкам и дадим корпоративную скидку на обучение</p>
            </div>
            <div class="flex flex-col gap-4 p-4 bg-[#272830] rounded-2xl">
                <div class="p-2 bg-[#787878] w-fit rounded-full self-end">
                    <Icon name="basil:present-solid" class="text-3xl"/>
                </div>
                <p class="text-base md:text-lg uppercase grow">Подарки от партнеров</p>
                <p class="text-xs md:text-sm text-[#787878]">Поделимся со студентами скидками и офферами наших партнеров</p>
            </div>
        </div>
    </div>    

    <Feedback/>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-lg md:text-xl lg:text-2xl">
        <div class="p-4 bg-[#272830] rounded-2xl">Готовим специалистов, которых берут на работу</div>
        <div class="p-4 bg-[#272830] rounded-2xl">Индивидуальный план для каждого студента</div>
        <div class="p-4 bg-[#272830] rounded-2xl">70% студентов SkyNet на самом деле заканчивают курсы</div>
    </div>
</template>

<script setup>
    useServerSeoMeta({
        title: 'Партнёрам',
        keywords: '',
        description: '',
    })

</script>