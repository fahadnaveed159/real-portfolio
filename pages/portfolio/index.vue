<template>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

  <div class="max-w-7xl mx-auto py-12 animate__animated animate__backInLeft md:px-0 px-7">
    <div class="text-center py-6">
      <h1 class="text-4xl py-2 font-bold">
        "Explore My <span class="text-red-600">Portfolio"</span>
      </h1>
      <p class="text-gray-500 font-medium text-lg">
        Here are some of the projects I’ve built using HTML, CSS, JavaScript and
        modern frameworks.
      </p>
    </div>
    <h1 class="text-4xl font-bold py-12 ">
      "My Recent <span class="text-red-600">Projects"</span>
    </h1>
    <div>
      <div
        class="grid grid-cols-1 md:space-y-0 space-y-4 cursor-pointer lg:grid-cols-3 gap-4"
      >
        <LazyHomeWork
          v-for="(work, index) in works"
          :key="index"
          :title="work.title"
          :description="work.description"
          :image="work.imageUrl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const works = [
  {
    title: "Shofilm",
    description:
      "ShoFilm is Pakistan's leading movie streaming platform, bringing you the best in cinema entertainment. Contact us for partnerships, feedback, or just to say hello!",
    imageUrl: "/jay-prajapati-IujrMtnzYP8-unsplash.jpg",
  },
  {
    title: "Utility-Project",
    description:
      "Utility Website is a simple and user-friendly platform designed to help users complete a specific task more efficiently. The website features a clean,HTML, CSS, JavaScript, or any frameworks .",
    imageUrl: "/glenn-carstens-peters-SL5d_8ywAAA-unsplash.jpg",
  },
  {
    title: "Dashbord UI",
    description:
      "Dashboard UI is a visually organized interface that presents key information, statistics, and controls in one central location. It is designed to provide users with a quick overview .",
    imageUrl: "/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg",
  },
  {
    title: "Coding-Project",
    description:
      "Coding Bio unites a high throughput wet lab and ML platform to screen, build, and deliver fully-assembled modular therapies like CARs and BiTEs in only eliminate autoreactive B cells, offering ",
    imageUrl: "/pexels-thisisengineering-19895773.jpg",
  },
  {
    title: "Calculator",
    description:
      "Calculator provides simple and advanced mathematical functions in a beautifully designed app. • Perform basic calculations such as addition, subtraction.",
    imageUrl: "/bottom-view-calculator-ruler-notepad-dark-table.jpg",
  },
  {
    title: "Raft Project",
    description:
      "Raft™ throws you and your friends into an epic oceanic adventure! Alone or together, players battle to survive a perilous voyage across a vast sea!.",
    imageUrl: "/pexels-mohammed-amine-jaddari-2151816828-31922550.jpg",
  },
];
</script>
