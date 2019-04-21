setTimeout(() => {
    $("#content").css("visibility", "visible");
    $("#particles-js").css("opacity", "1");
    $("#content").css("transform", "translate(-50%, -50%)");
}, 1600);

var animation = [];

["signin", "signup"].forEach(x => {
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

document.getElementById("signin").addEventListener("click", signin);
document.getElementById("signup").addEventListener("click", signup);

function signin () {
    $("#signin").css("width", 0);
    $("#signin").css("opacity", 0);

    $("#signin-form").css("width", "300px");
    $("#signin-form").css("opacity", 1);

    $("#signup").css("width", "300px");
    $("#signup").css("opacity", 1);

    $("#signup-form").css("width", 0);
    $("#signup-form").css("opacity", 0);
}

function signup () {
    $("#signup").css("width", 0);
    $("#signup").css("opacity", 0);

    $("#signup-form").css("width", "300px");
    $("#signup-form").css("opacity", 1);

    $("#signin").css("width", "300px");
    $("#signin").css("opacity", 1);

    $("#signin-form").css("width", 0);
    $("#signin-form").css("opacity", 0);
}