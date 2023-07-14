var container = document.querySelector(".animation-box");
var allParts = Array.from(document.querySelectorAll('.logo-part'));
var allTexts = Array.from(document.querySelectorAll('.text-part'));
var visibleParts = [];
var hiddenParts = Array.from(allParts);
var visibleTexts = [];
var hiddenTexts = Array.from(allTexts);
var started = false;
console.log("hidden" + hiddenTexts.length);


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

            console.log("visible" + visibleTexts.length);
            
            oldText.style.zIndex = oldText.style.zIndex-1;

            console.log("oldtext" + (oldText.style.zIndex));

            gsap.fromTo(oldText, { opacity: 1, y: 0 }, { opacity: 0, y: -100, height: 0, duration: 0.5, ease: "power2.out", onComplete: function() { oldText.style.display = 'none'; } });
        }

        var text = hiddenTexts.shift();

        console.log("hidden" + hiddenTexts.length);

        text.style.zIndex = text.style.zIndex+1; // make sure the new text is behind the old one
        
        console.log("text" + (text.style.zIndex));
        
        text.style.display = 'block';
        gsap.fromTo(text, { opacity: 0, y: 75 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" });
        visibleTexts.push(text);

        console.log("visible" + visibleTexts.length);
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

            console.log("hidden" + hiddenTexts.length);

            if (oldText){
                oldText.style.zIndex = oldText.style.zIndex-1; // make sure the new text is behind the old one
                
                console.log("oldtext" + (oldText.style.zIndex))
                
                oldText.style.display = 'block';
                gsap.fromTo(oldText, { opacity: 0, y: 75 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" });
            }
        }
        if(visibleTexts.length > 0){
            var text = visibleTexts.pop();
            
            console.log("visible" + visibleTexts.length);
            
            gsap.fromTo(text, { opacity: 1, y: 0 }, { opacity: 0, y: -50, height:0, duration: 0.5, ease: "power2.out", onComplete: function() { text.style.display = 'none'; } });
            hiddenTexts.unshift(text);
            
            console.log("hidden" + hiddenTexts.length);
        }
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