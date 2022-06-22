let operacion = prompt ("Digite una operacion: 1 = Suma, 2 = Resta, 3 = Multiplicación y 4 = División");
let v1 = prompt ("Digite el primer valor");
let v2 = prompt ("Digite el segundo valor");
let suma = parseInt(v1) + parseInt(v2);
let resta = v1 - v2;
let multiplicación = v1 * v2;
let division = v1 / v2;

if(operacion == 1){
    alert (v1 + " + " + v2 + " = " + suma);     
}else if(operacion == 2){
    alert (v1 + " - " + v2 + " = " + resta);    
}else if(operacion == 3){
    alert (v1 + " * " + v2 + " = " + multiplicación);    
}else if(operacion == 4){
    alert (v1 + " / " + v2 + " = " + division);    
}
else
{
    alert ("Por favor digite una operación válida.");
}