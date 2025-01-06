<template>
    <div class="flex flex-col">
        <label class="flex gap-2">
            <input type="checkbox" class="checkbox [--chkbg:theme(colors.green.600)]" required
                v-model="inputVal"
                @invalid.prevent="onInvalid" />
            {{ props.label }} *
        </label>
        <span v-if="errorMsg" class=" text-red-400">{{ errorMsg }}</span>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
const props = defineProps<{
    label: string;
}>()
const errorMsg = ref('')
const onInvalid = (e: Event) => {
    errorMsg.value = (e.target as HTMLInputElement).validationMessage
}
const inputVal = ref(false)
watch(inputVal, () => {
    errorMsg.value = ''
})
</script>
