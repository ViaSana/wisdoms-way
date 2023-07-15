const headings = document.querySelectorAll(".scroll-in-from-bottom")
const offerings = document.querySelectorAll(".scroll-in-from-right")
const mainHeading = document.querySelectorAll(".animate-from-bottom")

mainHeading.forEach(object => {
    gsap.from(object, {
        y:250,
        opacity:0,
    })
})

// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
headings.forEach(object => {
// we start with a gsap timeline
    let tl = gsap.timeline({
    // here's where we start attching the animation to the scroll
    scrollTrigger: {
        // this is what is triggering the start of the animation
            trigger: object,
            // this one takes in to bits of info. the first is the part of the trigger element thats causing the trigger to start and the second one is where on the screen. both of them can be either top, center, bottom or a percentage (% are from the top of the container( as in trigger element or screen) )   
            start: "top-=210 center+=50",
            // same as start but the end point of the animation          
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

// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
offerings.forEach(object => {
    // we start with a gsap timeline
    let tl = gsap.timeline({
    // here's where we start attching the animation to the scroll
    scrollTrigger: {
        // this is what is triggering the start of the animation
            trigger: object,
            // this one takes in to bits of info. the first is the part of the trigger element thats causing the trigger to start and the second one is where on the screen. both of them can be either top, center, bottom or a percentage (% are from the top of the container( as in trigger element or screen) )   
            start: "clamp(top center+=50)",
            // same as start but the end point of the animation          
            end: "clamp(bottom center)",
            // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
            scrub: 1,
            // last but not least this helps us to visualize the script
            markers: false,
        }
    }).from(object,{
        x:250,
        opacity:0,
    })
});


$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

$(".testimonial-slider-container").slick({
    autoplay: true,
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