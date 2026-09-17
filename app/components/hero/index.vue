<template>
    <div class="hero">
        <Nav />

        <div class="hero__wrapper">
            <div class="container">
                <div class="hero__content">
                    <h1 class="hero__title">REVME</h1>
                    <p class="hero__text">
                        Сервис автоматического управления репутацией, который помогает локальному бизнесу выходить в топ Яндекс Карт, 2ГИС и Google Maps. С помощью умных QR-кодов для отзывов мы
                        привлекаем высокие оценки от довольных гостей и помогаем заведениям моментально перехватывать негатив.
                    </p>
                    <a class="hero__link" href="#feedback">
                        <UiBtn>УЗНАТЬ ПОДРОБНОСТИ</UiBtn>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.hero {
    position: relative;
    width: 100%;
    height: 100vh;

    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("/images/hero-bg.webp");

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.hero__wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero__content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    color: #fff;
}

.hero__title {
    font-size: 72px;
    font-weight: 600;
    text-transform: uppercase;
}

.hero__text {
    font-size: 24px;
    text-align: center;
}

@include tablet-small {
    .hero__title {
        font-size: 56px;
    }

    .hero__text {
        font-size: 16px;
    }
}

@include mobile {
    .hero__text {
        line-height: 1.5;
        font-size: 14px;
    }
}
</style>
