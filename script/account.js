setTimeout(() => {
    $("#content").css("visibility", "visible");
    $("#particles-js").css("opacity", "1");
    $("#content").css("transform", "translate(-50%, -50%)");
}, 1600);

var isLogin = false;

function login(){
    $("#login-img").addClass("close")
        .removeClass("open");
    $("#register-img").addClass("open")
        .removeClass("close");

    $("#register-form").css("pointer-events", "none")
        .css("opacity", "0")
        .css("width", 0)
        .css("max-width", 0);

    $("#login-form").css("pointer-events", "auto")
        .css("opacity", "1")
        .css("width", "480px")
        .css("max-width", "480px");

    $("#lgn-password").val($("#reg-password").val());
    $("#lgn-email").val($("#reg-email").val());

    isLogin = true;
}

function register(){
    $("#login-img").addClass("open")
        .removeClass("close");
    $("#register-img").addClass("close")
        .removeClass("open");
    
    $("#login-form").css("pointer-events", "none")
        .css("opacity", "0")
        .css("width", 0)
        .css("max-width", 0);

    $("#register-form").css("pointer-events", "auto")
        .css("opacity", "1")
        .css("width", "480px")
        .css("max-width", "480px");

    $("#reg-password").val($("#lgn-password").val());
    $("#reg-confirm").val($("#lgn-password").val());
    $("#reg-email").val($("#lgn-email").val());

    isLogin = false;
}

$("#register-img").on("click", register);
$("#login-img").on("click", login);
$("#lgn-register").on("click", register);
$("#reg-login").on("click", login);

$(window).bind("mousewheel", function(e){
    if (isLogin) register();
    else login();
});