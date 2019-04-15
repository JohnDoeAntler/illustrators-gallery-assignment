particlesJS.load('particles-js', 'script/include/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');

    adjustParticleNumber();
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

$(window).resize(() => adjustParticleNumber());

var adjustParticleNumber = () =>{
    let value = pJSDom[0].pJS.particles.number.value;

    if (window.innerWidth < 768){
        if (value != 50)
        {
            pJSDom[0].pJS.particles.number.value = 50;
            pJSDom[0].pJS.fn.particlesRefresh();
        }
    }else if (window.innerWidth < 992){
        if (value != 100)
        {
            pJSDom[0].pJS.particles.number.value = 100;
            pJSDom[0].pJS.fn.particlesRefresh();
        }
    }else if (window.innerWidth < 1200){
        if (value != 150)
        {
            pJSDom[0].pJS.particles.number.value = 150;
            pJSDom[0].pJS.fn.particlesRefresh();
        }
    }
}