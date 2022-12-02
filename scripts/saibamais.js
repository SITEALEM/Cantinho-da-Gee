function saibaMais() {
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnSobre=document.getElementById("btnSobre");

    if(pontos.style.display === "none") {
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnSobre.innerHTML="Saiba mais";
    } else {
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnSobre.innerHTML="Saiba mais";
    }
}