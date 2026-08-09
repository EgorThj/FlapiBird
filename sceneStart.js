import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
export const sceneMenu  = scene("menu",function(){
    add([
        text("Начать игру",{
            size:32
        }),
        pos(200,200),
        color(150,200,83)
    ])
})