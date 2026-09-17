<script setup lang="ts">
const textarea = ref("");
</script>

<template>
    <section class="feedback" id="feedback">
        <div class="container">
            <div class="feedback__wrapper">
                <UiTitle class="feedback__title">Оставьте свои контакты</UiTitle>
                <form class="feedback__form form" @submit.prevent>
                    <div class="form__inputs">
                        <div class="form__input-wrapper">
                            <label class="form__label hidden" for="name"></label>
                            <input class="form__input" type="text" id="name" name="name" placeholder="Имя" maxlength="100" autocomplete="on" required />
                        </div>

                        <div class="form__input-wrapper">
                            <label class="form__label hidden" for="email"></label>
                            <input class="form__input" type="email" id="email" name="email" placeholder="Email" maxlength="100" autocomplete="on" required />
                        </div>
                    </div>
                    <div class="form__textarea-wrapper">
                        <label class="form__label hidden" for="textarea"></label>
                        <textarea class="form__textarea" name="text" id="textarea" rows="6" placeholder="Комментарий" maxlength="250" v-model="textarea"></textarea>
                        <span class="form__input-counter" style="display: block; text-align: right">{{ textarea.length }} / 250</span>
                    </div>

                    <UiBtn type="submit">Отправить</UiBtn>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.feedback {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 90vh;

    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url("/images/feedback-bg.webp");

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    color: #fff;
}

.feedback__title {
    margin-bottom: 50px;
    text-align: center;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
}

.form__input,
.form__textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 15px 20px;
    border: 1px solid #fff;
}
</style>
