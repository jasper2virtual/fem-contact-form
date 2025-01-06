<template>
    <div class="flex flex-col">
        <div class="flex flex-col gap-4 tablet:flex-row">
            <label class="radio-input tablet:flex-1 app-text-body-m" v-for="item in props.items" :key="item.value">
                <input type="radio" :name="props.name" :value="item.value" @invalid.prevent="onInvalid"
                    v-model="inputVal" required />
                {{ item.label }}
            </label>
        </div>
        <span v-if="errorMsg" class=" text-red-400">{{ errorMsg }}</span>
    </div>

</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const props = defineProps<{
    name: string;
    items: { value: string; label: string }[];
}>()
const errorMsg = ref('')
const onInvalid = (e: Event) => {
    errorMsg.value = e.target.validationMessage
}
const inputVal = ref('')
watch(inputVal, () => {
    errorMsg.value = ''
})
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