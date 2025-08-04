<template>
    <div
      class="md:w-72 max-w-72 mx-auto md:h-60 border text-black rounded-xl shadow-lg m-4 flex justify-center items-center hover:scale-105 transition duration-300 ease-in-out"
    >
      <div
        class="flex p-5 text-center flex-col justify-center py-2 items-center h-full w-full"
      >
        <Icon :name="props.icon" :style="`color: ${props.color}`" size="40" />
        <h1 class="py-2 text-lg font-bold">
            {{ props.name }}
        </h1>
        <p class="text-gray-500 font-medium">
          {{ props.description }}
        </p>
      </div>
    </div>
</template>
<script setup>
 const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "red",
    },
 })
 

</script>