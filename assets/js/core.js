var options = {
    strings: ["Meu nome é </br>Vinícius Azevedo </br> e eu faço coisas na internet! </br></br></br> Vamos transformar o seu <span class='sonho'>Sonho</span> em <span class='realidade'> Realidade </span>?"],
    typeSpeed: 45
}

var typed = new Typed(".typed", options);


let sobreMimTxt = 0;

$(".sobreMim").click(() => {
    // $('.textoSobreMim').toggleClass(".blur");
    if (sobreMimTxt == 0) {
        $("#sobreMimTxT").removeClass("blur");
        $(".sobreMim").css("display","none");
        sobreMimTxt = 1;
    } else {
        $("#sobreMimTxT").addClass("blur");
        sobreMimTxt = 0;
    }
});