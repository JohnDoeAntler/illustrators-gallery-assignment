var animation = [];

["banner", "illustrators", "about", "contact"].forEach(x => {
    let tmp = bodymovin.loadAnimation({
        wrapper: document.getElementById(x),
        animType: 'svg',
        autoplay: false,
        loop: false,
        path: `animation/${x}.json`
    });

    animation[x] = tmp;
    
    [{
        "name" : "mouseenter",
        "offset" : 0
    },{
        "name" : "mouseleave",
        "offset" : 60
    }].forEach(y => {
        document.getElementById(x).addEventListener(y.name, function(){
            tmp.goToAndStop(0 + y.offset);
            tmp.playSegments([0 + y.offset, 59 + y.offset], true);
        });
    });
});

setTimeout(() => {
    $("#content").css("visibility", "visible");
    $("#particles-js").css("opacity", "1");
    $("#content").css("transform", "translate(-50%, -50%)");
    playAnimation();
}, 1600);

$("body").bind("mousewheel", function(e){
    playAnimation();
});

let playAnimation = () => {
    animation["banner"].goToAndPlay(0);

    setTimeout(() => {
        animation["illustrators"].goToAndPlay(0);
        setTimeout(() => {
            animation["about"].goToAndPlay(0);
            setTimeout(() => {
                animation["contact"].goToAndPlay(0);
            }, 100);
        }, 100);
    }, 100);
}

// initialization.addEventListener('complete', () =>{
// });