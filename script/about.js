var switchAnimation = bodymovin.loadAnimation({
    wrapper: document.getElementById('switchAnimation'),
    animType: 'svg',
    autoplay: false,
    loop: false,
    path: 'animation/switch.json'
});

switchAnimation.goToAndStop(1000);

setTimeout(() => {
    $("#content").css("visibility", "visible");
    $("#particles-js").css("opacity", "1");
    $("#content").css("transform", "translate(-50%, -50%)");
    $("#nav-bar").css("opacity", 1);
    $("#nav-bar").css("top", "50%");
}, 1600);

var page = new URL(window.location.href).searchParams.get("page") || "about";

var currentPage = "";

var rewritePanel = (string) => {
    [{
        name : "about",
        src : "./image/about.png",
        title : "- ABOUT US -",
        desc : "We are the illustrators club. Nowadays, visual culture, illustration and modern art is no longer receiving attention from the general public. Hence, this illustration club has created for our schoolmate to be in touch with the illustration. We would like to introduce the different region of illustrators, the style of their illustration and their background stories. It is hoped that our club can gain your interest in illustration and make your own stunning illustration."
    },
    {
        name : "contact",
        src : "./image/contact.jpg",
        title : "- CONTACT US -",
        desc : "Do you need help? Have any questions you would like answered about illustrators and illustrations? Please feel free to visit our club in school or send us an email via the school network system. If you want to join our illustration club, just finish the member application form either by paper or online.Email: 2019illustrationclub@school.com "
    }].forEach(element => {
        if (element.name == string){
            $("#icon").attr("src", element.src);
            $("#title").text(element.title);
            $("#desc").text(element.desc);
            currentPage = string;
        }
    });
}

var switchContent = (option) =>{
    if (currentPage == option)
        return;
        
    switchAnimation.goToAndPlay(0);
    $("#screen-blocker").css('opacity', 1);
    $("#icon").css('opacity', 0);
    $("#title").css('background-color', 'rgba(0, 0, 0, 0.5)');
    $("#desc").css('background-color', 'gray');
    rewritePanel(option);

    setTimeout(() => {
        $("#screen-blocker").css('opacity', 0);
        $("#icon").css('opacity', 0.6);
        $("#title").css('background-color', 'rgba(0, 0, 0, 0.25)');
        $("#desc").css('background-color', 'transparent');
    }, 100);
}

document.getElementById("icon").addEventListener("click", () => {
    switchContent(currentPage == "about" ? "contact" : "about");
})

$("body").bind("mousewheel", function(e){
    switchContent(currentPage == "about" ? "contact" : "about");
});

$("#screen-blocker").css('opacity', 0);

rewritePanel(page);