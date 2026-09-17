<script setup lang="ts"></script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <UiTitle class="footer__title">
                    <NuxtLink class="footer__link" to="/">REVME</NuxtLink>
                </UiTitle>

                <FooterSocials />

                <p class="footer__email">Наша почта - revme@mail.ru</p>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    background-color: #141414;
}

.footer__email {
    color: #fff;
    font-size: 16px;
}

.footer__wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 60px 0;
}

.footer__link {
    position: relative;
    color: #ffffff;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background-color: #ffffff;

        transition: width 0.2s ease;
    }

    @include hover {
        &:hover {
            &::after {
                width: 100%;
            }
        }
    }
}
</style>
