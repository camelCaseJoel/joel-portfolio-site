// ============================================SEGMENTO 6
function segmento_6() {
    // clearing screen
    reset_screen()
    TweenMax.killAll()

    // --------------------Adding to Stage
    //show(e.logo, 220, 144)

    show(e.nube_1, 160, 110)
    show(e.nube_2, 400, 200)
    show(e.nube_3, 530, 150)
    show(e.nube_4, 430, 50)
    show(e.nube_5, 600, 8)
    show(e.nube_6, 250, 250)
    show(e.nube_7, 300, 100)
    show(e.nube_8, 100, 200)
    show(e.nube_9, 650, 300)
    show($('#un_mensaje'), 0, 0)

    var el_arr = [e.respeta, e.nube_1, e.nube_2, e.nube_3, e.nube_4, e.nube_5, e.nube_6, e.nube_7, e.nube_8, e.nube_9]


    // CSS -----
    

    // --------------------TimeLine
    var tl_final = new TimelineMax()


    function anims() {

        tl_final.from($('.nube'), 0.5, { top: -500 })
        tl_final.from($('#un_mensaje'), 0.5, { top: -500 })


        anim_nubes()

    }


    anims()


}