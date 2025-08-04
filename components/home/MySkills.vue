<template>
    <div class="max-w-7xl py-12 mx-auto flex flex-col justify-center items-center">
        <div>
          <h1 class="md:text-5xl text-4xl font-bold flex gap-2">
            My<span class="text-red-600">Skills</span>
          </h1>
        </div>
        <div class="flex flex-wrap">
          <div class="flex gap-4 mt-5">
            
            <div v-for="(skink, index) in sklLinks" :key="index"
              :class="`md:w-20 w-14 md:h-20 h-14  rounded-full flex justify-center items-center ${skink.bg}`"
            >

              <Icon :name="skink.icon" :style="`color: ${skink.color}`"  class="md:w-10 w-6 md:h-10 h-6" />
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>

const sklLinks = [
    {
        icon: "uil:html5",
        color: "white",
        bg: "bg-red-600",

    },
    {
       
        icon: "uil:css3-simple",
        color: "white",
        bg: "bg-blue-600",

    },
    {
       
        icon: "ant-design:java-script-outlined",
        color: "black",
        bg: "bg-yellow-400",
    },
    {
        
        icon: "uil:vuejs",
        color: "white",
        bg: "bg-green-500",
    }
];
</script>