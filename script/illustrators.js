let tmp = bodymovin.loadAnimation({
    wrapper: document.getElementById("illustrations"),
    animType: 'svg',
    autoplay: false,
    loop: false,
    path: `animation/illustrations.json`
});

[{
    "name" : "mouseenter",
    "offset" : 0
},{
    "name" : "mouseleave",
    "offset" : 60
}].forEach(y => {
    document.getElementById("panel-right-lower").addEventListener(y.name, function(){
        tmp.goToAndStop(0 + y.offset);
        tmp.playSegments([0 + y.offset, 59 + y.offset], true);
    });
});

setTimeout(() => {
    $("#content").css("visibility", "visible");
    $("#particles-js").css("opacity", "1");
    $("#content").css("transform", "translate(-50%, -50%)");
    tmp.play();
}, 1600);

var classes = [];

[...document.getElementsByTagName("cls")].forEach((x, i) => {
    classes.push({
        "title" :   $(x).attr('title'),
        "desc"  :   $(x).text(),
        "src"   :   $(x).attr('src'),
        "url"   :   $(x).attr('url')
    });
    x.parentNode.removeChild(x);
});

let mod = (a, n) => a - (n * Math.floor(a/n));

let itemlize = (index) => `<div class="item flash ease"><img class="item-img ease" src="${classes[mod(index, classes.length)].src}"/></div>`;

for (let i = 2; i >= 0; i--)
{    
    $(itemlize(i-1)).insertAfter("#arrow-left");
}

let getIndex = () => {
    let arr = [...document.getElementsByClassName("item")];
    return idx = classes.findIndex(function (e) {
        return e.src == $(arr[1].childNodes[0]).attr("src");
    });
}

var timeout;

let shiftLeft = () => {
    let arr = [...document.getElementsByClassName("item")];
    arr[0].parentNode.removeChild(arr[0]);
    $(itemlize(getIndex() + 1)).insertBefore("#arrow-right");

    $("#arrow-left").css("border-right", "20px solid #000");
    clearTimeout(timeout);
    timeout = setTimeout(reset, 100);

    writePanel();
    loadEventListener();
}

let shiftRight = () => {
    let arr = [...document.getElementsByClassName("item")];
    arr[2].parentNode.removeChild(arr[2]);
    $(itemlize(getIndex() - 2)).insertAfter("#arrow-left");

    $("#arrow-right").css("border-left", "20px solid #000");    
    clearTimeout(timeout);
    timeout = setTimeout(reset, 100);

    writePanel();
    loadEventListener();
}

var reset = () => {
    $("#arrow-left").css("border-right", "20px solid rgba(0, 0, 0, 0.0625)");
    $("#arrow-right").css("border-left", "20px solid rgba(0, 0, 0, 0.0625)");
}

let writePanel = () => {
    $("#title").text(classes[getIndex()].title);
    $("#desc").text(classes[getIndex()].desc);
    $("#min-title").text(classes[getIndex()].title);
    $("#min-desc").text(classes[getIndex()].desc);
    $("#image").attr("src", classes[getIndex()].src);
    [...document.getElementsByClassName("redirector")].forEach(element =>{
        $(element).attr("href", classes[getIndex()].url);
    });
}

let loadEventListener = () => {
    let arr = [...document.getElementsByClassName("item")];
    arr[0].addEventListener("click", shiftRight);
    arr[1].removeEventListener("click", shiftLeft);
    arr[1].removeEventListener("click", shiftRight);
    arr[2].addEventListener("click", shiftLeft);
}

$("body").bind("mousewheel", function(e){
    if (e.originalEvent.wheelDelta >= 0)
    {
        shiftLeft();
    }else
    {
        shiftRight();
    }
});

loadEventListener();