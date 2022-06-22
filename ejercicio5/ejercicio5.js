let saludo = prompt ("Hola");

if(saludo == "Buenos dias" || saludo == "buenos dias" || saludo == "BUENOS DIAS"){
    alert ("Buenos días");     
}else if(saludo == "Buenas tardes" || saludo == "buenas tardes" || saludo == "BUENAS TARDES"){
    alert ("Buenas tardes");    
}else if(saludo == "Buenas noches" || saludo == "buenas noches" || saludo == "BUENAS NOCHES"){
    alert ("Buenas noches");    
}
else
{
    alert ("Por favor digite un saludo válido.");
}