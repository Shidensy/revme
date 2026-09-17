<script setup lang="ts">
export interface Anchor {
    href: string;
    text: string;
}

const anchors: Anchor[] = [
    {href: "#about", text: "О нас"},
    {href: "#advantages", text: "Преимущества"},
    {href: "#feedback", text: "Оставить заявку"},
    {href: "/login", text: "Личный кабинет"},
];

const isScrolled = ref(false);

const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
        isScrolled.value = true;
    } else {
        isScrolled.value = false;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <nav class="nav" :class="{'is-fixed': isScrolled}">
        <UiTitle class="nav__title hidden">REVME</UiTitle>

        <div class="nav__desktop">
            <ul class="nav__links links">
                <li class="links__item" v-for="anchor in anchors" :index="anchor">
                    <a class="links__link" :href="anchor.href">{{ anchor.text }}</a>
                </li>
            </ul>

            <FooterSocials class="nav__socials" />
        </div>

        <div class="nav__mobile">
            <NavMobile :anchors="anchors" />
        </div>
    </nav>
</template>

<style scoped lang="scss">
.nav {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 20px;
    z-index: 999;
    background-color: transparent;

    transition:
        background-color 0.3s ease,
        transform 0.3s ease,
        top 0.3s ease;
}

.nav__mobile {
    display: none;
}

.is-fixed {
    position: fixed;
    background-color: #141414;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.nav__desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.links {
    display: flex;
    align-items: center;

    &__item {
        padding: 0 10px;
        font-size: 20px;
        border-right: 1px solid #fff;

        &:last-child {
            border: none;
        }
    }

    &__link {
        color: #f5f5f5;

        transition: color 0.2s ease;

        @include hover {
            &:hover {
                color: #bebebe;
            }
        }
    }
}

@include tablet {
    .links__item {
        font-size: 16px;
    }
}

@include tablet-small {
    .nav__desktop {
        display: none;
    }

    .nav__mobile {
        display: block;
    }
}
</style>
