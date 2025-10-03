// Animate skill bars on page load
window.addEventListener("DOMContentLoaded", function () {
  const skills = [
    { id: "dw", percent: 95 },
    { id: "dg", percent: 90 },
    { id: "bd", percent: 85 },
    { id: "md", percent: 70 },
  ];
  skills.forEach((skill) => {
    const el = document.getElementById(skill.id);
    if (el) {
      el.style.width = "0%";
      el.style.transition = "width 1.5s cubic-bezier(0.4,0,0.2,1)";
      setTimeout(() => {
        el.style.width = skill.percent + "%";
      }, 300);
    }
  });
});
// Function that applies animations to the skills
let projects = 0;
let clients = 0;
let courses = 0;
let intervalProjects = null;
let intervalClients = null;
let intervalCourses = null;

function animateNumbers() {
  var numbers = document.getElementById("numbers");
  var numbersDistance =
    window.innerHeight - numbers.getBoundingClientRect().top;
  if (numbersDistance >= 200 && projects == 0) {
    intervalProjects = setInterval(updateCounter, 60);
  }
}

// Detect scrolling to apply the skills bar animation
window.onscroll = function () {
  animateNumbers();
  animateSkills();
};

let isVisible = false;

function openCloseMenu() {
  document.getElementById("nav").classList.toggle("responsive");
  document.querySelector(".menu-toggle").classList.toggle("active");
}

function animateSkills() {
  var skills = document.getElementById("aboutme");
  var skillsDistance = window.innerHeight - skills.getBoundingClientRect().top;
  if (skillsDistance >= 400) {
    document.getElementById("dw").className = "progress dw";
    document.getElementById("dg").className = "progress dg";
    document.getElementById("bd").className = "progress bd";
    document.getElementById("md").className = "progress md";
  }
}
