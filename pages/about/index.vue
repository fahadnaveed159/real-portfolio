<template>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center animate__animated animate__backInLeft"
  >
    <div class="text-center mb-8 py-12">
      <h1 class="md:text-5xl text-4xl font-extrabold text-gray-300">
        About <span class="text-red-600">Me</span>
      </h1>
      <p class="text-lg text-gray-400 font-medium py-2">
        I've worked with tools and technologies like:
      </p>
    </div>
  </div>
  <div class="w-full bg-gradient-to-t bg-black ">
    <div class="flex justify-between mt-16 py-12 max-w-7xl md:flex-row flex-col md:px-0 px-5 mx-auto animate__animated animate__backInLeft">
      <div class="max-w-96">
        <img
          src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/557639166_122178327962505731_964276788367584773_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE1l_ZwDyn3fcFNBavWy3KjQiXdpTJXj3tCJd2lMlePe7G327RL8hKPEvu4pSamQFmurfHUHOLxpxF5a6tSd246&_nc_ohc=lWuJ1uQ-c4oQ7kNvwGRuE8L&_nc_oc=AdkhMKvQWPVPbSQv8qnSU1dT3kzTgF6bV47bxmrEZB4zt0nBjtyVBbK45B_B4-pjhDB9LOS5UqquQH0ynyIZNbqc&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=dmF9SEv_1i-3J7at-QfFMA&oh=00_AfehJsNHhM0tZy6YusztgeIRwFlLcK8HjBNSvraRu2HP7Q&oe=69016721"
          alt=""
          class="rounded-xl md:w-full w-96 h-full object-cover"
        />
      </div>
      <div class="md:py-0 py-8 md:mt-0 mt-5">
        <h1 class="text-4xl font-extrabold text-gray-300">
          Hello I'am <span class="text-red-600 font-extrabold">Fahad Khan</span>
        </h1>
        <p class="mt-4 max-w-2xl text-gray-400 font-medium text-lg">
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
          <ul class="text-lg space-y-5 text-gray-300 font-medium">
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
