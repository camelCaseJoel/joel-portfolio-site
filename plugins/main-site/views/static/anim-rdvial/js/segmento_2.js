// ============================================SEGMENTO 2
function segmento_2() {
    // clearing screen
    reset_screen()
    TweenMax.killAll()

    // --------------------Adding to Stage
    show(e.montanas, -2032, 113)
    show(e.calle, -5, 300)

    show(e.carro_amarillo, -100, 200)
    show(e.carro_rojo, 300, 193)
    show(e.carro_verde, 700, 200)

    show(e.nube_1, 160, 10)
    show(e.nube_2, 400, 20)
    show(e.nube_3, 530, 10)
    show(e.nube_4, 430, 50)
    show(e.nube_5, 600, 8)
    show(e.nube_6, 250, 150)
    show(e.nube_7, 300, 90)
    show(e.nube_8, 100, 80)
    show(e.nube_9, 650, 100)

    show(e.rueda_1, 102, 331)
    show(e.rueda_2, 368, 331)
    show(e.rueda_3, 502, 331)
    show(e.rueda_4, 768, 331)
    show(e.rueda_5, -31, 331)

    show(e.sombra_1, -100, 395)
    show(e.sombra_2, 300, 395)
    show(e.sombra_3, 700, 395)

    show(e.arbustos, -2032, 113)
    show(e.arbustos_frente_1, 801, 337)
    show(e.arbustos_frente_2, 801, 337)

    show(e.textura, -2032, 336)

    show(e.cuando, 151, 50)
    show(e.recuerda, 151,50)


    // -------------------- Some CSS adjusting
    $('.carro').css('width', '340px')
    $('#calle').css('opacity', '1')
    $('#cuando').css('width', '500px')
    $('#recuerda').css('width', '500px')



    // ============================ ANIMATIONS
    var tl_mt = new TimelineMax({ repeat: -1 })
    var tl_rd = new TimelineMax({ repeat: -1 })
    var tl_cr_1 = new TimelineMax({ repeat: -1 })
    var tl_cr_2 = new TimelineMax({ repeat: -1 })
    var tl_cr_3 = new TimelineMax({ repeat: -1 })
    var tl_arb = new TimelineMax({ repeat: -1 })
    var tl_arb_f = new TimelineMax({ repeat: -1, delay: 0.3, repeatDelay: 1})
    var tl_textu = new TimelineMax({ repeat: -1 })
    var tl_cuando = new TimelineMax({ delay: 2 })

    function anims() {
        
        anim_nubes_2()

        tl_cuando.from(e.cuando, 0.3, { left: -600, ease: Linear.easeInOut })
                 .to(e.cuando, 0.3, { delay: 2, left: 800, ease: Linear.easeInOut })
                 .from(e.recuerda, 0.3, { left: -600 }, '-=0.3')
                 .addPause(4, segmento_3, ['parametro baby'], this)

        tl_mt.to(e.montanas, 10, { left: 800, ease: Linear.easeInOut })

        tl_textu.to(e.textura, 2.5, { left: 800, ease: Linear.easeInOut })

        tl_arb.to(e.arbustos, 3.5, { left: 800, ease: Linear.easeInOut })

        tl_arb_f.from(e.arbustos_frente_2, 0.5, { left: -645 })
                //.from(e.arbustos_frente_2, 0.7, {lef: -645}, '+=0.5')

        tl_rd.to($('.rueda'), 0.39, { rotation: -360, ease: Linear.easeInOut })

        tl_cr_1.to(e.carro_rojo, 0.25, { y: 6, ease: Linear.easeInOut , height: 215})
             .to(e.carro_rojo, 0.25, { y: 0, ease: Linear.easeInOut, height: 220 })

        tl_cr_2.to(e.carro_amarillo, 0.15, { y: 4, ease: Linear.easeInOut })
             .to(e.carro_amarillo, 0.15, { y: 0, ease: Linear.easeInOut })

        tl_cr_3.to(e.carro_verde, 0.15, { y: 4, ease: Linear.easeInOut })
             .to(e.carro_verde, 0.15, { y: 0, ease: Linear.easeInOut })
        
    }

    anims()

}