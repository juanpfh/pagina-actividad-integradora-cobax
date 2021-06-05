var maximo, barra, progreso, estado, icono, dur, tiempo, minutos=0, seg=0, horas=0, duracion, minutosw2, segundos2, horas2, duracion2, r=false, maximo=200, f=false, seg=0, pista, repetir, favorito, fav;
function elementos(){
    barra=document.getElementById('barra');
    progreso=document.getElementById('progreso');
    icono=document.getElementById('estado');
    estado=document.getElementsByClassName('max')[0];
    pista=document.getElementsByTagName('audio')[0];
    
    estado.addEventListener('click', reproduccion, false);
    barra.addEventListener('click', posicion, false);

}
function reproduccion(){
    if(pista.paused==false){
        pista.pause();
        icono.className="Reproductor icon-play3"
    }else{
        pista.play();
        icono.className="Reproductor icon-pause2"
        load=setInterval(rep, 1);
    }
}
function posicion(posicion){
    var raton=posicion.pageX-barra.offsetLeft;
    var nuevoTiempo=raton*pista.duration/maximo;
    pista.currentTime=nuevoTiempo;
    progreso.style.width=raton+"px";
}
function rep(){
    var total=parseInt(pista.currentTime*maximo/pista.duration);
    progreso.style.width=total+"px";
}

window.addEventListener('load', elementos, false);