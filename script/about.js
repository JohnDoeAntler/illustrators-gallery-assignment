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
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere sodales dolor vitae aliquet. Nunc nec ex mollis, tempor est ut, imperdiet est. Donec at ex a justo lacinia consectetur quis quis dui. Quisque ullamcorper at erat quis facilisis. Morbi ac luctus leo. Sed pellentesque metus egestas libero varius lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus maximus dictum ex nec pretium. Fusce ac augue tincidunt, condimentum nibh et, cursus sapien. Sed mauris quam, faucibus sed efficitur et, sollicitudin eget purus. Aenean nec massa nunc. Pellentesque venenatis nisl vitae auctor sodales. Maecenas eu consequat nulla, ut placerat eros. In nec tortor non tellus rhoncus facilisis et vitae orci."
    },
    {
        name : "contact",
        src : "./image/contact.jpg",
        title : "- CONTACT US -",
        desc : "Aliquam quis congue justo. Nam suscipit ipsum in quam placerat lacinia non eget augue. Curabitur imperdiet id odio a dictum. Suspendisse iaculis consequat ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ante dui, rhoncus vel massa a, vestibulum auctor arcu. Quisque non erat eu tortor viverra fermentum vitae sit amet ligula. Nulla neque nisi, laoreet at congue eget, volutpat sed nisl. Vivamus fringilla, sapien ut semper euismod, augue ipsum venenatis neque, eget semper dolor ligula quis enim. Fusce lobortis posuere scelerisque. Aenean vestibulum libero sodales pretium varius. Praesent tincidunt quis lacus ut venenatis. In eget dui mollis, sagittis lacus sit amet, rutrum nibh. Cras scelerisque libero eu fermentum porttitor. Suspendisse potenti."
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

$("#screen-blocker").css('opacity', 0);

rewritePanel(page);