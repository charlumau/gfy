let spriteList = [];

window.addEventListener("load", () => {
    for (let i = 1; i <= spookie_count; i++){
        spriteList.push(new Portrait("frame-"+i+"-evil"));
    }
    tick();
})

const tick = () => {

    for (let i = 0; i < spriteList.length; i++) {
        const node = spriteList[i];
        node.tick();
    }
    //setTimeout(tick, 30); est remplacer par ca en bas
    window.requestAnimationFrame(tick)
}