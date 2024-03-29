var m_displacement = 0.1;
var z_displacement = 0.2;

document.addEventListener("mousemove", function(event){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if ($("#content").css("left") != "50%"){
            $("#content").css("left", "50%");
        }
        if ($("#content").css("top") != "50%"){
            $("#content").css("top", "50%");
        }
        return;
    }

    var halfX = window.innerWidth / 2;
    var halfY = window.innerHeight / 2;
    var dx = event.clientX - halfX;
    var dy = event.clientY - halfY;
    $("#content").css("left", ((halfX - dx * m_displacement) / window.innerWidth * 100) + "%");
    $("#content").css("top", ((halfY - dy * m_displacement) / window.innerHeight * 100) + "%");
    //$("#content").css("transform", "translate(-50%, -50%) scale(" + (1 - (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))) * z_displacement / (innerWidth + innerHeight)) + ")");
});