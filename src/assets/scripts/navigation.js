/**
   * Objective: Hover link(s), when hovered move .nav__link--top up and fade it out. Then bring .nav__link--bottom up as well
   * Steps:  
   *  1. get all needed dom elements: .nav__link--top
   *  2. bring .nav__link--top up and fade it out: the element is 25px of height and the parent .nav__link's height is set to 25px
   *     so just need to move it up past the parent. * figure out the math behind it *
   *     
   * 
*/

function animateLinksStart(gsap, element){
  
   const navLinksTop = gsap.utils.toArray('.nav__link--top'),
         navLinksBottom = gsap.utils.toArray('.nav__link--bottom');

   console.log(element)

   let tl = gsap.timeline({});
   
   tl.to(navLinksTop[element], {
     duration: 0.3,
     y: -30,
     opacity: 0,
     ease: "power2.in",
   })
   .to(
      navLinksBottom[element],
      {
      duration: 0.35,
      y: 0,
      ease: "power2.in",
      opacity: 1,
      },
      0
   )
     .set(navLinksTop[element], {
       y: 0,
       opacity: 1,
     })
     .set(navLinksBottom[element], {
       y: 20,
       opacity: 0,
     });

}

export default function hoverlinks(gsap){

   const navLinks = gsap.utils.toArray('.nav__link');

   navLinks.forEach((link, element)=>{
      link.addEventListener('mouseenter', ()=>{
        animateLinksStart(gsap, element);
      });
   });


   
}
