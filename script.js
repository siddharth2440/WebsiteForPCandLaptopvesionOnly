// GSock Animation Starts //
var tl = gsap.timeline();
tl.from("nav,.logo-upper,.logo-lower,#Home,#AI__impact,#AI__Future,#contact__page,.profiles",{
    y:-100,
    opacity:0,
    delay:1,
    stagger:0.3,
    scrub:3
});

tl.from("img",{
    y:100,
    opacity:0,
    scale:1.2,
    scrub:3
})

tl.from(".Header .header__right .content .quote",{
    y:-100,
    opacity:0,
    duration:1,
    scrub:3
})

tl.from(".Header .header__right .content h1",{
    x:100,
    scale:2,
    duration:0.9,
    opacity:0,
    scrub:3
})

tl.from(".Header .header__right .content p",{
    x:-90,
    scale:0,
    duration:0.9,
    opacity:0,
    scrub:3
})

tl.from("button",{
    scale:0,
    opacity:0,
    duration:0.4,
    rotate:360,
    scrub:2
})

tl.from('.evolution .evolution__images ,.img2,.img3,.img4',{
    scale:0,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:".evolution .evolution__images ,.img2,.img3,.img4",
        scroller:"body",
        start:"top 90%",
        end:"top 40%",
        // markers:true,
        scrub:2
    }
})
tl.from('.evolution .evolution__content .text h3',{
    scale:10,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:".evolution .evolution__content .text h3",
        scroller:"body",
        end:"top 40%",
        scrub:5
    }
})
tl.from('.evolution .evolution__content .text p',{
    scale:0,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:".evolution .evolution__content .text p",
        scroller:"body",
        scrub:5
    }
})
tl.from('.evolution .evolution__content .text .unknown',{
    x:-100,
    scale:3,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:".evolution .evolution__content .text p",
        scroller:"body",
        start:"top 90%",
        end:"top 35%",
        scrub:3
    }
})
tl.from(".box .horizontal__box .context",{
    scale:0,
    opacity:0,
    duration:0.2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".box .horizontal__box .context",
        scroller:"body",
        scrub:2,
        end:"top 40%",
        // markers:true
    }
})
tl.from(".human__AI h1,.human__AI .human__AI__title",{
    opacity:0,
    scale:0,
    duration:0.7,
    delay:0.2,
    stagger:0.6,
    scrollTrigger:{
        scroller:"body",
        trigger:".human__AI h1,.human__AI .human__AI__title",
        scrub:1,
        start:"top 60%",
        end:"top 10%"
    }
})
tl.from(".human__AI .section1 .section1images2,.human__AI .section1 .section1images",{
    opacity:0,
    duration:0.3,
    delay:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:".human__AI .section1 .section1images2,.human__AI .section1 .section1images",
        scrub:2,
        start:"top 90%",
        end:"top 30%"
    }
})
tl.from(".human__AI .section1 .section1__para p",{
    opacity:0,
    y:70,
    duration:0.5,
    delay:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:".human__AI .section1 .section1__para p",
        scrub:2,
        start:"top 90%",
        end:"top 60%"
    }
})

tl.from(".human__AI .section2 p",{
    duration:0.6,
    delay:0.2,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".human__AI .section2 p",
        start:"top 70%",
        end:"top 40%",
        scrub:3
    }
})

tl.from(".human__AI .section3 p",{
    y:-100,
    opacity:0,
    duration:0.3,
    delay:0.5,
    scrollTrigger:{
        scroller:"body",
        trigger:".human__AI .section3 p",
        start:"top 60%",
        end:"top 20%",
        scrub:3
    }
})

tl.from("#FutureSection .futureHeading",{
    y:-100,
    opacity:0,
    scale:2,
    duration:0.4,
    scrollTrigger:{
        scroller:"body",
        trigger:"#FutureSection .futureHeading",
        start:"top 60%",
        end:"top 20%",
        scrub:3
    }
})
tl.from("#FutureSection .futuretitle,#FutureSection .aboutAIinFuture,h4",{
    y:100,
    opacity:0,
    stagger:0.5,
    duration:0.8,
    scrollTrigger:{
        scroller:"body",
        trigger:"#FutureSection .futuretitle,#FutureSection .aboutAIinFuture,h4",
        start:"top 60%",
        end:"top 20%",
        scrub:3
    }
})
tl.from("#FutureSection .cards__container .card-1,.card-2,.card-3,.card-4,.card-5,.card-6",{
    y:80,
    opacity:0,
    stagger:0.3,
    duration:0.8,
    scrollTrigger:{
        scroller:"body",
        trigger:"#FutureSection .cards__container .card-1,.card-2,.card-3,.card-4,.card-5,.card-6",
        start:"top 60%",
        end:"top 20%",
        scrub:3
    }
})
tl.from("#promotion>h2,#promotion>.promoterlogo",{
    duration:2,
    delay:0.2,
    scale:0,
    opacity:0,
    stagger:0.7,
    scrollTrigger:{
        scroller:"body",
        trigger:"#promotion h4",
        start:"top 70%",
        end:"top 20%"
    }
})
// GSock animation Ends