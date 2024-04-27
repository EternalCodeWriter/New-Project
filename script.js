// gsap.from(".left",{
//     y: -30,
//     color: "purple",
//     opacity: 0,
//     duration: 1,
//     delay: 1
// })

// gsap.from("a",{
//     y: -30,
//     opacity: 0,
//     color: "green",
//     delay: 0.5,
//     stagger: 1
// })
// gsap.from("h1",{
//     y: -150,
//     color: "royalblue",
//     opacity: 0,
//     duration: 1.5,
//     delay: 4
// })

var tl = gsap.timeline()


//                                                       new GSAP for smooth animation
tl.from(".nav",{
    y: -30,
    x: -500,
    opacity: 0,
    duration: 2,
    delay: 1,
})
// tl.from("#link",{
//     y: -30,
//     opacity: 0,
//     duration: 0.2,
//     stagger: 1
// })
tl.from("h1",{
    y: -150,
    color: "royalblue",
    opacity: 0,
    duration: 1
})
tl.from("button ",{
    y:-30,
    x: 50,
    opacity: 0,
    duration: 0.3,
    stagger: 1
})