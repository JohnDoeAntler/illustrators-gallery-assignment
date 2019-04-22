setTimeout(() => {
    $("#content").css("visibility", "visible");
    $("#particles-js").css("opacity", "1");
    $("#content").css("transform", "translate(-50%, -50%)");
    $("#initialization").css("display", "none");
}, 1600);

[...document.getElementsByClassName("picture")].forEach(element =>{
    element.addEventListener("click", () =>{
        let tmp = $(element).attr("src");
        $(element).attr("src", $("#icon").attr("src"));
        $("#icon").attr("src", tmp);

        $("#icon").css("opacity", 0);
        $("#blackscreen").css("opacity", 1);

        switchAnimation.goToAndPlay(0);

        setTimeout(() => {
            $("#icon").css("opacity", 0.6);
            $("#blackscreen").css("opacity", 0);
        }, 100);
    })
});