<template>
    <div class="max-w-7xl py-12 mx-auto flex flex-col justify-center items-center">
        <div>
          <h1 class="text-5xl font-bold flex gap-2">
            My<span class="text-red-600">Skills</span>
          </h1>
        </div>
        <div class="flex flex-wrap">
          <div class="flex gap-4 mt-5">
            
            <div v-for="(skink, index) in sklLinks" :key="index"
              :class="`w-20 h-20  rounded-full flex justify-center items-center ${skink.bg}`"
            >

              <Icon :name="skink.icon" :style="`color: ${skink.color}`" size="40" />
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