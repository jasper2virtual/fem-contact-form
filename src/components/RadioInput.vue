<template>
    <label class="radio-input tablet:flex-1 app-text-body-m">
        <input type="radio" :name="props.name" :value="props.value" required />
        {{ props.label }}
    </label>
</template>

<script lang="ts" setup>
const props = defineProps<{
    name: string;
    value:string;
    label: string;
}>()
</script>

<style lang="scss" scoped>
.radio-input {
    @apply flex items-center gap-2 border rounded p-2;
    @apply hover:border-green-600;
    @apply focus:border-green-600 has-[:checked]:border-green-600 has-[:checked]:bg-green-200;

    &>input {
        @apply radio checked:bg-green-600;
    }
}
</style>