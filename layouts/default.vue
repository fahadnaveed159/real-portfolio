<script setup lang="ts">
import Footer from '~/components/layout/footer.vue';
import Navbar from '~/components/layout/navbar.vue';

</script>

<template>
    <div class="bg-black">
        <Navbar />
        <NuxtPage class="min-h-[500px]" />
        <Footer />
    </div>
</template>