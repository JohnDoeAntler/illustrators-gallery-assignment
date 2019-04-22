var switchAnimation = bodymovin.loadAnimation({
    wrapper: document.getElementById('switchAnimation'),
    animType: 'svg',
    autoplay: false,
    loop: false,
    path: 'animation/switch.json'
});

switchAnimation.goToAndStop(1000);