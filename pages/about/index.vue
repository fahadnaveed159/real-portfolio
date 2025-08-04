<template>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center animate__animated animate__backInLeft"
  >
    <div class="text-center mb-8">
      <h1 class="md:text-5xl text-4xl font-bold">
        About <span class="text-red-600">Me</span>
      </h1>
      <p class="text-lg text-gray-500 font-medium py-2">
        I've worked with tools and technologies like:
      </p>
    </div>
  </div>
  <div class="w-full bg-gray-100 ">
    <div class="flex justify-between mt-16 py-12 max-w-7xl md:flex-row flex-col md:px-0 px-5 mx-auto animate__animated animate__backInLeft">
      <div class="max-w-96">
        <img
          src="/IMG-20240412-WA0079.jpg"
          alt=""
          class="rounded-xl md:w-full w-96 h-full object-cover"
        />
      </div>
      <div class="md:py-0 py-8 md:mt-0 mt-5">
        <h1 class="text-4xl font-bold">
          Hello I'am <span class="text-red-600">Fahad Khan</span>
        </h1>
        <p class="mt-4 max-w-2xl text-gray-500 font-medium text-lg">
          I'm a passionate **Frontend Developer** with a strong focus on
          **React.js** and modern JavaScript technologies. I love building clean,
          responsive, and user-friendly web applications that provide real value
          to users. With experience in tools like **React Hooks**, **Tailwind
          CSS**, **Firebase**, and **REST APIs**, I aim to develop scalable and
          maintainable code. I enjoy learning new things and staying updated with
          the latest trends in web development. When I’m not coding, I’m usually
          exploring new UI designs or sharpening my skills through side projects.
        </p>
        <div class="py-3">
          <h1 class="py-2 text-3xl font-bold">Tech Stack:</h1>
          <ul class="text-lg space-y-5 text-gray-600 font-medium">
              <li>Languages: JavaScript (ES6+), HTML5, CSS3</li>
              <li>Libraries & Frameworks: React.js, Vue.js (learning), Tailwind CSS</li>
              <li>Tools: Firebase, Git & GitHub, VS Code</li>
              <li>Concepts: Responsive Design, Component Reusability, Clean Code</li>
          </ul>
        </div>
    
        <div class="flex space-x-3 w-full rtl:space-x-reverse mt-2 ">
          <a
            v-for="(sLink, index) in socialLinks"
            :key="index"
            class="transform transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
            :href="sLink.url"
            target="_blank"
            ><Icon :name="sLink.icon" :style="`color: ${sLink.color}`" size="25"
          /></a>
        </div>
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
    color: "black",
  },
  {
    name: "Github",
    url: "https://github.com/fahadnaveed159",
    icon: "uil:github",
    color: "black",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/feed/?nis=true",
    icon: "uil:linkedin",
    color: "black",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/fahadnaveed738/?next=%2F",
    icon: "uil:instagram",
    color: "black",
  },
];
</script>
