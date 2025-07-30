<template>
  <div
    class="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
  >
    <img :src="props.image" alt="Project 1" class="w-full h-48 object-cover" />
    <div class="p-4 flex flex-col justify-center items-center text-center">
      <h2 class="text-3xl font-bold">
        {{props.title }}
      </h2>
      <p class="text-gray-500">
        {{props.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "title",
  },
  description: {
    type: String,
    default: "description",
  },
  image: {
    type: String,
    default: "",
  },
});
</script>
