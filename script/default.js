particlesJS.load('particles-js', 'script/include/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

var inputs = document.getElementsByTagName("input");

var f = false;

for (let i = 0; i < inputs.length; i++){
    if (inputs[i].getAttribute("type") == "text" || inputs[i].getAttribute("type") == "password"){

        var original = inputs[i].style.backgroundColor;

        inputs[i].addEventListener("focus", function(){
            f = true;
        });

        inputs[i].addEventListener("focusout", function(){
            f = false;
        });

        inputs[i].addEventListener("keydown", function(){
            if(f){
                inputs[i].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                setTimeout(() => {
                    inputs[i].style.backgroundColor = original;
                }, 0b111111);
            }
        });
    }
}