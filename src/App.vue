<template>
<main class="container mx-auto w-fit grid grid-rows-1
gap-x-[32px] 
grid-cols-[repeat(4,64px)] tablet:grid-cols-[repeat(8,64px)] desktop:grid-cols-[repeat(12,64px)]">
 <div class="col-span-full 
 desktop:col-start-3 desktop:col-end-11
 mt-8
 tablet:mt-32
 ">
    <ContactUs></ContactUs>
 </div>
</main>
</template>
<script setup lang="ts">
import ContactUs from './components/ContactUs.vue';


</script>