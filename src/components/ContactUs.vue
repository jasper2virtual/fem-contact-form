<template>
        <MessageSent :showMe="showSuccess" />
    <form class="flex flex-col gap-6 p-6 tablet:p-10 bg-white rounded-xl" @submit.prevent="onSubmit">
        <h2 class="app-text-heading">Contact Us</h2>
        <fieldset class="flex flex-col gap-6 tablet:flex-row">
            <div class="tablet:flex-1">
                <TextInput type="text" label="First Name" />
            </div>
            <div class="tablet:flex-1">
                <TextInput type="text" label="Last Name" />
            </div>
        </fieldset>

        <TextInput type="email" label="Email Address" />

        <fieldset>
            <legend class="app-text-body-s mb-2">Query Type *</legend>

            <RadioInput name="queryType" :items="[{
                value: 'general', label: 'General Enquiry'
            }, {
                value: 'support', label: 'Support Request'
            }]" />

        </fieldset>
        <TextAreaInput label="Message" />
        <CheckboxInput label="I consent to being contacted by the team" />
        <button type="submit"
            class="app-text-body-m-bold p-2 bg-green-600 hover:bg-green-900 text-white rounded-lg">Submit</button>
    </form>

</template>
<script lang="ts" setup>
import { ref } from 'vue'
import TextInput from './TextInput.vue'
import TextAreaInput from './TextAreaInput.vue'
import RadioInput from './RadioInput.vue'
import CheckboxInput from './CheckboxInput.vue'
import MessageSent from './MessageSent.vue'

const showSuccess = ref(false)
const onSubmit = () => {
   showSuccess.value = true
}
</script>
