<template>
    <button class="auth-btn" type="button">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.auth-btn {
    padding: 10px 20px;
    font-size: 14px;
    text-align: center;
    background-color: #181818;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;

    transition: all 0.3s ease;

    &:hover {
        border: 1px solid #000;
        color: #000;
        background-color: #fff;
    }
}
</style>
