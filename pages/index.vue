<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />

  <HomeHero />
  <HomeOverview />
  <HomeMySkills />

  <div class="max-w-7xl flex mx-auto cursor-pointer">
    <LazyHomeSkillCard
      v-for="(skill, index) in skills"
      :key="index"
      :name="skill.name"
      :description="skill.description"
      :icon="skill.icon"
      :color="skill.color"
    />
  </div>
  <HomeIntro />
  <HomeMyWork />

  <div
    class="max-w-7xl mx-auto items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8"
  >
    <LazyHomeProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :image-url="project.imageUrl"
      :description="project.description"
      :target="project.target"
    />
  </div>
  <HomeContactMe />
</template>

<script setup>
const myref = ref("");

const projects = [
  {
    title: "Shofilm",
    description:
      "ShoFilm is Pakistan's leading movie streaming platform, bringing you the best in cinema entertainment. Contact us for partnerships, feedback, or just to say hello!",
    imageUrl: "/jay-prajapati-IujrMtnzYP8-unsplash.jpg",
    target: "https://shofilm.vercel.app/",
  },
  {
    title: "Utility-Project",
    description:
      "Utility Website is a simple and user-friendly platform designed to help users complete a specific task more efficiently. The website features a clean,HTML, CSS, JavaScript, or any frameworks .",
    imageUrl: "/glenn-carstens-peters-SL5d_8ywAAA-unsplash.jpg",
    target: "https://github.com/fahadnaveed159/Utility-Project",
  },
  {
    title: "Dashbord UI",
    description:
      "Dashboard UI is a visually organized interface that presents key information, statistics, and controls in one central location. It is designed to provide users with a quick overview .",
    imageUrl: "/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg",
    target: "https://github.com/fahadnaveed159/DashboardUI",
  },
];

const skills = [
  {
    name: "HTML",
    description:
      "HTML stands for Hyper Text Markup Language · HTML is the standard markup language for creating Web pages · HTML describes the structure of a Web page · HTML ...",
    icon: "uil:html5",
    color: "red",
  },
  {
    name: "CSS",
    description:
      "CSS is the language we use to style a Web page. What is CSS? CSS stands for Cascading Style Sheets; CSS describes how HTML elements are to be displayed on ...",
    icon: "uil:css3-simple",
    color: "blue",
  },
  {
    name: "JAVASCRIPT",
    description:
      "JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. ...",
    icon: "logos:javascript",
    color: "white",
  },
  {
    name: "VUE",
    description:
      "Vue (pronounced, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript. ...",
    icon: "uil:vuejs",
    color: "green",
  },
];
</script>
