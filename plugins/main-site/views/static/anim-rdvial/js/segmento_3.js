// ============================================SEGMENTO 3
function segmento_3() {
    // clearing screen
    reset_screen()
    TweenMax.killAll()

    // --------------------Adding to Stage
    //show(e.logo, 220, 144)
    show(e.respeta, 220, -245)

    show(e.nube_1, 160, 110)
    show(e.nube_2, 400, 200)
    show(e.nube_3, 530, 150)
    show(e.nube_4, 430, 50)
    show(e.nube_5, 600, 8)
    show(e.nube_6, 250, 250)
    show(e.nube_7, 300, 100)
    show(e.nube_8, 100, 200)
    show(e.nube_9, 650, 300)

    var el_arr = [e.respeta, e.nube_1, e.nube_2, e.nube_3, e.nube_4, e.nube_5, e.nube_6, e.nube_7, e.nube_8, e.nube_9]

    // --------------------TimeLine
    var tl_logo = new TimelineMax()


    function anims() {

        // NOTA IMPORTANTE:
        // este Timeline es el que llama el próximo SEGMENTO.
        // --------------------------------------------------
        tl_logo.to(e.respeta, 0.3, { top: 100 }, '-=0.5')  
               .to(el_arr, 0.3, {delay: 2, top: 500, onComplete: segmento_4 })


        anim_nubes()

    }


    anims()
   

}