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

gsap.registerPlugin(ScrollTrigger);

const chapt1 = gsap.timeline({
    scrollTrigger: {
        pin: true,
        scrub: 1,
        markers: true,
        start: 'top 0%',
        end: 'bottom -200%',
        trigger: '.chapt.no1',
    }
});
    chapt1
    .to('#chapitre-1 .voiture', {x: '550%'},"<")
    .to('#chapitre-1 .voiture', {y: '200%', x: '600%'})
    .to('#chapitre-1 .voiture', {rotation: 180},"<")
    .to('#chapitre-1 .mongolfiere', {y: '-150vh',x: '-80%'})

const chapt2 = gsap.timeline({
    scrollTrigger: {
        pin: true,
        scrub: 1,
        markers: true,
        start: 'top 0%',
        end: 'bottom -100%',
        trigger: '.chapt.no2',
    }
});
    chapt2
    .to('#chapitre-2 .mongolfiere', {y: '-70vh', x: '50%', ease:'power2.out'}, "<")
    .to('#chapitre-2 .mongolfiere', {x: '500%', ease: 'power2.inOut', duration: 2})
    .to('#chapitre-2 .nuages', {x: '-100%', duration: 2},"0")
        
const chapt3 = gsap.timeline({
    scrollTrigger: {
        pin: true,
        scrub: 1,
        markers: true,
        start: 'top 0%',
        end: 'bottom -200%',
        trigger: '.chapt.no3',
    }
});
    chapt3
    .to('#chapitre-3 .mongolfiere', {x: '200%', duration: 1})
    .to('#chapitre-3 .mongolfiere', {y: '-2vh', x: '210%'})
    .to('#chapitre-3 .mongolfiere', {y: '1vh', x: '205%', ease: 'power1.inOut'})
    .to('#chapitre-3 .mongolfiere', {y: '-1vh', x: '215%', ease: 'power1.inOut'})
    .to('#chapitre-3 .mongolfiere', {y: '-3vh', x: '207%', ease: 'power1.inOut'})
    .to('#chapitre-3 .mongolfiere', {y: '70vh', x: '300%', rotation: 50, ease: 'power2.in', duration: 1})

    const chapt4_5 = gsap.timeline({
        scrollTrigger: {
            pin: true,
            scrub: 1,
            markers: true,
            start: 'top 0%',
            end: 'bottom -300%',
            trigger: '.chapt.no4-5',
        }
    });
        chapt4_5
        .to('#chapitre-4-5 .mongolfiere', { rotation: 20, duration: 0})
        .to('#chapitre-4-5 .mongolfiere', {y: '150vh', x: '200%', rotation: 70})
        .to('#chapitre-4-5 .vague-1', {y: '-50vh'},'<')
        .to('#chapitre-4-5 .vague-2', {y: '-35vh'},'<+0.2')
        .to('#chapitre-4-5 .vague-3', {y: '-20vh'},'<+0.2')
        .to('#chapitre-4-5 .bateau', {y: '-75vh', x: '20%', rotation: 10, ease: 'power1.inOut'},'<-0.2')
        .to('#chapitre-4-5 .bateau', {y: '-73vh',rotation: 0, ease: 'power1.inOut'})
        .to('#chapitre-4-5 .vague-1', {y: '-52vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-2', {y: '-32vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-3', {y: '-22vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .bateau', {rotation: -5, ease: 'power1.inOut'})
        .to('#chapitre-4-5 .vague-1', {y: '-51vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-2', {y: '-36vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-3', {y: '-19vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .bateau', {y: '-73vh',rotation: 0, ease: 'power1.inOut'})
        .to('#chapitre-4-5 .vague-1', {y: '-53vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-2', {y: '-31vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-3', {y: '-21vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .bateau', {y: '-75vh', rotation: 10, ease: 'power1.inOut'})
        .to('#chapitre-4-5 .vague-1', {y: '-50vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-2', {y: '-35vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-3', {y: '-20vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .bateau', {y: '-0vh', rotation: 50, ease: 'power1.inOut'})
        .to('#chapitre-4-5 .vague-1', {y: '-51vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-2', {y: '-36vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-3', {y: '-19vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .background', {y: '-150vh', ease: 'power1.inOut'})
        .to('#chapitre-4-5 .vague-1', {y: '-201vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-2', {y: '-185vh', ease: 'power1.inOut'},'<')
        .to('#chapitre-4-5 .vague-3', {y: '-169vh', ease: 'power1.inOut'},'<')