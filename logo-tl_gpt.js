// Array to hold all the texts
var allTexts = document.querySelectorAll('.text-part');
var allTextsInOrder = Array.from(allTexts);
var allParts = document.querySelectorAll('.logo-part');

var currentText = null;

// Store the original order of the text blocks
allTexts.forEach(text => text.style.display = 'none');
allParts.forEach(part => part.style.display = 'none');

// GSAP timeline
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".animation-box",
        start: "top center",
        end: "+=800",
        scrub: 1,
        markers: true,
        onUpdate: self => {
            var progress = self.progress;

            var nextIndex = Math.floor(progress * allParts.length);
            allParts.forEach((part, index) => {
                part.style.display = index < nextIndex ? 'block' : 'none';
            });

            var nextTextIndex = Math.floor(progress * allTexts.length);
            allTexts.forEach((text, index) => {
                text.style.display = index < nextTextIndex ? 'block' : 'none';
            });

            if (nextTextIndex > 0 && nextTextIndex <= allTexts.length) {
                var currentText = allTexts[nextTextIndex - 1];
                var prevText = allTexts[nextTextIndex - 2];
                if (prevText) {
                    gsap.to(prevText, {opacity: 0, y: -50, duration: 0.5, ease: "power2.out", onComplete: function() { prevText.style.display = 'none';}});
                }
                if (currentText.style.display == 'none' ) {
                    currentText.style.display = 'block';
                    gsap.fromTo(currentText, {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1, ease: "power2.out"});
                }
            }
        }
    }
});