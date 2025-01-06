<template>
    <form class="flex flex-col gap-6 p-6 tablet:p-10 bg-white rounded-xl">
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

        <fieldset class="flex flex-col gap-4 tablet:flex-row">
            <legend class="app-text-body-s mb-2">Query Type *</legend>
            <div class="tablet:flex-1">
                <RadioInput name="queryType" value="general" label="General Enquiry" />
            </div>
            <div class="tablet:flex-1">
                <RadioInput name="queryType" value="support" label="Support Request" />
            </div>
        </fieldset>
        <TextAreaInput label="Message" />
        <CheckboxInput label="I consent to being contacted by the team" />
        <button type="submit"
            class="app-text-body-m-bold p-2 bg-green-600 hover:bg-green-900 text-white rounded">Submit</button>
    </form>
</template>
<script lang="ts" setup>
import TextInput from './TextInput.vue'
import TextAreaInput from './TextAreaInput.vue'
import RadioInput from './RadioInput.vue'
import CheckboxInput from './CheckboxInput.vue'
</script>
