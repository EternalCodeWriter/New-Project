// gsap.from(".page1",{
//     opacity: 0,
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })

  //                          Page1 SLICK Effect
  var initialpath = "M 0 100 Q 650 100 1200 100"
  var finalpath   = "M 0 100 Q 650 100 1200 100"
  
  var string = document.querySelector(".string")
  
  
  string.addEventListener("mousemove", function (dets) {
  
      path = `M 00 100 Q ${dets.x} ${dets.y} 1200 100`
  
      gsap.to("svg path",{
          attr: {d:path}
      })
  })
  
  string.addEventListener("mouseleave",function(){
  
      gsap.to("svg path",{
          attr: {d:finalpath},
          duration: 1.5,
          ease: "elastic.out(1,0.2)"
      })
  })




//                         Scrolling Animation of the text present in the Page 2

gsap.to(".page2 h1", {
    transform: "translateX(-65%)",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        markers: false,
        start: "top 0%",
        end: "top -90%",
        scrub: 2,
        pin: true
    }

})
var tl = gsap.timeline()


tl .from(".nav",{
    opacity:0,
    scale:1.5,
    duration:0.8,
    delay: 1,
    // x: 100,
    y: 300
})
tl.from(".nav .list",{
    opacity: 0,
    scale: 0,
    duration: 0.8,
    x: -50,
    stagger: true
})

tl.from(".h3", {
    y: -50,
    duration: 0.8,
    opacity: 0,
    scale: 0,
    scrub: 2
})

tl.from(".h1", {
    opacity: 0,
    scale: 0,
    duration: 0.8,
    y: -50,
    ease: "power4.out",
    scrub: 2
})

tl.from(".h2",{
    opacity: 0,
    scale: 0,
    duration: 0.8,
    x: -30,
    y: 0,
    ease: "circ.out"

})

tl.from(".web", {
    opacity: 0,
    scale: 0,
    duration: 1,
    y: 0,
    x: -60,
    scrub: 2,
    ease: "power3.out"

})

tl.from(".page1 .lc", {
    opacity: 0,
    scale: 0,
    duration: 1,
    x: -500,
    scrub: 2,
    ease: "back.out(1)"
})

tl.from(".page3 .link button", {
    
    x: -600,
    opacity: 0,
    scale: 0,
    duration: 2,
    stagger: -1,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        markers: false,
        start: "top 10%",
        end: "top 80%",
        scrub: 2
    }
})




