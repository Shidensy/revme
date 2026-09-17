<script setup lang="ts">
interface Props {
    label?: string;
    error?: string;
    id?: string;
}

defineOptions({
    inheritAttrs: false,
});

withDefaults(defineProps<Props>(), {
    label: "",
    error: "",
    id: () => useId(),
});

const modelValue = defineModel();
</script>

<template>
    <div class="input__wrapper">
        <label class="label" v-if="label" :for="id">{{ label }}</label>
        <input class="input" :id="id" v-model="modelValue" v-bind="$attrs" maxlength="100" />
        <span class="error" v-if="error">{{ error }}</span>
    </div>
</template>

<style scoped lang="scss">
.input__wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.label {
    text-align: left;
    font-size: 14px;
    color: #000;
    opacity: 0.6;
}

.input {
    min-height: 45px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #000000;
    font-size: 16px;
    color: #000;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 600000s ease-in-out 0s;

    -webkit-text-fill-color: #000000;
}

.error {
    color: red;
    font-size: 12px;
}
</style>
