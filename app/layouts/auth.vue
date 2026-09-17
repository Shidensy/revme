<template>
    <div class="auth">
        <NuxtLink class="auth__link" to="/">
            <img class="logo" src="/favicon.svg" alt="logo" />
        </NuxtLink>

        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.auth {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-width: 290px;
    width: 100%;
    background-color: #f1f1f1;
}

.logo {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 30px;
    background-color: #000;
}
</style>
