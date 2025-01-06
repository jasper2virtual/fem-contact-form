<template>
    <transition>
    <div v-if="props.showMe"  role="alert" class="sticky top-4 mx-auto flex gap-2 bg-gray-900 text-white rounded-lg p-4 items-start w-fit">
        <img src="/src/assets/images/icon-success-check.svg" />
        <div class="flex flex-col gap-2">
            <span class="app-text-body-m-bold">Message Sent!</span>
            <span class="app-text-body-s">Thanks for completing the form. We’ll be in touch soon!</span>
        </div>
    </div>
    </transition>
</template>
<script setup lang="ts">
const props = defineProps<{
    showMe: boolean;
}>()
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>