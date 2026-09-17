<script setup lang="ts">
interface item {
    icon: string;
    title: string;
    href?: string;
}

const items: item[] = [
    {icon: "icons/email.svg", title: "email", href: "mailto:1_wow_wow_1@mail.ru"},
    {icon: "icons/telegram.svg", title: "telegram", href: "https://t.me/Andrey364d"},
    {icon: "icons/whatsapp.svg", title: "whatsapp", href: "https://wa.me/79502725670"},
];
</script>

<template>
    <ul class="footer__socials socials">
        <li class="socials__item" v-for="item in items" :index="item.title" :title="item.title">
            <NuxtLink :href="item.href" class="socials__link" target="_blank" rel="noopener noreferrer">
                <img class="socials__icon" :src="item.icon" :alt="item.title" />
            </NuxtLink>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.socials {
    display: flex;
    align-items: center;
    gap: 20px;

    &__link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        background-color: #000000;
        border-radius: 50%;
        overflow: hidden;
        transition:
            background-color 0.3s ease,
            transform 0.2s ease;

        @include hover {
            &:hover {
                background-color: #ffffff;
                transform: translateY(-2px);

                .socials__icon {
                    color: #ffffff;
                }
            }
        }
    }

    &__icon {
        width: 40px;
        height: 40px;
        color: #333333;
        will-change: transform;
        transition: color 0.3s ease;
    }
}
</style>
