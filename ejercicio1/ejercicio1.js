let edad = prompt ("Digite su edad:");

if(edad <= 3){
    alert ("Usted es un bebé");     
}else if(edad >= 4 && edad < 12){
    alert ("Usted es un niño");    
}else if(edad >= 12 && edad < 18){
    alert ("Usted es un adolescente");    
}else if(edad >= 18 && edad < 65){
    alert ("Usted es un adulto");
}else if(edad >= 65){
    alert ("Usted es un adulto mayor");
}    
else
{
    alert ("Por favor digite valores válidos");
}