/**
 * 
 * Objective: When user hovers '.info-button-wrapper':
 *            Enlarge/expand '.info-label-wrapper'
 *            and display '.info-label-primary'
 *            Animate both.
 * 
 * 
 * Steps:
 *  1. Get associated dom elements: .info-button-wrapper, .info-label-wrapper
 *                                  .info-label-primary
 *  2. Expand .info-label-wrapper on click of .info-button.wrapper
 */

 function hoverInfoButton(gsap){

   const infoLabelWrapper = document.querySelector('.info-label-wrapper'),
         infoLabelprimary = document.querySelector('.info-label-primary');

   let tl = gsap.timeline({}); 

   tl
   .to(infoLabelWrapper, {
      duration: 0.5,
      maxWidth: '200px',
      ease: 'power2.out'
   })    

 };

 export default function hoverInformationCta(){
    document.querySelector('.info-button-wrapper').addEventListener('mouseover', hoverInfoButton);
 }
 

