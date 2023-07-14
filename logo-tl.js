// Array to hold all the texts
var allTexts = document.querySelectorAll('.text-part');
var allTextsInOrder = Array.from(allTexts);
var allParts = document.querySelectorAll('.logo-part');

// Store the original order of the text blocks
// allTexts.forEach(text => text.style.display = 'none');
allParts.forEach(part => part.style.display = 'none');

// allTexts.forEach(object => {
//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: object,
//             start: "top center",
//             end: "center bottom",
//             scrub: 1,
//             markers: true,
//         }
//     }).from(object,{
//         y:300,
//         opacity:0
//     })
// });

console.log(allTexts)

var tl = gsap.timeline ({
    scrollTrigger: {
        trigger: ".text-animation_container",
        start: "top center-10px",
        end: "bottom center",
        scrub: 1,
        markers: true,
        }
    })
    .fromTo(allTexts[0],{y:50, opacity:0}, {opacity:1, y:0, ease: "power2.out"})
    
    .from(allTexts[1],{y:300,opacity:0, duration: 1}, ">")
    .to(allTexts[0],{y:-50,opacity:0,height:0}, 0)

    .from(allTexts[2],{y:300,opacity:0}, ">")
    .from(allTexts[3],{y:300,opacity:0}, ">");

var logoBuild = gsap.timeline({
    scrollTrigger: {
        trigger: ".animation-logo_container",
        pinnedContainer: ".animation-logo_container",
        start: "clamp(top center)",
        end: "+=800",
        scrub: 1,
        markers: false,
        onUpdate: self => {
            var progress = self.progress;

            var nextIndex = Math.floor(progress * allParts.length);
            allParts.forEach((part, index) => {
                part.style.display = index < nextIndex ? 'block' : 'none';
            });
        }
    }
});

// var logoBuild = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".animation-logo_container",
//         start: "top center",
//         end: "+=800",
//         scrub: 1,
//         markers: false,
//         onUpdate: self => {
//             var progress = self.progress;

//             var nextIndex = Math.floor(progress * allParts.length);
//             allParts.forEach((part, index) => {
//                 part.style.display = index < nextIndex ? 'block' : 'none';
//             });
//         }
//     }
// });

