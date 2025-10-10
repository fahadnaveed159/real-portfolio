<template>
  <nuxt-link :to="props.target" target="_blank">
    <div class="max-w-sm mx-auto rounded-2xl hover:scale-105 shadow-lg hover:shadow-gray-400 transition duration-300 ease-in-out overflow-hidden  bg-white md:px-0 px-5 ">
      <img
        class="w-full h-48 object-cover"
        :src="props.imageUrl"
        :alt="title"
      />
      <div class="p-4 ">
        <h2 class="text-3xl text-black font-bold mb-2">{{props.title}}</h2>
        <p class="text-gray-500 font-medium mb-4">
          {{ props.description }}
        </p>
        <a
        target="_blank"
          :href="props.target"
          class="inline-block transform duration-300 hover:scale-110 hover:-translate-y-1 rounded-lg font-medium text-white bg-red-600 px-4 py-2 hover:bg-red-600 transition"
        >
          View Project
        </a>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "Title",
    },
    description: {
        type: String,
        default:
        "",
    },
    imageUrl: {
        type: String,
        default: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    },
    target: {
        type: String,
        default: "https://shofilm.vercel.app/",
    },
})
</script>
