<template>
  <div class="max-w-7xl mx-auto flex justify-between p-10 items-center animate__animated animate__backInLeft">
    <div class="w-96 py-8">
      <h1 class="text-5xl font-bold text-primary py-2">
        Hello ! <br />
        i Am <span class="text-red-600">Developer</span>
      </h1>
      <p class="text-gray-500 font-medium text-lg">
        "Frontend Developer focused on simplicity and performance. "Building
        seamless interfaces with modern web technologies.""
      </p>
      <div class="flex space-x-3 w-full rtl:space-x-reverse mt-5">
        <a v-for="(sLink, index) in socialLinks" :key="index"
        class="transform transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
        :href="sLink.url"
        target="_blank"
        ><Icon :name="sLink.icon" :style="`color: ${sLink.color}`" size="25"
      /></a>
      </div>
    </div>
    <div
      class="flex relative h-[550px] w-[550px] items-center justify-center bg-center"
    >
      <div class="h-72 w-72">
        <img
          src="/public/Screenshot_2023-12-20-03-04-14-00.png"
          alt=""
          class="object-cover rounded-full h-full w-full"
        />
      </div>
      <div class="absolute top-0 z-40">
        <img
          src="/textures.png"
          alt=""
          class="object-cover rounded-full w-full h-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>


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
