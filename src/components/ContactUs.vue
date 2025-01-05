<template>
    <form class="flex flex-col gap-6 p-6 tablet:p-10 bg-white rounded-xl">
        <h2 class="app-text-heading">Contact Us</h2>
        <fieldset class="flex flex-col gap-6 tablet:flex-row">
            <label class="text-input tablet:flex-1">
                <span>First Name *</span>
                <input type="text" required />
            </label>
            <label class="text-input tablet:flex-1">
                <span>Last Name *</span>
                <input type="text" required />
            </label>
        </fieldset>
        <label class="text-input">
            <span>Email Address *</span>
            <input type="email" required />
        </label>
        <fieldset class="flex flex-col gap-4 tablet:flex-row">
            <legend class="app-text-body-s mb-2">Query Type *</legend>
            <label class="radio-input tablet:flex-1">
                <input type="radio" name="queryType" value="general" required />
                General Enquiry
            </label>
            <label class="radio-input tablet:flex-1">
                <input type="radio" name="queryType" value="support" required />
                Support Request
            </label>
        </fieldset>
        <label class="textarea-input">
            <span>Message *</span>
            <textarea required></textarea>
        </label>
        <label class="flex items-center gap-x-2">
            <input type="checkbox" class="checkbox [--chkbg:theme(colors.green.600)]" required />
            I consent to being contacted by the team *
        </label>
        <button type="submit"
            class="app-text-body-m-bold p-2 bg-green-600 hover:bg-green-900 text-white rounded">Submit</button>
    </form>
</template>
<style lang="scss" scoped>
@use '/src/style.scss';

label.text-input {
    @extend .app-text-body-s;
    @apply flex flex-col gap-2;

    &>input {
        @apply border rounded p-2;
        @apply hover:border-green-600;
        @apply focus:border-green-600;
    }
}

label.textarea-input {
    @extend .app-text-body-s;
    @apply flex flex-col gap-2;

    &>textarea {
        @apply border rounded p-2;
        @apply min-h-52 tablet:min-h-32;
        @apply hover:border-green-600;
        @apply focus:border-green-600;
    }
}

label.radio-input {
    @extend .app-text-body-m;
    @apply flex items-center gap-2 border rounded p-2;
    @apply hover:border-green-600;
    @apply focus:border-green-600 has-[:checked]:border-green-600 has-[:checked]:bg-green-200;
    &>input{
        @apply radio checked:bg-green-600;
    }
}
</style>