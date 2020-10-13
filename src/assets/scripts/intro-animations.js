/**
 * Objective: On load of website - animate elements
 * 
 * Steps:
 *    1. Fade in and zoom in .hero-img'
 *    2. Fade in each char of .js-hero-heading - use SplitText Plugin
 * 
 */
import gsap from "gsap";
import SplitText from "./SplitText";

gsap.registerPlugin(SplitText);

const nav = document.querySelector(".nav"),
      infoButtonWrapper = document.querySelector(".info-button-wrapper"),
      heroImg = document.querySelector(".hero__img"),
      ctaWrapper = document.querySelector(".cta-wrapper"),
      heroHeading = document.querySelector(".js-hero-heading");

function setAnimations(){
    gsap.set([heroImg, nav, infoButtonWrapper, ctaWrapper], { opacity: 1 });
}

export default function introAnimations() {
  setAnimations();

  let tl = gsap.timeline({});

  tl.from(heroImg, {
    duration: 1,
    scale: 1.6,
    opacity: 0,
    //  filter:'blur(5px)',
    ease: "power2.out",
  })
    .add(function () {
      animateChars();
    }, "-=1.2")
    .add("navigation-and-infobutton-in", "-=0.46")
    .from(
      nav,
      {
        duration: 0.6,
        opacity: 0,
      },
      "navigation-and-infobutton-in"
    )
    .from(
      infoButtonWrapper,
      {
        duration: 0.6,
        opacity: 0,
      },
      "navigation-and-infobutton-in"
    )
    .from(
      ctaWrapper,
      {
        duration: 0.4,
        scale: 1.5,
        opacity: 0
      },
      "-=0.45"
    );

};

function randomNumber(min, max) {
  return min + Math.random() * (max - min);
}

function animateChars(){
//   heroHeading = document.querySelector(".js-hero-heading");
  let chars = new SplitText(heroHeading, { type: "chars" });
  gsap.set([heroHeading], { opacity: 1 });


  chars.chars.forEach(function (char) {
      gsap.from(char, {
        duration: 1,
        // x: randomNumber(-3, 3),
        // y: randomNumber(-180, 180),
        scale: randomNumber(0, 3.5),
        // filter: 'blur(1px)',
        opacity: 0,
      //   color: 'black',
        stagger: 0.03,
        ease: "power2.out",
      });
     console.log(char);

   });
}