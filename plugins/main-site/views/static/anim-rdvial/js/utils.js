// clears the screen for the next 'SEGMENTO'
function reset_screen() {
    $('img').css({
        display: 'none',
        left: '0px',
        top: '0px'
    })
}

// display an element in desired position
function show( el, l, t ) {
    el.css({ display: 'block', left: l + 'px', top: t + 'px' })
}

function anim_nubes() {
    var tl = new TimelineMax({ repeat: -1 }) // -1 is for infinite loop
    var tl_2 = new TimelineMax({ repeat: -1 })
    var tl_3 = new TimelineMax({ repeat: -1 })
    var tl_4 = new TimelineMax({ repeat: -1 })
    var tl_5 = new TimelineMax({ repeat: -1 })
    var tl_6 = new TimelineMax({ repeat: -1 })
    var tl_7 = new TimelineMax({ repeat: -1 })
    var tl_8 = new TimelineMax({ repeat: -1 })
    var tl_9 = new TimelineMax({ repeat: -1 })

    tl.to(e.nube_1, 5, { left: 800, ease: Linear.easeInOut }, 0)
          .set(e.nube_1, { left: -200 })
          .to(e.nube_1, 2, { left: 160, ease: Linear.easeInOut })

    tl_2.to(e.nube_2, 2, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_2, { left: -200 })
      .to(e.nube_2, 2, { left: 400, ease: Linear.easeInOut })

    tl_3.to(e.nube_3, 2, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_3, { left: -200 })
      .to(e.nube_3, 6, { left: 530, ease: Linear.easeInOut })

    tl_4.to(e.nube_4, 4, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_4, { left: -200 })
      .to(e.nube_4, 8, { left: 430, ease: Linear.easeInOut })

    tl_5.to(e.nube_5, 2, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_5, { left: -200 })
      .to(e.nube_5, 8, { left: 600, ease: Linear.easeInOut })

    tl_6.to(e.nube_6, 4, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_6, { left: -200 })
      .to(e.nube_6, 3, { left: 250, ease: Linear.easeInOut })

    tl_7.to(e.nube_7, 4, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_7, { left: -200 })
      .to(e.nube_7, 3, { left: 300, ease: Linear.easeInOut })

    tl_8.to(e.nube_8, 4.5, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_8, { left: -200 })
      .to(e.nube_8, 2, { left: 100, ease: Linear.easeInOut })

    tl_9.to(e.nube_9, 1, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_9, { left: -200 })
      .to(e.nube_9, 4, { left: 650, ease: Linear.easeInOut })
}


// -------------------------------------------------------- ANIM - 2

function anim_nubes_2() {
    $('.nube').css('opacity', '0.4')

    var tl = new TimelineMax({ repeat: -1 }) // -1 is for infinite loop
    var tl_2 = new TimelineMax({ repeat: -1 })
    var tl_3 = new TimelineMax({ repeat: -1 })
    var tl_4 = new TimelineMax({ repeat: -1 })
    var tl_5 = new TimelineMax({ repeat: -1 })
    var tl_6 = new TimelineMax({ repeat: -1 })
    var tl_7 = new TimelineMax({ repeat: -1 })
    var tl_8 = new TimelineMax({ repeat: -1 })
    var tl_9 = new TimelineMax({ repeat: -1 })

    tl.to(e.nube_1, 5, { left: 800, ease: Linear.easeInOut }, 0)
          .set(e.nube_1, { left: -140 })
          .to(e.nube_1, 2, { left: 160, ease: Linear.easeInOut })

    tl_2.to(e.nube_2, 2, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_2, { left: -140 })
      .to(e.nube_2, 2, { left: 400, ease: Linear.easeInOut })

    tl_3.to(e.nube_3, 2, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_3, { left: -140 })
      .to(e.nube_3, 6, { left: 530, ease: Linear.easeInOut })

    tl_4.to(e.nube_4, 4, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_4, { left: -140 })
      .to(e.nube_4, 8, { left: 430, ease: Linear.easeInOut })

    tl_5.to(e.nube_5, 2, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_5, { left: -140 })
      .to(e.nube_5, 8, { left: 600, ease: Linear.easeInOut })

    tl_6.to(e.nube_6, 4, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_6, { left: -140 })
      .to(e.nube_6, 3, { left: 250, ease: Linear.easeInOut })

    tl_7.to(e.nube_7, 4, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_7, { left: -140 })
      .to(e.nube_7, 3, { left: 300, ease: Linear.easeInOut })

    tl_8.to(e.nube_8, 4.5, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_8, { left: -140 })
      .to(e.nube_8, 2, { left: 100, ease: Linear.easeInOut })

    tl_9.to(e.nube_9, 1, { left: 800, ease: Linear.easeInOut }, 0)
      .set(e.nube_9, { left: -140 })
      .to(e.nube_9, 4, { left: 650, ease: Linear.easeInOut })
}