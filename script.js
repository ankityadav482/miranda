const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    duration:0,
    scale:0.5
})


tl.to("#page1",{
    y:"0vh",
    duration:1,
    delay:1
})

tl.to("#page1",{
    rotate:360,
    scale:1
})
tl.to("#page1",{
    x:"100vh",
    duration:0.6,
    delay:0.2
})
tl.to("#page1",{
    x:"-400vh",
    duration:0.2,
    delay:0.1
})

tl.to("#page1",{
    x:"0vh",
    duration:0.4,
    
})


tl.to("#page1",{
    y:"200vh",
    duration:0.2,
    
})
tl.to("#page1",{
    y:"-400vh",
    duration:0.2,
    delay:0.1
})

tl.to("#page1",{
    y:"0vh",
    duration:0.4,
    delay:0.1,
    scale:0,
})
tl.to("#page1",{
    
    duration:1,
    delay:0.5,
    scale:0.5,
    rotate:-360,
    borderRadius:"50%"
})
tl.to("#page1",{
    
    duration:1.2,
    delay:0.5,
    scale:1,
    borderRadius:0
})