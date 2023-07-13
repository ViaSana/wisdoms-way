var container = document.querySelector(".animation-box");
var allParts = Array.from(document.querySelectorAll('.logo-part'));
var allTexts = Array.from(document.querySelectorAll('.text-part'));
var visibleParts = [];
var hiddenParts = Array.from(allParts);
var visibleTexts = [];
var hiddenTexts = Array.from(allTexts);
var started = false;

// Function to reveal the next part of the logo and its corresponding text
function revealNextPart() {
    if (hiddenParts.length > 0) {
        var part = hiddenParts.shift();
        part.style.display = 'block';
        gsap.fromTo(part, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" });
        visibleParts.push(part);

        // If there's a visible text, hide it first
        if (visibleTexts.length > 0) {
        var oldText = visibleTexts.pop();
        gsap.fromTo(oldText, { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: 0.25, ease: "power2.out", onComplete: function() { oldText.style.display = 'none'; } });
        }

        var text = hiddenTexts.shift();
        text.style.zIndex = visibleTexts.length; // make sure the new text is behind the old one
        text.style.display = 'block';
        gsap.fromTo(text, { opacity: 0, y: 75 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" });
        visibleTexts.push(text);
    }
}

// Function to hide the last revealed part of the logo and its corresponding text
function hideLastRevealedPart() {
    if (visibleParts.length > 0) {
        var part = visibleParts.pop();
        gsap.fromTo(part, { opacity: 1 }, { opacity: 0, duration: 1, ease: "power2.out", onComplete: function() { part.style.display = 'none'; } });
        hiddenParts.unshift(part);

        // If there's a hidden text, show it first
        if (hiddenTexts.length < allTexts.length) {
            var oldText = hiddenTexts.pop();
            oldText.style.zIndex = hiddenTexts.length; // make sure the new text is behind the old one
            oldText.style.display = 'block';
            gsap.fromTo(oldText, { opacity: 0, y: 75 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" });
        }

        var text = visibleTexts.pop();
        gsap.fromTo(text, { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: 0.25, ease: "power2.out", onComplete: function() { text.style.display = 'none'; } });
        hiddenTexts.unshift(text);
    }
}

// Reveal or hide parts when scrolled
var lastScrollY = window.scrollY;
window.addEventListener("scroll", function () {
    if (!started && container.getBoundingClientRect().bottom < window.innerHeight) {
        started = true;
    }

    if (started) {
        if (window.scrollY - lastScrollY > 200) {
            revealNextPart();
            lastScrollY = window.scrollY;
        } else if (lastScrollY - window.scrollY > 200) {
            hideLastRevealedPart();
            lastScrollY = window.scrollY;
        }
    }
});