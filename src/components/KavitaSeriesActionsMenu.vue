<template>
  <q-btn icon="fa fa-pen-to-square"
         flat
         padding=".375rem .75rem"
         style="background: #6c757d; border-radius: 15%">
    <SeriesActionsMenu/>
  </q-btn>
</template>

<script setup lang="ts">import SeriesActionsMenu from "@/components/SeriesActionsMenu.vue"</script>

<style scoped lang="scss">
@import '../styles/scoped.scss';
</style>
