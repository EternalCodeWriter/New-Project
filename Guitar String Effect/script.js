// SVG - Scalable Vector Graphics Animation
// We use SVG animation to make guitar string like effect 
// we have to search "svg path curves" in google for select the svg code

var initialpath = "M 60 100 Q 650 100 1290 100"
var finalpath   = "M 60 100 Q 650 100 1290 100"

var string = document.querySelector(".string")


string.addEventListener("mousemove", function (dets) {

    path = `M 60 100 Q ${dets.x} ${dets.y} 1290 100`

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