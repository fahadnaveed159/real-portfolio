<template>
  <nav
    class="bg-white border-gray-200 under animate__animated animate__backInDown md:py-0 py-2"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4 p-2"
    >
      <div class="flex items-center md:space-x-1 space-x-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb3VMQ_bInFfyWDi-30eQmhbVtA40UIKxXRlCLaHQNsWEpfeMxEFompzuc4XEAR-WAVc&usqp=CAU"
          alt=""
          class="md:w-16 w-12"
        />
        <nuxt-link to="/"
          ><img
            src="/flamingtext_com-2408185840.png"
            alt=""
            class="md:w-24 w-20"
        /></nuxt-link>
      </div>

      <!-- Mobile menu button -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 animate__animated"
        :class="{ animate__rubberBand: isMenuOpen }"
      >
        <svg
          class="w-6 h-6 transition-transform duration-300"
          :class="{ 'rotate-90': isMenuOpen }"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            v-if="!isMenuOpen"
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
          <path
            v-else
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <!-- Navigation menu -->
      <div
        :class="[
          ' w-full md:block md:w-auto ',
          {
            hidden: !isMenuOpen,
            animate__fadeIn: isMenuOpen,
            animate__fadeOut: !isMenuOpen,
          },
        ]"
      >
        <ul
          class="font-medium md:text-start text-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:space-y-0 space-y-3 md:mt-0 md:border-0 md:bg-white"
        >
          <li
            v-for="item in navLinks"
            :key="item.name"
            class="animate__animated"
            :class="[
              isMenuOpen
                ? `animate__fadeInRight animate__delay-${$index}s`
                : '',
            ]"
          >
            <NuxtLink
              :to="item.name"
              class="py-2 px-3 md:text-black relative inline-block text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-[30%] after:bg-black after:transition-all after:duration-300 hover:after:w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-red-500 md:p-0"
              aria-current="page"
              >{{ item.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);
const navLinks = ref([
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Portfolio", href: "/portfolio" },
]);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
