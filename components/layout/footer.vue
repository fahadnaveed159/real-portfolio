<template>
  <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex items-center mb-4 sm:mb-0" @click="openModal">
          <img
            class="w-16 me-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb3VMQ_bInFfyWDi-30eQmhbVtA40UIKxXRlCLaHQNsWEpfeMxEFompzuc4XEAR-WAVc&usqp=CAU"
            alt="Flowbite Logo"
          />
          <img src="/flamingtext_com-2408185840.png" alt="" class="w-24" />
        </div>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.url" class="hover:underline me-4 md:me-6">{{link.name}}</a>
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2025
        <a href="https://flowbite.com/" class="hover:underline"></a> Fahad
        Portfolio.❤️ All Rights Reserved.</span
      >
    </div>
    <div
      class="flex justify-center items-center space-x-3 w-full rtl:space-x-reverse mt-2"
    >
      <a v-for="(sLink, index) in socialLinks" :key="index"
        class="transform transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
        :href="sLink.url"
        target="_blank"
        ><Icon :name="sLink.icon" :style="`color: ${sLink.color}`" size="25"
      /></a>
    </div>
  </footer>
  <div :class="`${isOpenModal ? 'block' : 'hidden'} fixed p-6 top-1/2 left-1/2 w-96 h-96 bg-white shadow-md -translate-x-1/2 -translate-y-1/2 z-10`">
        <h2 class="font-semibold text-3xl">Hellow Fahad</h2>
        <button @click="closeModal">
            close
        </button>
  </div>
</template>

<script setup>
const isOpenModal = ref(false);
const openModal = () => {
    isOpenModal.value = true;
}

function closeModal(){
    isOpenModal.value = false;
}

const links = [
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Contact",
        url: "/contact"
    },
    {
        name: "Portfolio",
        url: "/portfolio"
    },
]

const socialLinks = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61565171947376",
        icon: "uil:facebook",
        color: "black"
    },
    {
        name: "Facebook",
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
