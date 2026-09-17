<template>
    <section class="about" id="about">
        <div class="container">
            <div class="about__wrapper">
                <div class="about__content">
                    <h2 class="about__title">О нашей компании</h2>
                    <p class="about__text">
                        О нашей компании Наш сервис — это экосистема умных QR-отзывов, которая бережет репутацию заведений и продвигает их на картах РФ. Мы работаем с кофейнями, салонами красоты,
                        отелями, помогая им растить рейтинги на ключевых геосервисах. Мы трансформируем критику в точки роста, позволяя владельцам перехватывать негатив до того, как он попадет в сеть.
                        Мы ценим простоту, измеримый результат в виде роста выручки и помогаем партнерам строить честный бизнес с идеальным цифровым профилем.
                    </p>
                </div>

                <img class="about__img" src="/images/about-2.webp" alt="Map with pins" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 60px;
}

.about__title {
    font-size: 28px;
    font-weight: 800;
}

.about__text {
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
}

.about__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

@include tablet {
    .about__wrapper {
        grid-template-columns: 1fr;
        gap: 0;
    }
}

@include mobile {
    .about__text {
        line-height: 1.5;
        font-size: 14px;
    }
}
</style>
