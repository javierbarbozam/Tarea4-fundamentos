let nota1 = prompt ("digite la nota del primer examen")
let nota2 = prompt ("digite la nota del segundo examen")
let nota3 = prompt ("digite la nota del tercer examen")
let promedio1 = nota1 * 33.3 / 100
let promedio2 = nota2 * 33.3 / 100
let promedio3 = nota3 * 33.3 / 100
let notafinal = promedio1 + promedio2 + promedio3
if (notafinal < 65) {
	alert ("Está quedado " + notafinal.toFixed(2))
} else if (notafinal > 65 && notafinal < 70) {
	alert ("Pasó raspando " + notafinal.toFixed(2))
} else if (notafinal > 70 && notafinal <= 85) {
	alert ("No está mal " + notafinal.toFixed(2))
} else if (notafinal > 85 && notafinal >= 100) {
	alert ("Muy bien " + notafinal.toFixed(2))
} else if (notafinal = 100) {
	alert ("Excelente, te ganaste un abrazo :) " + notafinal)
}
