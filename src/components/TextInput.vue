<template>
    <label class="text-input app-text-body-s">
        <span>{{ props.label }} *</span>
        <input :type="props.type" required @invalid.prevent="onInvalid" @blur="onBlur" v-model="inputVal" :class="{
            'border-red-400': errorMsg
        }" />
        <span v-if="errorMsg" class=" text-red-400">{{ errorMsg }}</span>
    </label>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const props = defineProps<{
    type: string;
    label: string;
}>()
const errorMsg = ref('')
const onInvalid = (e: Event) => {
    errorMsg.value = e.target.validationMessage
}
const inputVal = ref('')
watch(inputVal, () => {
    errorMsg.value = ''
})
const onBlur = () => {
    inputVal.value = inputVal.value.trim()
}
</script>

<style lang="scss" scoped>
.text-input {
    @apply flex flex-col gap-2;

    &>input {
        @apply border rounded p-2;
        @apply hover:border-green-600;
        @apply focus:border-green-600;
    }
}
</style>