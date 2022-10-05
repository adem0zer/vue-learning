<template>
  <p>Merhaba Adem</p>
  <p>{{ adem.message.value }}</p>
</template>

<script setup lang="ts">
import { adem } from "./export-class-component";
("./export-class-component.ts");
</script>
<style lang="css">
@import "./export-class-component.css";
</style>
