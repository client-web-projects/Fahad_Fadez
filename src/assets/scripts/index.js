import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitText from "./SplitText";
// import hoverLinks from './navigation';
// import hoverInformationCta from './information-cta';
// import clickInfoModular from "./infomation-module";
import introAnimations from "./intro-animations";

gsap.registerPlugin(ScrollTrigger);

import "../scss/main.scss";
// import "../images/video-about-1.mp4";
import "../images/hero-haircut.png";

function init(){
   // hoverLinks(gsap);
// hoverInformationCta(gsap);
   // clickInfoModular();
   introAnimations();
}

window.onload = function(){
   init();
}


