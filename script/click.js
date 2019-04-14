var click = bodymovin.loadAnimation({
    wrapper: document.getElementById('click'),
    animType: 'svg',
    autoplay: false,
    loop: false,
    path: 'animation/click.json'
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    showCursorWave(event);
    return false;
 }, true);
 
document.addEventListener('click', showCursorWave);

function showCursorWave(event) {
    $("#click").css("visibility", "visible");
    $("#click").css("left", event.clientX - 150 + "px");
    $("#click").css("top", event.clientY - 150 + "px");
    click.goToAndStop(0);
    click.playSegments([0, 59], true);
}

click.addEventListener("complete", function(){
    $("#click").css("visibility", "hidden");
});