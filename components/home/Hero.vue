<template>
  <div class="max-w-7xl mx-auto md:flex flex-wrap justify-between py-8 items-center animate__animated animate__backInLeft">
    <div class="md:max-w-96 max-w-96 md:mx-0 mx-auto py-8 md:px-0 px-5 md:text-start text-center">
      <h1 class="md:text-5xl text-4xl font-bold text-primary py-2 ">
        Hello ! 
        i Am <span class="text-red-600 animate__animated leading-tight" :class="currentAnimation">{{ currentName }}</span>
      </h1>
      <p class="text-gray-500 font-medium text-lg">
        "Frontend Developer focused on simplicity and performance. Building
        seamless interfaces with modern web technologies."
      </p>
      <div class="flex md:justify-start justify-center space-x-3 w-full mt-5">
        <a v-for="(sLink, index) in socialLinks" :key="index"
        class="transform transition-transform duration-300 hover:scale-125 hover:-translate-y-1 "
        :href="sLink.url"
        target="_blank"
        ><Icon :name="sLink.icon" :style="`color: ${sLink.color}`" size="25"
      /></a>
      </div>
    </div>
    <div
      class="flex relative  h-[550px] max-w-[550px] md:w-[550px] items-center  justify-center bg-center"
    >
      <div class="md:h-80 h-60 md:w-80 w-60">
        <img
          src="/public/Screenshot_2023-12-20-03-04-14-00.png"
          alt=""
          class="object-cover rounded-full h-full w-full"
        />
      </div>
      <div class="absolute md:top-0 z-40">
        <img
          src="/textures.png"
          alt=""
          class="object-cover rounded-full md:w-full w-96 md:h-full h-96"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const names = [
    "Fahad Khan",
    "  Developer",
    " UI UX Designer",
    " Web Developer",
    " React Developer"
];

const currentName = ref(names[0]);
const currentAnimation = ref('animate__fadeIn');
let intervalId;
let currentIndex = 0;

const updateName = () => {
    currentAnimation.value = 'animate__fadeOut';
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % names.length;
        currentName.value = names[currentIndex];
        currentAnimation.value = 'animate__fadeIn';
    }, 500); // Half the interval for smooth transition
};

onMounted(() => {
    intervalId = setInterval(updateName, 3000); // Change every 3 seconds
});

onBeforeUnmount(() => {
    if (intervalId) clearInterval(intervalId);
});

const socialLinks = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61565171947376",
        icon: "uil:facebook",
        color: "black"
    },
    {
        name: "Github",
        url: "https://github.com/fahadnaveed159",
        icon: "uil:github",
        color: "black"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/feed/?nis=true",
        icon: "uil:linkedin",
        color: "black"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/fahadnaveed738/?next=%2F",
        icon: "uil:instagram",
        color: "black"
    }
]
</script>
