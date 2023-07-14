let allParts = gsap.utils.toArray('.logo-part');
let allTexts = gsap.utils.toArray('.text-part');

console.log(`max:${ScrollTrigger.maxScroll(window)}`)

var logoBuild = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo_animation-container",
        pin: true,
        pinnedContainer: ".logo_animation-container",
        start: "top top",
        end: "clamp(bottom+=200% center+=20%)",
        markers: false,
        scrub: 1,
    }
});

logoBuild.from(allParts[1], {opacity: 0, duration: 1});
logoBuild.from(allTexts[1], {y:50, opacity: 0, duration: .75}, "<0.5");
logoBuild.to(allTexts[0], {y:-20, opacity: 0, duration: .5}, "<");
logoBuild.to(allParts[0], {opacity: 0, duration: .25}, "<0.25");


logoBuild.from(allParts[2], {opacity: 0, duration: 1.5});
logoBuild.from(allTexts[2], {y:50, opacity: 0, duration: .75}, "<0.5");
logoBuild.to(allTexts[1], {y:-20, opacity: 0, duration: .5}, "<");
logoBuild.to(allParts[1], {opacity: 0, duration: .25}, "<0.25");


logoBuild.from(allParts[3], {opacity: 0, duration: 1.5});
logoBuild.from(allTexts[3], {y:50, opacity: 0, duration: .75}, "<0.5");
logoBuild.to(allTexts[2], {y:-20, opacity: 0, duration: .5}, "<");
logoBuild.to(allParts[2], {opacity: 0, duration: .25}, "<0.25");



