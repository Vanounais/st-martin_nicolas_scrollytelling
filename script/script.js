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
    .to('#chapitre-3 .mongolfiere', {x: '200%', duration: 2})
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
        .to('#chapitre-4-5 .mongolfiere', {y: '150vh', x: '200%', rotation: 90, duration: 1})
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
        .to('#chapitre-4-5 .sous-marins', {x: '100%', y: '5vh',rotation: 20, ease: 'power1.inOut'})
        .to('#chapitre-4-5 .sous-marins', {x: '200%', y: '90vh',rotation: 70, ease: 'power1.inOut', duration: 3})
        .to('#chapitre-4-5 .background', {y: '-300vh', ease: 'power1.inOut', duration: 3},"<")
        .to('#chapitre-4-5 .bulle-1', {y: '-140vh', ease: 'power1.in', duration: 2},"<")
        .to('#chapitre-4-5 .poisson-rouge', {y: '-40vh', x: '-600%', ease: 'power1.in', duration: 2},"<")
        .to('#chapitre-4-5 .bulle-3', {y: '-140vh', ease: 'power1.in', duration: 2},"<0.5")
        .to('#chapitre-4-5 .poisson-jaune', {y: '-40vh', x: '600%', ease: 'power1.in', duration: 2},"<")
        .to('#chapitre-4-5 .bulle-2', {y: '-140vh', ease: 'power1.in', duration: 2},"<0.5")
        .to('#chapitre-4-5 .poisson-vert', {y: '-40vh', x: '600%', ease: 'power1.in', duration: 2},"<")
        

        let hauteurTotale = document.querySelector("#chapitre-6").scrollHeight;
        console.log(hauteurTotale)

        const chapt6 = gsap.timeline({
            scrollTrigger: {
                pin: true,
                scrub: 1,
                markers: true,
                start: 'top 0%',
                end: 'bottom -300%',
                trigger: '.chapt.no6',
            }
        });
            chapt6
            .to('#chapitre-6 .fusee', {rotate: 90, duration: 0},0)
            .to('#chapitre-6 .planete-1', {x: hauteurTotale*-0.35})
            .to('#chapitre-6 .planete-2', {x: hauteurTotale*-1.10},'<')
            .to('#chapitre-6 .fusee', {x: "1250%", y: "15vh", rotate: 100, ease: "power1.inOut"},'<0.1')