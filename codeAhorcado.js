let palabras=["PERRO","GATO","COCODRILO","HOGAR","CASAMIENTO","ARGENTINA","CASA","LAPIZ"];
let tablero=document.getElementById("horca").getContext("2d");
let palSecreta="";
let contLetAcertadas=0;
let contLetErradas=0;



document.getElementById("section").style.display="none";
document.getElementById("agregarPalabra").style.display="none";


//-----------------------funcion de iniciar juego-------------------------
function iniciarJuego(){

document.getElementById("sectionInicio").style.display="none";
document.getElementById("section").style.display="block";
selePalabra();
dibujarBaseHorca();
dibujarGuiones();

}
//---------------------------------------------------------------

function selePalabra(){

    let pal=palabras[Math.floor(Math.random()*palabras.length)];
    palSecreta=pal;

}
//---------------------------------------------------------------

function jugarNuevo(){

    selePalabra();
    //borrarCanvas()
    dibujarBaseHorca();
    dibujarGuiones();
    resetearBtns();
    contLetAcertadas=0;
    contLetErradas=0;

}
//esta funcion resetea los botones--------------------------------
function resetearBtns(){
    
    let boton=document.querySelectorAll(".teclado button");

    boton.forEach((button) => {
        button.disabled=false;
        button.style.backgroundColor="#29231d";
      });
}

//esta funcion "captura cada letra seleccionada y detecta si es correcta o no"

function capturarTeclado(letra){
    
    let btnSelecionada=document.getElementById("tecla"+letra);
    
    if(palSecreta.includes(letra)){
        
        btnSelecionada.disabled=true;
        btnSelecionada.style.backgroundColor="green";
        
        
    }     
    else{
        btnSelecionada.style.backgroundColor="red";
        btnSelecionada.disabled=true;

    } 
    comprobarSiGano(letra); 
   
}

//----- Funcion para agregar una nueva palabra al arreglo que contiene las palabras------------------------------------------------------------

function agregarPalabras(){

    document.getElementById("agregarPalabra").style.display="block";
    document.getElementById("sectionInicio").style.display="none";
    let palNueva = document.querySelector(".inputPalabra").value;
    palNueva=palNueva.toUpperCase();
    console.log(palNueva);
    if(palNueva!="" && !palabras.includes(palNueva)) {
        palabras.push(palNueva);
        console.log(palabras);
        alert("palabra agregada correctamente");
        iniciarJuego();
    }

}

//-----------------------------------------------------------------

function volverInicio(){

    document.getElementById("sectionInicio").style.display="block";
    document.getElementById("agregarPalabra").style.display="none";
    document.getElementById("section").style.display="none";
    borrarCanvas();
    jugarNuevo();

}

//-----------------------------------------------------------------

function comprobarSiGano(letra){

   console.log(letra);

    for(var i=0; i<palSecreta.length; i++){
        if(palSecreta[i]==letra){

            
            contLetAcertadas++;
            dibujarLetras(letra);
            //console.log("acertadas "+contLetAcertadas);
        }
    }

    if(contLetAcertadas==palSecreta.length){
        
        Swal.fire({
            title: 'Acertaste!!!',
            text: 'la palabra adivinada era: '+palSecreta,
            icon: 'success',
            background: 'rgb(255,255,255)',
            timer:5000,
            timerProgressBar: true,
            backdrop:true,
            width: '30%',
            allowOutsideClick: false,
          })
        borrarCanvas();
        jugarNuevo();
    }
    if(!palSecreta.includes(letra)){
        contLetErradas++;
        //console.log("erradas "+contLetErradas);
        dibujarVidaHorca(contLetErradas);
        if(contLetErradas==6){
            Swal.fire({
                icon: 'error',
                title: 'PERDISTE!!!',
                text:'La palabra adivinada era: '+ palSecreta,
                background: 'rgb(255,255,255)',
                timer:5000,
                timerProgressBar: true,
                backdrop:true,
                width: '30%',
                allowOutsideClick: false,
              })
            borrarCanvas();  
            jugarNuevo();
        }
    }
}


   

