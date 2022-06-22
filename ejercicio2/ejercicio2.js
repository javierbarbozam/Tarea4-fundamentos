let color = prompt ("Digite el color del semáforo:");

if(color == "rojo" || color == "ROJO" || color == "Rojo"){
    alert ("Alto");     
}else if(color == "verde" || color == "VERDE" || color == "Verde"){
    alert ("Siga");    
}else if(color == "amarillo" || color == "AMARILLO" || color == "Amarillo"){
    alert ("Precaución");    
}    
else
{
    alert ("Por favor digite un color válido. Verde, Amarillo o Rojo");
}