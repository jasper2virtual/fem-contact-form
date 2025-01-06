<template>
    <label class="textarea-input app-text-body-s">
        <span>{{ props.label }} *</span>
        <textarea required @invalid.prevent="onInvalid" v-model="inputVal" @blur="onBlur" :class="{
            'border-red-400': errorMsg
        }"></textarea>
        <span v-if="errorMsg" class=" text-red-400">{{ errorMsg }}</span>
    </label>
</template>

<script lang="ts" setup>
import { ref,watch } from 'vue'
const props = defineProps<{
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
.textarea-input {

    @apply flex flex-col gap-2;

    &>textarea {
        @apply border rounded p-2;
        @apply min-h-52 tablet:min-h-32;
        @apply hover:border-green-600;
        @apply focus:border-green-600;
    }
}
</style>