function page1animation(){
    // gsap.from("nav h1",{
//     y:-30,
//     opacity:0,
//     duration:1,
//     delay:1
// })

// gsap.from("nav h4, nav button",{
//     y:-30,
//     opacity:0,
//     duration:1,
//     delay:1
// })

var tl = gsap.timeline()
tl.from("nav h1,nav h4, nav button",{
    y:-40,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.15
})

tl.from(".center-part1 h1",{
    x:-500,
    opacity:0,
    duration:0.6


},"-=0.3")
tl.from(".center-part1 p",{
    x:-90,
    opacity:0,
    duration:0.4


})
tl.from(".center-part1 button",{
   
    opacity:0,
    duration:0.6


})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=0.6")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})

}

page1animation()







var tl2 =gsap.timeline({
    scrollTrigger:{
        trigger:".services",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top -70%",
        scrub:2
 
     }
})

tl2.from(".services",{
    y:30,
    opacity:0,
   duration:0.5
})

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"left")

tl2.from(".elem.black.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"left")



tl2.from(".elem.black.line2.left",{
    x:-300,
    opacity:0,
    duration:1
},"right")

tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"right")



tl2.from(".elem.line3.left",{
    x:-300,
    opacity:0,
    duration:1
},"line3")

tl2.from(".elem.black.line3.right",{
    x:300,
    opacity:0,
    duration:1
},"line3")






tl2.from(".mainof3",{
    opacity:0,
    y:300,
    duration:1,
    delay:0,
})