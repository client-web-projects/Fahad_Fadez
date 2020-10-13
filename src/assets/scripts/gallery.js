const container = document.querySelector(".gallery");
// const topContainer = document.querySelector(".test");

gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    invalidateOnRefresh: true,
    pin: true,
    scrub: 0.5,
    start: "top top",
    end: () =>
      "+=" + (container.scrollWidth - document.documentElement.clientWidth),
  },
});

gsap.utils.toArray(".gallery__img").forEach((horizontalPanel, i) => {
  const parent = horizontalPanel.parentElement;
  gsap.to(horizontalPanel, {
    x: horizontalPanel.offsetWidth - parent.offsetWidth,
    ease: "none",
    scrollTrigger: {
      start: parent.offsetLeft,
      end: parent.offsetLeft + parent.offsetWidth + innerWidth,
      scrub: 0.5,
      markers: true,
    },
  });
});
