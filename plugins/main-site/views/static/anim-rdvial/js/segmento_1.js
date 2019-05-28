

// ------------------------------------------
//  >>>>>>>>     NOTA IMPORTANTE:    <<<<<<<<
// ------------------------------------------
// Este segmento no está en uso.
// He tomado partes de él para hacer otro segmento,
// pero como tal, este segmento no está siendo usado.
// Tal vez en el futuro esto cambie. Tal vez. No sé.



// ============================================SEGMENTO 1
function segmento_1() {
    // clearing screen
    reset_screen()
    TweenMax.killAll()

    // --------------------Adding to Stage
    show(e.logo, 220, 144)
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

    // --------------------TimeLine
    var tl_logo = new TimelineMax()
    

    function anims() {

        // NOTA IMPORTANTE:
        // este Timeline es el que llama el próximo SEGMENTO.
        // --------------------------------------------------
        tl_logo.from(e.logo, 1, { scale: 0 }, .5)
          .to(e.logo, 1, { delay: 1, top: 445, rotationX: 350 })
          .to(e.respeta, 1, { top: 100, ease: Bounce.easeOut }, '-=0.5')
          .addPause( 6, segmento_2,['parametro baby'], this )



        anim_nubes()

    }


    anims()
}