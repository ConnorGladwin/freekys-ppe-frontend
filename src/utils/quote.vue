<template></template>

<script setup lang="ts">
import { jsPDF } from "jspdf";
import { onMounted, ref } from "vue";

onMounted(() => {
  const doc = new jsPDF();
  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
});
</script>
