///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
console.log("Hello world");

const myName = "Tran Tan Luc";
const h1 = document.querySelector(".heading-primary");

console.log(myName);
console.log(h1);

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

constobs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

ResizeObserver.ResizeObserver(sectionHeroEl);

const alllinks = document.querySelectorAll("a:link");

alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    //Scroll back to top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link"))
      headerEL.classList.toggle("nav-open");
  });
});

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
