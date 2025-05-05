"use strict";
function Simplificar(texto,v,y,s,n,l,a,p) {
	// Texto configuración.
	texto = texto.toString();
	if ( texto.length == 0 ) { return ""; };
	if ( v == 1 || v == 2 ) { true; } else { return false; }; // Versión : 1 o 2
	if ( y == 0 || y == 1 ) { true; } else { return false; }; // Yeísmo : 0 o 1
	if ( s == 0 || s == 1 ) { true; } else { return false; }; // Seseo : 0 o 1
	if ( n == 0 || n == 1 ) { true; } else { return false; }; // Neísmo : 0 o 1
	if ( l == 0 || l == 1 ) { true; } else { return false; }; // Leleo : 0 o 1
	if ( a == 0 || a == 1 ) { true; } else { return false; }; // Mayúsculas a minúsculas : 0 o 1
	if ( p == 0 || p == 1 ) { true; } else { return false; }; // Signos de puntuación : 0 o 1
	// Versión 1
	// Tildes arreglo.
	texto = texto.replace(/á/g,"aá").replace(/é/g,"eé").replace(/í/g,"ií").replace(/ó/g,"oó").replace(/ú/g,"uú");
	texto = texto.replace(/Á/g,"AÁ").replace(/É/g,"EÉ").replace(/Í/g,"IÍ").replace(/Ó/g,"OÓ").replace(/Ú/g,"UÚ");
	// La letra 'v' se reemplaza por la letra 'b'.
	texto = texto.replace(/v/g,"b");
	texto = texto.replace(/V/g,"B");
	// Combinación nb arreglo.
	texto = texto.replace(/nb/g,"mb");
	texto = texto.replace(/NB/g,"MB");
	// La letra 'c' se reemplaza por la letra 'z' en las combinaciones 'ce' y 'ci'.
	texto = texto.replace(/ce/g,"ze").replace(/ci/g,"zi");
	texto = texto.replace(/Ce/g,"Ze").replace(/Ci/g,"Zi");
	texto = texto.replace(/CE/g,"ZE").replace(/CI/g,"ZI");
	// La letra fuerte 'g' se reemplaza por la letra 'j' en las combinaciones 'ge' y 'gi'.
	texto = texto.replace(/ge/g,"je").replace(/gi/g,"ji");
	texto = texto.replace(/Ge/g,"Je").replace(/Gi/g,"Ji");
	texto = texto.replace(/GE/g,"JE").replace(/GI/g,"JI");
	// El dígrafo 'gu' se reemplaza por la letra suave 'g' en las combinaciones 'gue' y 'gui'.
	texto = texto.replace(/gue/g,"ge").replace(/gui/g,"gi");
	texto = texto.replace(/Gue/g,"Ge").replace(/Gui/g,"Gi");
	texto = texto.replace(/GUE/g,"GE").replace(/GUI/g,"GI");
	// El dígrafo 'qu' se reemplaza por la letra 'c' en las combinaciones 'que' y 'qui'.
	texto = texto.replace(/que/g,"ce").replace(/qui/g,"ci");
	texto = texto.replace(/Que/g,"Ce").replace(/Qui/g,"Ci");
	texto = texto.replace(/QUE/g,"CE").replace(/QUI/g,"CI");
	// La letra 'q' se reemplaza por la letra 'c'.
	texto = texto.replace(/q/g,"c");
	texto = texto.replace(/Q/g,"C");
	// La letra 'k' se reemplaza por la letra 'c'.
	texto = texto.replace(/k/g,"c");
	texto = texto.replace(/K/g,"C");
	// La letra vocal 'y' se reemplaza por la letra vocal 'i'.
	texto = texto.replace(/ya/g,"çaç").replace(/ye/g,"çeç").replace(/yi/g,"çiç").replace(/yo/g,"çoç").replace(/yu/g,"çuç");
	texto = texto.replace(/Ya/g,"Çaç").replace(/Ye/g,"Çeç").replace(/Yi/g,"Çiç").replace(/Yo/g,"Çoç").replace(/Yu/g,"Çuç");
	texto = texto.replace(/YA/g,"ÇAÇ").replace(/YE/g,"ÇEÇ").replace(/YI/g,"ÇIÇ").replace(/YO/g,"ÇOÇ").replace(/YU/g,"ÇUÇ");
	texto = texto.replace(/y/g,"i");
	texto = texto.replace(/Y/g,"I");
	texto = texto.replace(/çaç/g,"ya").replace(/çeç/g,"ye").replace(/çiç/g,"yi").replace(/çoç/g,"yo").replace(/çuç/g,"yu");
	texto = texto.replace(/Çaç/g,"Ya").replace(/Çeç/g,"Ye").replace(/Çiç/g,"Yi").replace(/Çoç/g,"Yo").replace(/Çuç/g,"Yu");
	texto = texto.replace(/ÇAÇ/g,"YA").replace(/ÇEÇ/g,"YE").replace(/ÇIÇ/g,"YI").replace(/ÇOÇ/g,"YO").replace(/ÇUÇ/g,"YU");
	// La letra muda 'h' desaparece.
	texto = texto.replace(/ch/g,"æý");
	texto = texto.replace(/Ch/g,"Æý");
	texto = texto.replace(/CH/g,"ÆÝ");
	texto = texto.replace(/h/g,"");
	texto = texto.replace(/H/g,"");
	texto = texto.replace(/æý/g,"ch");
	texto = texto.replace(/Æý/g,"Ch");
	texto = texto.replace(/ÆÝ/g,"CH");
	// La diéresis 'ü' desaparece.
	texto = texto.replace(/ü/g,"u");
	texto = texto.replace(/Ü/g,"U");
	// Versión 2
	// El dígrafo 'ch' se reemplaza por la letra 'h'.
	if ( v == 2 ) {
		texto = texto.replace(/ch/g,"h");
		texto = texto.replace(/Ch/g,"H");
		texto = texto.replace(/CH/g,"H");
	};
	// El dígrafo 'll' se reemplaza por la letra 'k'.
	if ( v == 2 ) {
		texto = texto.replace(/ll/g,"k");
		texto = texto.replace(/Ll/g,"K");
		texto = texto.replace(/LL/g,"K");
	};
	// El dígrafo 'rr' se reemplaza por la letra 'v'.
	if ( v == 2 ) {
		texto = texto.replace(/rr/g,"v");
		texto = texto.replace(/Rr/g,"V");
		texto = texto.replace(/RR/g,"V");
	};
	// La letra fuerte 'r' se reemplaza por la letra 'v'.
	if ( v == 2 ) {
		texto = " " + texto;
		texto = texto.replace(/([^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ.-])r/g,"$1v");
		texto = texto.replace(/([^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ.-])R/g,"$1V");
		texto = texto.replace(/nr/g,"nv").replace(/lr/g,"lv").replace(/sr/g,"sv");
		texto = texto.replace(/NR/g,"NV").replace(/LR/g,"LV").replace(/SR/g,"SV");
		texto = texto.trim();
	};
	// La letra 'm' se reemplaza por la letra 'n' en las combinaciones 'mb', 'mp' y 'mn'.
	if ( v == 2 ) {
		texto = texto.replace(/mb/g,"nb").replace(/mp/g,"np").replace(/mn/g,"nn");
		texto = texto.replace(/MB/g,"NB").replace(/MP/g,"NP").replace(/MN/g,"NN");
	};
	// La letra 'x' se reemplaza por las letras 'c','s','j' o la combinación 'cs' según el contexto.
	if ( v == 2 ) {
		texto = " " + texto;
		texto = texto.replace(/([^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ.-])x/g,"$1çæç");
		texto = texto.replace(/([^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ.-])X/g,"$1ÇÆÇ");
		texto = texto.replace(/x/g,"cs").replace(/css/g,"cs").replace(/csz/g,"cz");
		texto = texto.replace(/X/g,"CS").replace(/CSS/g,"CS").replace(/CSZ/g,"CZ");
		texto = texto.replace(/çæç/g,"s");
		texto = texto.replace(/ÇÆÇ/g,"S");
		texto = texto.trim();
	};
	// Versión 1 + Yeísmo
	// El dígrafo 'll' se reemplaza por la letra 'y'.
	if ( v == 1 && y == 1 ) {
		texto = texto.replace(/ll/g,"y");
		texto = texto.replace(/Ll/g,"Y");
		texto = texto.replace(/LL/g,"Y");
	};
	// Versión 2 + Yeísmo
	// La letra 'k' se reemplaza por la letra 'y'.
	if ( v == 2 && y == 1 ) {
		texto = texto.replace(/k/g,"y");
		texto = texto.replace(/K/g,"Y");
	};
	// Versión 1-2 + Seseo
	// La letra 'z' se reemplaza por la letra 's'.
	if ( s == 1 ) {
		texto = texto.replace(/z/g,"s");
		texto = texto.replace(/Z/g,"S");
	};
	// Versión 1-2 + Neísmo
	// La letra 'ñ' se reemplaza por la combinación 'ni'.
	if ( n == 1 ) {
		texto = texto.replace(/ñi/g,"ni").replace(/ñ/g,"ni");
		texto = texto.replace(/Ñi/g,"Ni").replace(/Ñ/g,"Ni");
		texto = texto.replace(/ÑI/g,"NI").replace(/Ñ/g,"NI");
	};
	// Versión 1 + Leleo
	// El dígrafo 'rr' y la letra 'r' se reemplazan por la letra 'l'.
	if ( v == 1 && l == 1 ) {
		texto = texto.replace(/rr/g,"l");
		texto = texto.replace(/Rr/g,"L");
		texto = texto.replace(/RR/g,"L");
		texto = texto.replace(/r/g,"l");
		texto = texto.replace(/R/g,"L");
	};
	// Versión 2 + Leleo
	// Las letras 'v' y 'r' se reemplazan por la letra 'l'.
	if ( v == 2 && l == 1 ) {
		texto = texto.replace(/v/g,"l");
		texto = texto.replace(/V/g,"L");
		texto = texto.replace(/r/g,"l");
		texto = texto.replace(/R/g,"L");
	};
	// Tildes arreglo.
	texto = texto.replace(/aá/g,"á").replace(/eé/g,"é").replace(/ií/g,"í").replace(/oó/g,"ó").replace(/uú/g,"ú");
	texto = texto.replace(/AÁ/g,"Á").replace(/EÉ/g,"É").replace(/IÍ/g,"Í").replace(/OÓ/g,"Ó").replace(/UÚ/g,"Ú");
	// Mayúsculas a minúsculas ( en ambas versiones )
	if ( a == 1 ) {
		texto = texto.toLowerCase();
	};
	// Signos de puntuación ( en ambas versiones )
	if ( p == 1 ) {
		texto = texto.replace(/¿/g,"").replace(/¡/g,"").replace(/«/g,'"').replace(/»/g,'"').replace(/“/g,'"').replace(/”/g,'"').replace(/‘/g,"'").replace(/’/g,"'").replace(/`/g,"'").replace(/´/g,"'");
	};
	// Resultado final ( en ambas versiones )
	return texto;
};
// Módulo
// module.exports = { Simplificar };