// ============================================SEGMENTO 5
function segmento_5() {
    // clearing screen
    reset_screen()
    TweenMax.killAll()

    // --------------------Adding to Stage
    show(e.montanas, 0, 113)
    show(e.calle, -5, 300)

    
    show(e.carro_rojo, 830, 193)
    

    show(e.nube_1, 160, 10)
    show(e.nube_2, 400, 20)
    show(e.nube_3, 530, 10)
    show(e.nube_4, 430, 50)
    show(e.nube_5, 600, 8)
    show(e.nube_6, 250, 150)
    show(e.nube_7, 300, 90)
    show(e.nube_8, 100, 80)
    show(e.nube_9, 650, 100)

    
    show(e.rueda_1, 898, 331)
    show(e.rueda_2, 1032, 331)
    

    show(e.sombra_2, 831, 395) 

    show(e.arbustos, 0, 113)

    show($('#caseta'), -100, 50 )
    show($('#empleada'), 20, 135)

    show(e.senal_3, 570, 135)

    show(e.textura, -2032, 336)

    show($('#pieza_1'), -200, 100)
    show($('#pieza_2'), -140, 100)
    show($('#pieza_3'), -100, 100)
    show($('#pieza_4'), -100, 100)
    show($('#pieza_5'), -100, 100)
    show($('#pieza_6'), -100, 100)
    show($('#pieza_7'), -120, 100)

    show($('#serios'), 0, 0)


    // -------------------- Some CSS adjusting
    $('.carro').css('width', '340px')
    $('#calle').css('opacity', '1')
    $('#caseta').css({ width: '320px' })
    $('#empleada').css({ width: '85px' })
    $(e.senal_3).css({ zIndex: '9999', width: '230px' })
    $($('#serios')).css({ zIndex: '99999' })

    //$('.centered_screen').css('overflow','visible')
    

    // ============================ ANIMATIONS
    var tl_rd = new TimelineMax({ repeat: -1 })
    var tl_cr_1 = new TimelineMax({ repeat: -1 })
    
    var tl_run = new TimelineMax()
    
    var tl_emp = new TimelineMax()
    
    var tl_pieza_4 = new TimelineMax()
    var tl_pieza_7 = new TimelineMax()

    var tl_pieza_1 = new TimelineMax()
    var tl_pieza_2 = new TimelineMax()
    var tl_pieza_3 = new TimelineMax()
    var tl_pieza_5 = new TimelineMax()
    var tl_pieza_6 = new TimelineMax()

    var tl_serios = new TimelineMax()

    var tl_quake = new TimelineMax()

    function anims() {
        //vars-anim
        var crash_start = 1.6

        //anim_nubes_2()

        tl_rd.to($('.rueda'), 0.39, { rotation: -360, ease: Linear.easeInOut })

        tl_cr_1.to(e.carro_rojo, 0.25, { y: 6, ease: Linear.easeInOut })
             .to(e.carro_rojo, 0.25, { y: 0, ease: Linear.easeInOut })

        
        tl_run.to(e.carro_rojo, 0.8, { left: '-=1300', ease: Linear.easeInOut }, 0.7)
        tl_run.to('.rueda', 0.8, { left: '-=1300', ease: Linear.easeInOut }, 0.7)


        tl_emp.to($('#empleada'), 0.03, { x: "5", yoyo: true, repeat: 70, ease: Linear.easeInOut })
        tl_emp.to($('#empleada'), 0.15, { y: '+=70', ease: Linear.easeInOut }, 1)

        
        tl_quake.to($('.centered_screen img'), 0.03, { x: "25", yoyo: true, repeat: 40, ease: Power4.easeOut }, 1.4)
        tl_quake.set($('#serios, #un_mensaje'), { x: 0 })
        

        tl_pieza_4.to($('#pieza_4'), 2, { rotationY: 1080 }, crash_start)
                  .to($('#pieza_4'), 2, { x: 500 }, crash_start)
                  .to($('#pieza_4'), 2, { y: 250, ease: Bounce.easeOut }, crash_start)

        tl_pieza_7.to($('#pieza_7'), 3, {  rotation: 1800 }, crash_start)
                  .to($('#pieza_7'), 3, { x: 600 }, crash_start)
                  .to($('#pieza_7'), 3, { y: 250, ease: Bounce.easeOut }, crash_start)

        tl_pieza_1.to($('#pieza_1'), 2.5, { rotationY: 1800 }, crash_start)
                  .to($('#pieza_1'), 2.5, { x: 700 }, crash_start)
                  .to($('#pieza_1'), 2.5, { y: 150, ease: Bounce.easeOut }, crash_start)

        tl_pieza_2.to($('#pieza_2'), 1.8, { rotation: 1500 }, crash_start)
                  .to($('#pieza_2'), 1.8, { x: 420 }, crash_start)
                  .to($('#pieza_2'), 1.8, { y: 200, ease: Bounce.easeOut }, crash_start)

        tl_pieza_3.to($('#pieza_3'), 2.8, { rotationY: 1800 }, crash_start)
                  .to($('#pieza_3'), 2.8, { x: 150 }, crash_start)
                  .to($('#pieza_3'), 2.8, { y: 250, ease: Bounce.easeOut }, crash_start)

        tl_pieza_5.to($('#pieza_5'), 1.5, { rotation: 990 }, crash_start)
                  .to($('#pieza_5'), 2.5, { x: 350 }, crash_start)
                  .to($('#pieza_5'), 2.5, { y: 250, ease: Bounce.easeOut }, crash_start)

        tl_pieza_6.to($('#pieza_6'), 1.3, { rotation: 990 }, crash_start)
                  .to($('#pieza_6'), 2.3, { x: 400 }, crash_start)
                  .to($('#pieza_6'), 2.3, { y: 250, ease: Bounce.easeOut }, crash_start)

        tl_serios.from($('#serios'), 3, { opacity: 0 }, 4.5)
        tl_serios.to($('.centered_screen img'), 0.35, {delay: 0.3, top: "+=450", onComplete: segmento_6})


    }

    anims()

}