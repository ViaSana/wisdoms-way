const headings = document.querySelectorAll(".scroll-in-from-bottom")
const offerings = document.querySelectorAll(".scroll-in-from-right")
const mainHeading = document.querySelectorAll(".animate-from-bottom")

// Animates in from the bottom on page load
mainHeading.forEach(object => {
    gsap.from(object, {
        y:250,
        opacity:0,
        duration:1.25,
    })
})

headings.forEach(object => {

    let tl = gsap.timeline({
    scrollTrigger: {
        trigger: object,
        start: "top-=210 center+=50",
        end: "center-=75 center+=100",
        // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
        scrub: .5,
        // last but not least this helps us to visualize the script
        markers: false,
    }
    }).from(object,{
        y:250,
        opacity:0,
    })
});

offerings.forEach(object => {
    let tl = gsap.timeline({
    scrollTrigger: {
            trigger: object,
            start: "clamp(top center+=50)",
            end: "clamp(bottom center)",
            scrub: 1,
            markers: false,
        }
    }).from(object,{
        x:250,
        opacity:0,
    })
});

// Old Contact Form Submission Script
// $('#wwContactForm').on('submit', function() { localStorage.setItem('formSubmitted', 'true')}); 
// $(document).ready(function() {
//     if (localStorage.getItem('formSubmitted') === 'true') {
//         $('#thank_you').css('display', 'block');
//         localStorage.removeItem('formSubmitted'); // Optional: remove it if you want the message to appear once
//     }
//     $(document).click(function(event) {
//         if (!$(event.target).closest("#thank_you").length) {
//             $("#thank_you").css("display", "none");
//         }
//     }); 
// });


// Handle showing thank you message on page load if form was submitted
$(document).ready(function() {
    if (localStorage.getItem('formSubmitted') === 'true') {
        $('#thank_you').css('display', 'block');
        localStorage.removeItem('formSubmitted'); // Optional: remove it if you want the message to appear only once
    }

    // Hide thank you message on outside click
    $(document).click(function(event) {
        if (!$(event.target).closest("#thank_you").length) {
            $("#thank_you").css("display", "none");
        }
    });
});


// Hamburger
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

// Slick Slider
$(".testimonial-slider-container").slick({
    autoplay: false,
    autoplaySpeed: 2e3,
    speed: 500,
    arrows: true,
    accessibility: true,
    dots: true,
    fade: false,
    infinite: false,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }]
});


// SLICK SLIDER PROPERTIES // 
//  autoplay: true,        // Do we want it to autoplay? true or false
// 	autoplaySpeed: 3000,   // How long between each slide when autoplaying
// 	speed: 500,            // How fast is the transition 
//  arrows: false,          // Do you want to show arrows to trigger each slide
//  accessibility: true,   // Enables tabbing and arrow key navigation 
//  dots: true,            // Enables the dots below to show how many slides
//  fade: false,           // Changes the animate from slide to fade if true
//  infinite: true,       // When true, means that it will scroll in a circle
//  pauseOnHover: true,   // When true means the autoplay pauses when hovering
//  pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
//