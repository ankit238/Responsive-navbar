const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {

  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// const section_hero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(() => { 
//     (entries) => {
//         const ent = entries[0];
//         console.log(ent);
//         ent.isIntersecting === false
//             ? document.body.classList.add("sticky")
//             :document.body.classList.remove("sticky")
//     },
// }, {
//     root: null,
//     rootMargin: "-80px",
//     threshold: 0,
            
// });

// observer.observe(section_hero);