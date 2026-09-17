<template>
    <h2 class="title">
        <slot></slot>
    </h2>
</template>

<style scoped lang="scss">
.title {
    font-size: 32px;
    color: #ffffff;
}

@include mobile {
    .title {
        font-size: 24px;
    }
}
</style>
