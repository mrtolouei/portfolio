<template>
  <ClientOnly>
    <Header />
    <Console />
    <Footer />
  </ClientOnly>
</template>
<script setup lang="ts">
import Header from "~/components/Terminal/Header.vue";
import Console from "~/components/Terminal/Console.vue";
import Footer from "~/components/Terminal/Footer.vue";
</script>