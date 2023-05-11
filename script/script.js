const appelAnim = gsap.timeline()
    .to('.fleche.trois', { opacity: "0", ease: "power2.inOut", duration: "1"}) 
    .to('.fleche.deux', { opacity: "0", ease: "power2.inOut", duration: "1"}, "-=0.6")
    .to('.fleche.un', { opacity: "0", ease: "power2.inOut", duration: "1"}, "-=0.6")
    .to('.fleche.trois', { opacity: "1", ease: "power2.inOut", duration: "1"}, "<")
    .to('.fleche.deux', { opacity: "1", ease: "power2.inOut", duration: "1"}, "-=0.6")
    .to('.fleche.un', { opacity: "1", ease: "power2.inOut", duration: "1"}, "-=0.6")
    .repeat(-1)

window.addEventListener("scroll",() => {
    const body = document.querySelector("body")
    body.classList.add("is-scrolling");
});

document.write("coucou")