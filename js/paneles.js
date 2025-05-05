"use strict";
let v = 1;
let y = 0;
let s = 0;
let n = 0;
let l = 0;
let a = 0;
let p = 0;
let letras = 22;
let fonemas = 24;
let digrafos = 3;
let listanum = 0;
let modoValue = 2;
let laboratorio = 0;
let myBox1 = document.getElementById("myBox1");
let myBox2 = document.getElementById("myBox2");
let myBox3 = document.getElementById("myBox3");
let myBox4 = document.getElementById("myBox4");
let myBox5 = document.getElementById("myBox5");
let myBox6 = document.getElementById("myBox6");
let myListB = document.getElementById("myListB");
let myBoxAa = document.getElementById("myBoxAa");
let myBoxSp = document.getElementById("myBoxSp");
let myFraze = "Se escribe como se pronunzia i se pronunzia como se escribe";
let myFrase = "Se escribe como se pronunsia i se pronunsia como se escribe";
let myFlaze = "Se esclibe como se plonunzia i se plonunzia como se esclibe";
let myFlase = "Se esclibe como se plonunsia i se plonunsia como se esclibe";
// BOTONERA SUPERIOR
function myFunction1() {
	if ( myBox1.checked == true ) {
		document.getElementById("myBox2").checked = false;
		document.getElementById("myBox3").checked = false;
		document.getElementById("myBox4").checked = false;
		document.getElementById("myBox5").checked = false;
		document.getElementById("myBox6").checked = false;
		document.getElementById("myResult").placeholder = myFraze;
		document.getElementById("myYei2").style.display = "none";
		document.getElementById("myYei1").style.display = "inline";
		document.getElementById("myLei2").style.display = "none";
		document.getElementById("myLei1").style.display = "inline";
		document.getElementById("myReg2").style.display = "none";
		document.getElementById("myReg1").style.display = "inline";
		document.getElementById("myExt2").style.display = "none";
		document.getElementById("myExt1").style.display = "inline";
		document.getElementById("myYeismo").style.display = "none";
		document.getElementById("mySeseo").style.display = "none";
		document.getElementById("myNeismo").style.display = "none";
		document.getElementById("myLeleo").style.display = "none";
		letras = 22;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNok").style.display = "none";
		document.getElementById("myNoz").style.display = "none";
		document.getElementById("myNon").style.display = "none";
		document.getElementById("myNov").style.display = "none";
		document.getElementById("myNor").style.display = "none";
		fonemas = 24;
		document.getElementById("myFonemas").innerHTML = fonemas;
		digrafos = 3;
		document.getElementById("myDigrafos").innerHTML = digrafos;
		document.getElementById("myD1grafos").style.display = "inline";
		document.getElementById("myD2grafos").style.display = "none";
		document.getElementById("myNoll").style.display = "inline";
		document.getElementById("myNorr").style.display = "inline";
	} else {
		document.getElementById("myBox1").checked = true;
		myFunction1();
	};
};
function myFunction2() {
	if ( myBox2.checked == true ) {
		document.getElementById("myBox1").checked = false;
		document.getElementById("myBox3").checked = false;
		document.getElementById("myBox4").checked = false;
		document.getElementById("myBox5").checked = false;
		document.getElementById("myBox6").checked = false;
		document.getElementById("myResult").placeholder = myFraze;
		document.getElementById("myYei1").style.display = "none";
		document.getElementById("myYei2").style.display = "inline";
		document.getElementById("myLei1").style.display = "none";
		document.getElementById("myLei2").style.display = "inline";
		document.getElementById("myReg1").style.display = "none";
		document.getElementById("myReg2").style.display = "inline";
		document.getElementById("myExt1").style.display = "none";
		document.getElementById("myExt2").style.display = "inline";
		document.getElementById("myYeismo").style.display = "none";
		document.getElementById("mySeseo").style.display = "none";
		document.getElementById("myNeismo").style.display = "none";
		document.getElementById("myLeleo").style.display = "none";
		letras = 24;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNok").style.display = "none";
		document.getElementById("myNoz").style.display = "none";
		document.getElementById("myNon").style.display = "none";
		document.getElementById("myNov").style.display = "none";
		document.getElementById("myNor").style.display = "none";
		fonemas = 24;
		document.getElementById("myFonemas").innerHTML = fonemas;
		digrafos = 0;
		document.getElementById("myDigrafos").innerHTML = digrafos;
		document.getElementById("myD2grafos").style.display = "inline";
		document.getElementById("myD1grafos").style.display = "none";
	} else {
		document.getElementById("myBox2").checked = true;
		myFunction2();
	};
};
function myFunction3() {
	if ( myBox1.checked == true && myBox3.checked == true ) {
		document.getElementById("myYeismo").style.display = "inline";
		fonemas = fonemas - 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
		digrafos = digrafos - 1;
		document.getElementById("myDigrafos").innerHTML = digrafos;
		document.getElementById("myNoll").style.display = "none";
	};
	if ( myBox1.checked == true && myBox3.checked == false ) {
		document.getElementById("myYeismo").style.display = "none";
		fonemas = fonemas + 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
		digrafos = digrafos + 1;
		document.getElementById("myDigrafos").innerHTML = digrafos;
		document.getElementById("myNoll").style.display = "inline";
	};
	if ( myBox2.checked == true && myBox3.checked == true ) {
		document.getElementById("myYeismo").style.display = "inline";
		letras = letras - 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNok").style.display = "inline";
		fonemas = fonemas - 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
	if ( myBox2.checked == true && myBox3.checked == false ) {
		document.getElementById("myYeismo").style.display = "none";
		letras = letras + 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNok").style.display = "none";
		fonemas = fonemas + 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
};
function myFunction4() {
	if ( myBox1.checked == true && myBox4.checked == true ) {
		if ( myBox6.checked == false ) { document.getElementById("myResult").placeholder = myFrase; }
		if ( myBox6.checked == true ) { document.getElementById("myResult").placeholder = myFlase; }
		document.getElementById("mySeseo").style.display = "inline";
		letras = letras - 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNoz").style.display = "inline";
		fonemas = fonemas - 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
	if ( myBox1.checked == true && myBox4.checked == false ) {
		if ( myBox6.checked == false ) { document.getElementById("myResult").placeholder = myFraze; }
		if ( myBox6.checked == true ) { document.getElementById("myResult").placeholder = myFlaze; }
		document.getElementById("mySeseo").style.display = "none";
		letras = letras + 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNoz").style.display = "none";
		fonemas = fonemas + 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
	if ( myBox2.checked == true && myBox4.checked == true ) {
		if ( myBox6.checked == false ) { document.getElementById("myResult").placeholder = myFrase; }
		if ( myBox6.checked == true ) { document.getElementById("myResult").placeholder = myFlase; }
		document.getElementById("mySeseo").style.display = "inline";
		letras = letras - 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNoz").style.display = "inline";
		fonemas = fonemas - 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
	if ( myBox2.checked == true && myBox4.checked == false ) {
		if ( myBox6.checked == false ) { document.getElementById("myResult").placeholder = myFraze; }
		if ( myBox6.checked == true ) { document.getElementById("myResult").placeholder = myFlaze; }
		document.getElementById("mySeseo").style.display = "none";
		letras = letras + 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNoz").style.display = "none";
		fonemas = fonemas + 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
};
function myFunction5() {
	if ( myBox1.checked == true && myBox5.checked == true ) {
		document.getElementById("myNeismo").style.display = "inline";
		letras = letras - 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNon").style.display = "inline";
		fonemas = fonemas - 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
	if ( myBox1.checked == true && myBox5.checked == false ) {
		document.getElementById("myNeismo").style.display = "none";
		letras = letras + 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNon").style.display = "none";
		fonemas = fonemas + 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
	if ( myBox2.checked == true && myBox5.checked == true ) {
		document.getElementById("myNeismo").style.display = "inline";
		letras = letras - 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNon").style.display = "inline";
		fonemas = fonemas - 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
	if ( myBox2.checked == true && myBox5.checked == false ) {
		document.getElementById("myNeismo").style.display = "none";
		letras = letras + 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNon").style.display = "none";
		fonemas = fonemas + 1;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
};
function myFunction6() {
	if ( myBox1.checked == true && myBox6.checked == true ) {
		if ( myBox4.checked == false ) { document.getElementById("myResult").placeholder = myFlaze; }
		if ( myBox4.checked == true ) { document.getElementById("myResult").placeholder = myFlase; }
		document.getElementById("myLeleo").style.display = "inline";
		letras = letras - 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNor").style.display = "inline";
		fonemas = fonemas - 2;
		document.getElementById("myFonemas").innerHTML = fonemas;
		digrafos = digrafos - 1;
		document.getElementById("myDigrafos").innerHTML = digrafos;
		document.getElementById("myNorr").style.display = "none";
	};
	if ( myBox1.checked == true && myBox6.checked == false ) {
		if ( myBox4.checked == false ) { document.getElementById("myResult").placeholder = myFraze; }
		if ( myBox4.checked == true ) { document.getElementById("myResult").placeholder = myFrase; }
		document.getElementById("myLeleo").style.display = "none";
		letras = letras + 1;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNor").style.display = "none";
		fonemas = fonemas + 2;
		document.getElementById("myFonemas").innerHTML = fonemas;
		digrafos = digrafos + 1;
		document.getElementById("myDigrafos").innerHTML = digrafos;
		document.getElementById("myNorr").style.display = "inline";
	};
	if ( myBox2.checked == true && myBox6.checked == true ) {
		if ( myBox4.checked == false ) { document.getElementById("myResult").placeholder = myFlaze; }
		if ( myBox4.checked == true ) { document.getElementById("myResult").placeholder = myFlase; }
		document.getElementById("myLeleo").style.display = "inline";
		letras = letras - 2;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNov").style.display = "inline";
		document.getElementById("myNor").style.display = "inline";
		fonemas = fonemas - 2;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
	if ( myBox2.checked == true && myBox6.checked == false ) {
		if ( myBox4.checked == false ) { document.getElementById("myResult").placeholder = myFraze; }
		if ( myBox4.checked == true ) { document.getElementById("myResult").placeholder = myFrase; }
		document.getElementById("myLeleo").style.display = "none";
		letras = letras + 2;
		document.getElementById("myLetras").innerHTML = letras;
		document.getElementById("myNov").style.display = "none";
		document.getElementById("myNor").style.display = "none";
		fonemas = fonemas + 2;
		document.getElementById("myFonemas").innerHTML = fonemas;
	};
};
function myList() {
	if ( listanum == 0 ) {
		document.getElementById("myListB").style.display = "block";
		if ( document.getElementById("main").offsetWidth >= 300 ) {
			document.getElementById("listBr").style.display = "none";
		} else {
			document.getElementById("listBr").style.display = "block";
		};
		listanum = 1;
	} else {
		document.getElementById("myListB").style.display = "none";
		listanum = 0;
	};
};
// BOTONERA INFERIOR
function myChange() {
	if ( myBox1.checked == true ) { v = 1 };
	if ( myBox2.checked == true ) { v = 2 };
	if ( myBox3.checked == true ) { y = 1 } else { y = 0 };
	if ( myBox4.checked == true ) { s = 1 } else { s = 0 };
	if ( myBox5.checked == true ) { n = 1 } else { n = 0 };
	if ( myBox6.checked == true ) { l = 1 } else { l = 0 };
	if ( myBoxAa.checked == true ) { a = 1 } else { a = 0 };
	if ( myBoxSp.checked == true ) { p = 1 } else { p = 0 };
	let texto;
	texto = document.getElementById("myInput").value.toString();
	texto = Simplificar(texto,v,y,s,n,l,a,p);
	document.getElementById("myResult").value = texto;
	document.getElementById("myInput").scrollTop = 0;
	document.getElementById("myResult").scrollTop = 0;
};
function myClear() {
	document.getElementById("myInput").value = "";
	document.getElementById("myResult").value = "";
};
function myAaTex() {
	let amatex = document.getElementById("myInput").value.toString();
	document.getElementById("myInput").value = myMoTex(amatex);
	document.getElementById("myInput").scrollTop = 0;
	document.getElementById("myResult").scrollTop = 0;
};
function myMoTex(abtexto) {
	abtexto = abtexto.toLowerCase();
	// let abtexto = abtexto.replace(/\s+/g, " ");
	// let abtexto = abtexto.trim();
	abtexto = abtexto.replace(/\n+/g, "êăõ");
	abtexto = abtexto.replace(/\s+/g, " ");
	abtexto = abtexto.replace(/êăõ* /g, "\n\n");
	abtexto = abtexto.replace(/êăõ/g, "\n\n");
	abtexto = abtexto.trim();
	abtexto = abtexto.replace(/«/g,'"').replace(/»/g,'"').replace(/“/g,'"').replace(/”/g,'"').replace(/‘/g,"'").replace(/’/g,"'").replace(/`/g,"'").replace(/´/g,"'");
	abtexto = abtexto.replace(/[^a-z0-9 áéíóúüñ\n",:'\.\—\_\-?¿!¡;\(\)\[\]\{\}\…\+\=]/g,"");
	return abtexto;
};
function mySave() {
	let texto1 = document.getElementById("myInput").value;
	let texto2 = document.getElementById("myResult").value;
	let texto3 = "=== TEXTO ORIGINAL ===" + "\n\n" + texto1 + "\n\n" + "=== TEXTO INTEGRAL ===" + "\n\n" + texto2;
	let texto4 = texto3.replace(/\n/g, "\r\n");
	let texto5 = texto4.replace(/\r+/g, "\r");
	let factor = document.createElement('a');
	factor.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(texto5));
	factor.setAttribute("download", "texto.txt");
	factor.style.display = "none";
	document.body.appendChild(factor);
	factor.click();
	document.body.removeChild(factor);
};
function myCopy() {
	let texto1 = document.getElementById("myInput").value;
	let texto2 = document.getElementById("myResult").value;
	let texto3 = "=== TEXTO ORIGINAL ===" + "\n\n" + texto1 + "\n\n" + "=== TEXTO INTEGRAL ===" + "\n\n" + texto2;
	let texto4 = texto3.replace(/\n/g, "\r\n");
	let texto5 = texto4.replace(/\r+/g, "\r");
	const textArea = document.createElement("textarea");
	textArea.value = texto5;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
	// window.alert("Copiado");
	document.getElementById("myCopy").innerHTML = "Copiado";
	setTimeout( function() { document.getElementById("myCopy").innerHTML = "Copiar"; }, 1800 );
};
function myBreak() {
	let texto;
	texto = document.getElementById("myResult").value.toString();
	if ( myBox2.checked == true ) { texto = texto.replace(/h/gi,"ch") };
	texto = Separator(texto);
	if ( myBox2.checked == true ) { texto = texto.replace(/ch/gi,"h") };
	document.getElementById("myResult").value = texto;
	document.getElementById("myInput").scrollTop = 0;
	document.getElementById("myResult").scrollTop = 0;
};
// LABORATORIO
function myChange2() {
	let myTexto2 = document.getElementById("myInput2").value.toString();
	let myInput3 = document.getElementById("myInput3").value.toString().replace(/[^0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑàâäǎăāãåǻąæǽćċĉčçďđðèėêëěĕēęẹəġĝğģĥħıìîïǐĭīĩįịĵķĸĺļłľŀŉńňņŋòôöǒŏōõőọøǿơœŕřŗśŝšşſßťţŧþùûǔŭūũűůųụưẃẁŵẅýỳŷÿỹźżž ÀÂÄǍĂĀÃÅǺĄÆǼĆĊĈČÇĎĐÐÈĖÊËĚĔĒĘẸƏĠĜĞĢĤĦıÌÎÏǏĬĪĨĮỊĴĶĸĹĻŁĽĿŉŃŇŅŊÒÔÖǑŎŌÕŐỌØǾƠŒŔŘŖŚŜŠŞſßŤŢŦÞÙÛǓŬŪŨŰŮŲỤƯẂẀŴẄÝỲŶŸỸŹŻŽ :,]/g,"").replace(/(:+,+)/g,":,").replace(/(,+:+)/g,",").replace(/:{2,}/g,":").replace(/,{2,}/g,",").replace(/ {2,}/g,"  ").replace(/^:/g,"").replace(/^,/g,"");
	document.getElementById("myInput3").value = myInput3;
	let ListB = myInput3.split(",");
	let positionB = 0;
	while ( ListB[positionB] ) {
		if ( ListB[positionB].replace(/[^:]/g,"").length !== 1 ) {
			return document.getElementById("myResult2").value = "Error en : " + ListB[positionB];
		};
		let position = ListB[positionB].indexOf(":", 0);
		let result1 = ListB[positionB].substring(0, position);
		let result2 = ListB[positionB].substring(position + 1, ListB[positionB].length);
		let myReplace1 = new RegExp(result1, "g");
		myTexto2 = myTexto2.replace(myReplace1,result2);
		positionB = positionB + 1;
	};
	document.getElementById("myResult2").value = myTexto2;
	document.getElementById("myInput2").scrollTop = 0;
	document.getElementById("myResult2").scrollTop = 0;
};
function myClear2() {
	document.getElementById("myInput2").value = "";
	document.getElementById("myResult2").value = "";
};
function myAaTex2() {
	let amatex = document.getElementById("myInput2").value.toString();
	document.getElementById("myInput2").value = myMoTex(amatex);
	document.getElementById("myInput2").scrollTop = 0;
	document.getElementById("myResult2").scrollTop = 0;
};
function mySave2() {
	let texto1 = document.getElementById("myInput2").value;
	let texto2 = document.getElementById("myInput3").value;
	let texto3 = document.getElementById("myResult2").value;
	let texto4 = "=== TEXTO ORIGINAL ===" + "\n\n" + texto1 + "\n\n" + "=== :INDICACIONES: ===" + "\n\n" + texto2 + "\n\n" + "=== TEXTO INTEGRAL ===" + "\n\n" + texto3;
	let texto5 = texto4.replace(/\n/g, "\r\n");
	let texto6 = texto5.replace(/\r+/g, "\r");
	let factor = document.createElement('a');
	factor.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(texto6));
	factor.setAttribute("download", "texto.txt");
	factor.style.display = "none";
	document.body.appendChild(factor);
	factor.click();
	document.body.removeChild(factor);
};
function myCopy2() {
	let texto1 = document.getElementById("myInput2").value;
	let texto2 = document.getElementById("myInput3").value;
	let texto3 = document.getElementById("myResult2").value;
	let texto4 = "=== TEXTO ORIGINAL ===" + "\n\n" + texto1 + "\n\n" + "=== :INDICACIONES: ===" + "\n\n" + texto2 + "\n\n" + "=== TEXTO INTEGRAL ===" + "\n\n" + texto3;
	let texto5 = texto4.replace(/\n/g, "\r\n");
	let texto6 = texto5.replace(/\r+/g, "\r");
	const textArea = document.createElement("textarea");
	textArea.value = texto6;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
	// window.alert("Copiado");
	document.getElementById("myCopy2").innerHTML = "Copiado";
	setTimeout( function() { document.getElementById("myCopy2").innerHTML = "Copiar"; }, 1800 );
};
function myBreak2() {
	let texto;
	texto = document.getElementById("myResult2").value.toString();
	if ( myBox2.checked == true ) { texto = texto.replace(/h/gi,"ch") };
	texto = Separator(texto);
	if ( myBox2.checked == true ) { texto = texto.replace(/ch/gi,"h") };
	document.getElementById("myResult2").value = texto;
	document.getElementById("myInput2").scrollTop = 0;
	document.getElementById("myResult2").scrollTop = 0;
};
function myBase1() {
	let myBase1 = document.getElementById("myInput").value.toString();
	document.getElementById("myInput2").value = myBase1;
	document.getElementById("myInput2").scrollTop = 0;
	document.getElementById("myResult2").scrollTop = 0;
};
function myBase2() {
	let myBase2 = document.getElementById("myResult").value.toString();
	document.getElementById("myInput2").value = myBase2;
	document.getElementById("myInput2").scrollTop = 0;
	document.getElementById("myResult2").scrollTop = 0;
};
function myLaboratorio() {
	if ( laboratorio == 0 ) {
		document.getElementById("sectionA").style.display = "none";
		document.getElementById("sectionB").style.display = "none";
		document.getElementById("myLaboratorio").innerHTML = "Ampliar";
		location.href = "#laboratorio"; 
		laboratorio = 1;
	} else {
		document.getElementById("sectionA").style.display = "inline";
		document.getElementById("sectionB").style.display = "inline";
		document.getElementById("myLaboratorio").innerHTML = "Reducir";
		location.href = "#reglas"; 
		laboratorio = 0;
	};
};
// MODO OSCURO - CLARO
function myModo() {
	if ( modoValue == 2 ) {
		document.body.style.color = "#efefef";
		document.body.style.backgroundColor = "#303030";
		let i = 0;
		while ( i < 5 ) {
			document.getElementsByTagName("textarea")[i].style.color = "#efefef";
			document.getElementsByTagName("textarea")[i].style.backgroundColor = "#303030";
			document.getElementsByTagName("textarea")[i].style.border = "1px solid #969696";
			document.getElementsByTagName("textarea")[i].style.scrollbarColor = "#2b2b2b #363636";
			i = i + 1;
		};
		let u = 0;
		while ( u < 15 ) {
			document.getElementsByTagName("button")[u].style.color = "#efefef";
			document.getElementsByTagName("button")[u].style.backgroundColor = "#303030";
			document.getElementsByTagName("button")[u].style.border = "1px solid #969696";
			u = u + 1;
		};
		let a = 0;
		while ( a < 29 ) {
			document.getElementsByTagName("a")[a].style.color = "#c63636";
			document.getElementsByTagName("a")[a].style.backgroundColor = "#303030";
			a = a + 1;
		};
		document.cookie = "modo=2 ; max-age=31415926 ; path=/";
		modoValue = 1;
	} else {
		document.body.style.color = "#181818";
		document.body.style.backgroundColor = "#ffffff";
		let i = 0;
		while ( i < 5 ) {
			document.getElementsByTagName("textarea")[i].style.color = "#181818";
			document.getElementsByTagName("textarea")[i].style.backgroundColor = "#ffffff";
			document.getElementsByTagName("textarea")[i].style.border = "1px solid #999999";
			document.getElementsByTagName("textarea")[i].style.scrollbarColor = "#c9c9c9 #fbfbfb";
			i = i + 1;
		};
		let u = 0;
		while ( u < 15 ) {
			document.getElementsByTagName("button")[u].style.color = "#181818";
			document.getElementsByTagName("button")[u].style.backgroundColor = "#ffffff";
			document.getElementsByTagName("button")[u].style.border = "1px solid #999999";
			u = u + 1;
		};
		let a = 0;
		while ( a < 29 ) {
			document.getElementsByTagName("a")[a].style.color = "#0000ff";
			document.getElementsByTagName("a")[a].style.backgroundColor = "#ffffff";
			a = a + 1;
		};
		document.cookie = "modo=1 ; max-age=31415926 ; path=/";
		modoValue = 2;
	};
};
// COOKIES
function getCookie(name) {
	let cookieE = new RegExp("^.*("+name+"=)(\\d+).*","g");
	let cookieV = document.cookie.replace(cookieE,"$2");
	return Number(cookieV) ? cookieV : undefined;
};
function myCookie() {
	if ( getCookie("modo") ) {
		modoValue = parseInt(getCookie("modo"));
		if ( modoValue == 1 || modoValue == 2 ) {
			myModo();
		};
	};
};
// RESPONSIVE
function myResponsive() {
	let widthMain = document.getElementById("main").offsetWidth;
	// MARGENS VALUES
	let valueMargen = myCalculation( widthMain, 300, 700, 0.45, 1.20 ) ;
	document.getElementById("main").style.margin = 0 + "em" + " " + valueMargen + "em" ;
	// FONT-SIZE MAIN
	let valueMfs = myCalculation( widthMain, 200, 600, 16, 20 ) ;
	document.getElementById("main").style.fontSize = valueMfs + "px" ;
	// FONT-SIZE H1, H3 & H2
	let valueHfs = myCalculation( widthMain, 200, 600, 24, 36 ) ;
	document.getElementsByTagName("h1")[0].style.fontSize = valueHfs + "px" ;
	document.getElementsByTagName("h3")[0].style.fontSize = valueHfs * 0.585 + "px" ;
	document.getElementsByTagName("h3")[1].style.fontSize = valueHfs * 0.585 + "px" ;
	let i = 0;
	while ( i < 9 ) {
		document.getElementsByTagName("h2")[i].style.fontSize = valueHfs * 0.70 + "px" ;
		i = i + 1;
	};
};
// RESPONSIVE CALCULATION
function myCalculation ( X, Xa, Xb, Ya, Yb ) {
	if ( Xa !== Xb ) {
		if ( ( Xa < Xb ) && ( X <= Xa ) ) { let Y = Number ( Ya ); return Y; };
		if ( ( Xa < Xb ) && ( X >= Xb ) ) { let Y = Number ( Yb ); return Y; };
		if ( ( Xa > Xb ) && ( X >= Xa ) ) { let Y = Number ( Ya ); return Y; };
		if ( ( Xa > Xb ) && ( X <= Xb ) ) { let Y = Number ( Yb ); return Y; };
		if ( ( X > Xa && X < Xb ) || ( X > Xb && X < Xa ) ) {
			let Y = Number ( [ Yb * ( X - Xa ) + Ya * ( Xb - X ) ] / [ ( Xb - Xa ) ] );
			return Y;
		};
	} else {
		return false;
	};
};
// INICIO
myCookie();
myResponsive();
window.addEventListener( "resize", myResponsive );