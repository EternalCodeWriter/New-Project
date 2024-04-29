// gsap.from(".page1",{
//     opacity: 0,
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })
//                         Scrolling Animation of the text present in the Page 2

gsap.to(".page2 h1",{
    transform: "translateX(-90%)",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        markers: false,
        start: "top 0%",
        end: "top -90%",
        scrub:2,
        pin: true
    }

})
var tl = gsap.timeline()

tl.from(".page3 .left button",{
    y: 800,
    x: -600,
    opacity: 0,
    scale: 0,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
           trigger: ".page3",
           scroller: "body",
           markers: false,
           start: "top 15%",
           end: "top 110%",
           scrub: 2
    }
})

tl.from(".page3 .right button",{
    y: 800,
    x: 600,
    opacity: 0,
    scale: 0,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        markers: false,
        start: "top 15%",
        end: "top 110%",
        scrub: 2
    }


})