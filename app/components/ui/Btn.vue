<template>
    <button class="btn" type="button">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.btn {
    position: relative;
    padding: 20px 30px;
    color: #ffffff;
    background-color: #f5914f;
    border-radius: 3px;
    text-transform: uppercase;

    transition: box-shadow 0.2s ease;

    @include hover {
        &:hover {
            box-shadow: 0 0 20px rgba(195, 198, 198, 0.5);
        }
    }
}

@include tablet-small {
    .btn {
        padding: 10px 20px;
        font-size: 12px;
    }
}
</style>
