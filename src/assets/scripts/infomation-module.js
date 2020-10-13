/**
 *
 * Objective: When user clicks on '.info-button-wrapper':
 *            Bring '.info-modular' in
 *
 *
 * Steps:
 *  1. Get associated dom elements: .info-button-wrapper, .info-modular, .blurred-overlay, .cls-1, 
 *                                  .info-label-wrapper
 *  2. Expand .info-modular on click of .info-button.wrapper - done
 *  3. Make .blurred-overlay visible once .info-modular opens up - done
 *  4. Drop opacity of '.nav' - done
 *  5. Stop .cls-1 from rotating when .info-modular is open - done
 *  6. Keep .info-label-wrapper at its hover state while .info-modular is open - border done.. rest need work
 *  7. When user's mouse leaves  .info-button-wrapper, place elements back to unhovered state - done
 */

import gsap from "gsap/gsap-core";

let open = false,
    tlHover,
    tlModular;

 export default function clickInfoModular() {

   intialAnimation();
   infoModularInitAnimations();

   const infoButtonWrapper = document.querySelector(".info-button-wrapper");
   infoButtonWrapper.addEventListener("click", infoModular);
   infoButtonWrapper.addEventListener("mouseover", hoverInfoButton);
   infoButtonWrapper .addEventListener("mouseout", mouseLeave);  

 }

function mouseLeave(){  
   // if(open === true){
 
   // }else
    if(open === false){
      // tl.timeScale(-1);
      tlHover.reverse();
   }
   
};

function hoverInfoButton(){

   tlHover.play();

};

function intialAnimation(){
   const infoLabelWrapper = document.querySelector(".info-label-wrapper"),
         infoLabelprimary = document.querySelector(".info-label-primary");

   tlHover = gsap.timeline({paused: true});

   tlHover
     .to(infoLabelWrapper, {
         duration: 0.5,
         maxWidth: 200,
         ease: "power2",
         })
     .to(
       infoLabelprimary,
       {
         duration: 0.4,
         x: 0,
         opacity: 1,
         ease: "power2",
       },
       "+=0.02"
     )
     .to(
       ".info-button",
       {
         duration: 0.4,
         borderColor: "#856952",
         ease: "power2",
       },
       0
     );
};

function infoModularInitAnimations(){
   //  let open = false;
    console.log(open + " intial");

    tlModular = new gsap.timeline({paused: true});

   //  if(!open){
      //  tl.set(".info-label-wrapper", {
      //    maxWidth: "200px",
      //  })
         tlModular
            .to(".info-modular", {
               duration: 0.4,
               opacity: 1,
               scale: 1,
               ease: "power2.out"
         })
         .to(
           ".blurred-overlay",
           {
             duration: 0.5,
             opacity: 0.95,
             ease: "power2.out",
           },
           0
         )
         .to(
           ".nav__links",
           {
             duration: 0.3,
             opacity: 0.01,
           },
           0
         )
         .to(".cta-wrapper", {
            duration: 0.15,
            opacity: 0.06
         }, 0)
       
        
      // }
   //  if(open){
   //     tl.to(".info-modular", {
   //       duration: 0.25,
   //       opacity: 0,
   //       scale: 0.8,
   //       ease: "power2.out",
   //       add: function () {
   //         open = false;
   //       },
   //     })
   //       .to(
   //         ".blurred-overlay",
   //         {
   //           duration: 0.5,
   //           opacity: 0,
   //           ease: "power2.out",
   //         },
   //         0
   //       )
   //       .to(
   //         ".nav__links",
   //         {
   //           duration: 0.3,
   //           opacity: 1,
   //         },
   //         0
   //       )
   //       .to(".cta-wrapper", {
   //         duration: 0.15,
   //         opacity: 1,
   //       })
   //       .to(".cls-1", {
   //         add: function () {
   //           const test = document.querySelectorAll(".cls-1");
   //           test.forEach((c) => {
   //             c.style.animationPlayState = "running";
   //           });
   //         },
   //       });
   //     tl.set(".info-modular", { scale: 0.8 });
   //  }

}

function infoModularOpen(){
   tlModular.play();
   open = true;
}

function cssRotation(){
     gsap.to(".cls-1", {
           add: function () {
             const test = document.querySelectorAll(".cls-1");
             test.forEach((c) => {
                if(open == true){
                   c.style.animationPlayState = "paused";
                }else{
                   c.style.animationPlayState = "running";
                }
               
             });
           },
         });
}

function infoModular(){
   if(!open){
      infoModularOpen();
   }else if(open){
      infoModularClose();
   }
   cssRotation();
}

function infoModularClose(){
   tlModular.timeScale(-1.15);
   open = false;
}





