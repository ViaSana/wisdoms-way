var allParts = document.querySelectorAll('.logo-part');
let allText = gsap.utils.toArray('.text-part');
var allTexts = document.querySelectorAll('.text-part');


console.log(allText)
console.log(allTexts)

console.log(allParts)
console.log(`max:${ScrollTrigger.maxScroll(window)}`)
console.log(`scroll:${window.scrollY}`)

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

logoBuild.from(allParts[1], {opacity: 0, duration: .75, delay: 1});
logoBuild.from(allParts[2], {opacity: 0, duration: .75, delay: 1});
logoBuild.from(allParts[3], {opacity: 0, duration: .75, delay: 1});
