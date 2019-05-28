// ============================================SEGMENTO 4
function segmento_4() {
    // clearing screen
    reset_screen()
    TweenMax.killAll()

    // --------------------Adding to Stage
    show(e.montanas, 0, 113)
    show(e.calle, -5, 300)

    show(e.nube_1, 160, 10)
    show(e.nube_2, 400, 20)
    show(e.nube_3, 530, 10)
    show(e.nube_4, 430, 50)
    show(e.nube_5, 600, 8)
    show(e.nube_6, 250, 150)
    show(e.nube_7, 300, 90)
    show(e.nube_8, 100, 80)
    show(e.nube_9, 650, 100)

    show(e.arbustos, 0, 113)

    show(e.senal_1, 50, 80)
    show(e.senal_2, 257, 80)
    show(e.senal_3, 475, 80)
    show(e.senal_4, 680, 80)

    show(e.y_evita, 0, 0)

    //show(e.textura, 0, 336)


    // --------------------- Some CSS adjusting
    $('#calle').css('opacity', '1')

    $('.senal').css('width', '80px')
    
    

    // ============================ ANIMATIONS
    var tl_seg_4_intro = new TimelineMax()
    

    function anims() {

        //anim_nubes_2()

        var select = '.nube, #arbustos, #calle, #montanas'
        var senales = '#senal_1, #senal_2, #senal_3, #senal_4'

        tl_seg_4_intro.from($(select), 0.3, { top: -800 })
                      .from($('#senal_1'), 0.45, {scaleX: 0, scaleY: 0, top: 200 })
                      .from($('#senal_2'), 0.45, { scaleX: 0, scaleY: 0, top: 200 })
                      .from($('#senal_3'), 0.45, { scaleX: 0, scaleY: 0, top: 200 })
                      .from($('#senal_4'), 0.45, { scaleX: 0, scaleY: 0, top: 200 })
                      .from(e.y_evita, 1, { top: -450 , ease: Bounce.easeOut})
                      .to(e.y_evita, 1.5, {onComplete: segmento_5})


    }

    anims()

}