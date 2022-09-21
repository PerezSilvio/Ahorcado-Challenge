function dibujarBaseHorca(){

    tablero.lineWidth =14;
    
    tablero.fillStyle = "rgba(255,255,255,0.1)";
    tablero.strokeStyle = "#5a3908" ;
    
    tablero.fillRect(0, 0, 700,400);
    tablero.beginPath();
    tablero.moveTo(250, 240);
    tablero.lineTo(470, 240);
    tablero.moveTo(270, 240);
    tablero.lineTo(270, 5);
    tablero.moveTo(270, 10);
    tablero.lineTo(375, 10);
    tablero.moveTo(370, 10);
    tablero.lineTo(370,30);
    tablero.stroke();
    tablero.closePath();

    
}

function borrarCanvas(){

    tablero.clearRect(0,0,700,400);
}

function dibujarGuiones(){
    tablero.lineWidth =4;
 
    let anchura=600/palSecreta.length;

    for(let i=0;i<palSecreta.length;i++){

        tablero.moveTo(80+(anchura*i),295);
        tablero.lineTo(120+(anchura*i),295);
        
    }
    tablero.stroke();
    tablero.closePath();
}

function dibujarLetras(letra){
    
    tablero.lineWidth =4;
    tablero.fillStyle = "#000000";
    
    let anchura=600/palSecreta.length;

    for(let i=0;i<palSecreta.length;i++){

        if(palSecreta[i]==letra){
            tablero.font="40px Arial Black";
    		tablero.fillText(letra,80+(anchura*i),290);
        }
       
        
    }
    tablero.stroke();
    tablero.closePath();
}


function dibujarVidaHorca(cont){

    tablero.strokeStyle = "#000000" ;
    switch(cont){

        case 1:
            tablero.lineWidth = 4;
            tablero.beginPath();
            tablero.arc(370,55,25,0,Math.PI*2);
            break;  
        case 2://cuerpo
            tablero.lineWidth = 4;
            tablero.moveTo(370, 78);
            tablero.lineTo(370,150);
            break;
        case 3://brazo der
            tablero.lineWidth = 4;
            tablero.moveTo(370, 80);
            tablero.lineTo(385,150);
            break; 
        case 4://brazo iz
            tablero.lineWidth = 4;
            tablero.moveTo(370, 80);
            tablero.lineTo(355,150);
            break;  
        case 5://pierna der
            tablero.lineWidth = 4;
            tablero.moveTo(370,150);
            tablero.lineTo(385,220);
            break;
        case 6:
            tablero.lineWidth = 4;
            tablero.moveTo(370,150);
            tablero.lineTo(355,220);
            break;                    
    }
    tablero.stroke();
    tablero.closePath();
}
