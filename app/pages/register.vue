<script setup lang="ts">
definePageMeta({
    layout: "auth",
});
</script>

<template>
    <section class="register">
        <div class="container">
            <div class="register__wrapper">
                <UiTitle class="register__title" style="color: black">Регистрация</UiTitle>
                <div class="register__form">
                    <AuthInput :label="'Логин'" placeholder="Ваш логин" type="text" />
                    <AuthInput :label="'Email'" placeholder="Ваша почта" type="email" />
                    <AuthInput :label="'Пароль'" placeholder="Ваш пароль" type="password" />
                </div>
                <AuthBtn>Создать аккаунт</AuthBtn>
                <span class="register__span">
                    Уже есть аккаунт?
                    <NuxtLink class="register__link" to="/login"> Войти</NuxtLink>
                </span>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.register__wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 60px 25px;
    background-color: #fff;
    text-align: center;
    border-radius: 5px;
}

.register__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 260px;
    width: 100%;
}

.register__link {
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
