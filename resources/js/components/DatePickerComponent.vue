<template>
    <vc-date-picker
            :input-props="{ class: 'input', name: 'event_dates', autocomplete: 'off'}"
            :mode="mode"
            :formats="formats"
            v-model="selectedDate"
            is-inline
    ></vc-date-picker>`
</template>

<script>

</script>

<style scoped>

</style>