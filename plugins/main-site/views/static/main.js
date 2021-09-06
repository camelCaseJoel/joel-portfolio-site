const j = jQuery;


// ------------------------------------------Hover-anims
// -----------------------------------------------------
j("div.entry").mouseenter(function () {
    console.log('adf;lasdkjf;asdlj');
    j(this).children("div.overlay").stop(true);
    j(this).children("div.overlay").css({
        top: "0px"
    }, 150,);
});
j("div.entry").mouseleave(function () {
    j(this).children("div.overlay").stop(true);
    j(this).children("div.overlay").css({
        top: "200px"
    }, 150);
});


// ---------------------- http://www.rdvial.gob.do/

j("div#paso-rapido").click(function () {
    window.open('https://pasorapido.gob.do/');
});

j("div#anim").click(function () {
    window.open('/main-site/static/anim-rdvial/index.html');
});

j("div#mopc").click(function () {
    window.open('http://www.mopc.gob.do/');
});

j("div#ticket").click(function () {
    window.open('https://www.tckt.it/');
});

j("div#milne").click(function () {
    window.open('https://milnefruit.com/');
});

j("div#usv").click(function () {
    window.open('https://www.usvinyl.com/');
});

j("div#rdvial").click(function () {
    window.open('http://www.rdvial.gob.do/');
});

j("p.github-link").click(function () {
    window.open('https://github.com/joel-rivera-diaz');
});
j("p.linkedin.header-info.dos").click(function () {
	window.open('https://www.linkedin.com/in/joel-rivera-aa8900172/');
});