<script setup lang="ts">
interface Item {
    title: string;
    text: string;
}

const items: Item[] = [
    {title: "Перехват негатива", text: "Сервис ловит плохие отзывы и мгновенно отправляет их вам, позволяя решить проблему до того, как она попадет в сеть."},
    {title: "Вывод в топ карт", text: "Умный фильтр направляет оценки на Яндекс, 2ГИС и Google, легально поднимая вас выше конкурентов."},
    {title: "Рост выручки", text: "Идеальный рейтинг 4.9–5.0 работает как бесплатный магнит, приводя в заведение новых клиентов."},
];
</script>

<template>
    <section class="advantages" id="advantages">
        <div class="container">
            <div class="advantages__wrapper">
                <UiTitle class="advantages__title" style="color: #000; font-weight: 600; text-align: center">Наши преимущества</UiTitle>

                <ul class="advantages__list list">
                    <div class="list__item" v-for="item in items">
                        <Icon class="list__item-icon" name="icon:tick" />
                        <div class="list__item-content">
                            <h3 class="list__item-title">{{ item.title }}</h3>
                            <p class="list__item-text">{{ item.text }}</p>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.advantages__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 90px;
    font-family: "TildaSans", Arial, sans-serif;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.list__item {
    display: flex;
    gap: 40px;
}

.list__item-icon {
    width: 50px;
    height: 50px;
}

.list__item-content {
    max-width: 465px;
}

.list__item-title {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
}

.list__item-text {
    font-size: 18px;
    font-weight: 300;
}

@include tablet-small {
    .advantages__wrapper {
        gap: 30px;
    }

    .list__item-icon {
        display: none;
    }

    .list {
        gap: 35px;
    }

    .list__item-title {
        font-size: 18px;
    }

    .list__item-text {
        line-height: 1.5;
        font-size: 14px;
    }
}
</style>
