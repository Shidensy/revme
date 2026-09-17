<template>
    <section class="action">
        <div class="container">
            <div class="action__wrapper">
                <UiTitle class="action__title">Присоединяйтесь к нам</UiTitle>
                <p class="action__subtitle">Оставьте заявку на персональную консультацию, чтобы примерить систему под ваш бизнес.</p>
                <a class="action__link" href="#feedback">
                    <UiBtn class="action__btn"><img class="action__btn-icon" src="/icons/arrow.svg" alt="arrow icon" />Оставить заявку</UiBtn>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.action {
    width: 100%;

    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url("/images/action-bg.webp");

    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    color: #fff;
}

.action__wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;

    text-align: center;
}

.action__subtitle {
    font-size: 18px;
}

.action__btn {
    position: relative;
}

.action__btn-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    transform: translateX(-100%) scale(1.5);
}

@include mobile {
    .action__subtitle {
        font-size: 16px;
    }

    .action__btn-icon {
        top: -40%;
    }
}
</style>
