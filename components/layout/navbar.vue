<template>


    <nav class="bg-white border-gray-200 dark:bg-gray-900 animate__animated animate__backInDown">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb3VMQ_bInFfyWDi-30eQmhbVtA40UIKxXRlCLaHQNsWEpfeMxEFompzuc4XEAR-WAVc&usqp=CAU" alt="" class="w-16">
                <nuxt-link to="/"><img src="/flamingtext_com-2408185840.png" alt="" class="w-24"></nuxt-link>
                
        </div>
         
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li v-for="item in navLinks" :key="item.name">
                <NuxtLink :to="item.name" class=" py-2 px-3 md:text-black relative inline-block text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-[30%] after:bg-black after:transition-all after:duration-300 hover:after:w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-red-500   md:p-0" aria-current="page">{{item.name}}</NuxtLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      
</template>

<script setup lang="ts">
import { ref } from 'vue';
const navLinks = ref([
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Portfolio', href: '/portfolio' },
]);
</script>