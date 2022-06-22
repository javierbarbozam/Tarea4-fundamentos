let year = prompt ("Digite un año del 2002 al 2026")
if (year == 2002) {
	alert ("En el 2002 el mundial se realizó en Corea y Japón, y el ganador fue Brasil.")
} else if (year == 2006) {
	alert ("En el 2006 el mundial se realizó en Alemania, y el ganador fue Italia.")
} else if (year == 2010) {
	alert ("En el 2010 el mundial se realizó en Sudáfrica, y el ganador fue España.")
} else if (year == 2014) {
	alert ("En el 2014 el mundial se realizó en Brasil, y el ganador fue Alemania.")
} else if (year == 2018) {
	alert ("En el 2018 el mundial se realizó en Rusia, y el ganador fue Francia.")
} else if (year == 2022) {
	alert ("En el 2022 el mundial se realizará en Qatar.")
} else if (year == 2026) {
	alert ("En el 2026 el mundial se realizará en Estados Unidos, México y Candá.")
}	else if (year != 2002 && year != 2006 && year != 2010 && year != 2014 && year != 2018 && year != 2022 && year != 2026) {
	alert ("En el año " + year + " no se realizó mundial")
}