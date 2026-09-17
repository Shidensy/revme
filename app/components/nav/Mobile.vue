<script setup lang="ts">
import type {Anchor} from "./index.vue";

defineProps<{
    anchors: Anchor[];
}>();

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

const closeMenu = () => {
    isOpen.value = false;
};
</script>

<template>
    <button class="burger-menu" :class="{active: isOpen}" @click="toggleMenu" aria-label="Открыть меню">
        <span class="burger-line"></span>
    </button>

    <div class="nav-menu" :class="{active: isOpen}">
        <NuxtLink class="nav-item" :to="anchor.href" @click="closeMenu" v-for="anchor in anchors" :id="anchor.text">{{ anchor.text }}</NuxtLink>
    </div>
</template>

<style scoped lang="scss">
.burger-menu {
    position: relative;
    width: 30px;
    height: 24px;
    margin-left: auto;
    cursor: pointer;
    background: transparent;
    border: none;
    z-index: 30;
    display: flex;
    align-items: center;
    justify-content: center;

    .burger-line {
        position: relative;
        width: 100%;
        height: 3px;
        background-color: #b0b0b0;
        border-radius: 2px;
        transition: background-color 0.3s ease-in-out;

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #b0b0b0;
            border-radius: 2px;
            transition:
                transform 0.3s ease-in-out,
                top 0.3s ease-in-out,
                bottom 0.3s ease-in-out;
        }

        &::before {
            top: -9px;
        }

        &::after {
            bottom: -9px;
        }
    }

    &.active {
        .burger-line {
            background-color: transparent;

            &::before {
                top: 0;
                transform: rotate(45deg);
            }

            &::after {
                bottom: 0;
                transform: rotate(-45deg);
            }
        }
    }
}

.nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 20;
    transition: right 0.3s ease-in-out;

    &.active {
        right: 0;
    }

    .nav-item {
        padding: 15px 25px;
        font-size: 22px;
        color: #333333;
        text-decoration: none;
        text-align: center;
        transition:
            background-color 0.2s,
            color 0.2s;
    }
}
</style>
