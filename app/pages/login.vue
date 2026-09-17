<script setup lang="ts">
definePageMeta({
    layout: "auth",
});
</script>

<template>
    <section class="login">
        <div class="container">
            <div class="login__wrapper">
                <UiTitle class="login__title" style="color: black">Вход</UiTitle>
                <div class="login__form">
                    <AuthInput :label="'Email'" placeholder="Ваша почта" type="email" />
                    <AuthInput :label="'Пароль'" placeholder="Ваш пароль" type="password" />
                </div>
                <AuthBtn>Войти</AuthBtn>
                <span class="login__span">
                    Еще нет аккаунта?
                    <NuxtLink class="login__link" to="/register"> Регистрация</NuxtLink>
                </span>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.login__wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 60px 25px;
    background-color: #fff;
    text-align: center;
    border-radius: 5px;
}

.login__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 260px;
    width: 100%;
}

.login__link {
    position: relative;
    color: #000;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background-color: #000;

        transition: width 0.2s ease;
    }

    @include hover {
        &:hover::after {
            width: 100%;
        }
    }
}
</style>
