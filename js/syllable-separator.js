"use strict";
function Separator(text) {
	// TEXT SETTINGS
	text = text.toString();
	text = text.toLowerCase();
	// WORDS, PARTIALLY SEPARATED INTO SYLLABLES ( FOR EXAMPLE: sub.lunar or sub-lunar )
	text = text.replace(/([a-záéíóúüñ])(\.|\-)(?=[a-záéíóúüñ])/g,"$1Ç");
	// WORDS, NON-NATIVE OR SPECIAL ( FOR EXAMPLE: .beatles , .cool , .jeans , .tweet )
	text = text.replace(/^(.)/g," $1").replace(/([^a-záéíóúüñ])\.([a-záéíóúüñ])/g,"$1Æ$2");
	// TEXT SEPARATION
	text = text.replace(/(\n)\t+/g,"\n\n").replace(/\n/g,"Þ").replace(/\s/g," ");
	text = text.replace(/([^a-zÆ#@áàâäǎăāãåǻąæǽćċĉčçďđðéèėêëěĕēęẹəġĝğģĥħıíìîïǐĭīĩįịĵķĸĺļłľŀŉńňñņŋóòôöǒŏōõőọøǿơœŕřŗśŝšşſßťţŧþúùûüǔŭūũűůųụưẃẁŵẅýỳŷÿỹźżž])/g," $1 ");
	text = text.replace(/ü/g,"Ü").replace(/(g|q)(Ü)(e|é|i|í)/g,"$1ü$3").replace(/ {2,}/g," ");
	text = text.trim();
	// TEXT ARRAY
	const vowels = "aeiouáéíóúü";
	let ListT = text.split(" ");
	let positionT = 0;
	let result = "";
	// TEXT PROCESS
	while ( ListT[positionT] ) {
		// WORD PROCESS
		let word = ListT[positionT];
		// EXCEPTION BLOCK : { TEXT }
		if ( word == "{" ) {
			let positionB = ListT.indexOf("}", positionT);
			while ( positionB !== -1 && positionT < positionB ) {
				result = result + word + " ";
				positionT = positionT + 1;
				word = ListT[positionT];
				continue;
			};
		};
		// EXCEPTION CHARACTER ( Æ , Ü , # , @ , etc )
		if ( word.search(/[ÆÜ#@àâäǎăāãåǻąæǽćċĉčçďđðèėêëěĕēęẹəġĝğģĥħıìîïǐĭīĩįịĵķĸĺļłľŀŉńňņŋòôöǒŏōõőọøǿơœŕřŗśŝšşſßťţŧþùûǔŭūũűůųụưẃẁŵẅýỳŷÿỹźżž]/g) !== -1 ) {
			result = result + word + "  ";
			positionT = positionT + 1;
			word = ListT[positionT];
			continue;
		};
		// WORD THAT DOES NOT FOLLOW THE RULES
		if ( dictionary[word] ) {
			result = result + dictionary[word] + "  ";
			positionT = positionT + 1;
			word = ListT[positionT];
			continue;
		};
		// SIMPLE WORD, NUMBER OR SIGN
		if ( word.search(/[aeiouáéíóúü][bcdfghjklmnñpqrstvwxyz]*[aeiouáéíóúü]/g) == -1 ) {
			result = result + word + "  ";
			positionT = positionT + 1;
			word = ListT[positionT];
			continue;
		};
		// COMPLEX WORD, GROUP OF VOWELS
		let groupV;
		groupV = word.replace(/([bcdfghjklmnñpqrstvwxyz])/g,",");
		groupV = groupV.replace(/,{2,}/g,",");
		groupV = groupV.replace(/^,/g,"");
		groupV = groupV.replace(/,$/g,"");
		// GROUP OF CONSONANTS
		let groupC;
		groupC = word.replace(/([aeiouáéíóúü])/g,",");
		groupC = groupC.replace(/,{2,}/g,",");
		groupC = groupC.replace(/^,/g,"");
		groupC = groupC.replace(/,$/g,"");
		// GROUP OF VOWELS AND CONSONANTS ( SETTINGS )
		if ( vowels.includes(word[0]) ) { groupC = "," + groupC };
		if ( !vowels.includes(word[0]) ) { groupV = "," + groupV };
		if ( vowels.includes(word.substr(-1)) ) { groupC = groupC + "," };
		if ( !vowels.includes(word.substr(-1)) ) { groupV = groupV + "," };
		// GROUP OF VOWELS AND CONSONANTS ( ARRAY )
		let ListV = groupV.split(",");
		let ListC = groupC.split(",");
		// CONSONANT PROCESS
		let wordP = "";
		let positionV = 0;
		let positionC = 0;
		// CONSONANTS PART I
		if ( ListC[0].length == 0 && ListV[0].length !== 0 ) {
			wordP = wordP + ListV[0];
			positionV = positionV + 1;
			positionC = positionC + 1;
		};
		if ( ListC[0].length !== 0 && ListV[0].length == 0 ) {
			wordP = wordP + ListC[0] + ListV[1];
			positionV = positionV + 2;
			positionC = positionC + 1;
		};
		// CONSONANTS PART II
		while ( ListC[positionC].length !== 0 && ListV[positionV].length !== 0 ) {
			if ( ListC[positionC].length == 1 ) {
				wordP = wordP + "." + ListC[positionC] + ListV[positionV];
			};
			if ( ListC[positionC].length == 2 ) {
				if ( ListC[positionC].search(/(bl|br|cl|cr|dl|dr|fl|fr|gl|gr|kl|kr|pl|pr|tl|tr|ch|ll|rr)/g) == 0 ) {
					wordP = wordP + "." + ListC[positionC] + ListV[positionV];
				} else {
					wordP = wordP + ListC[positionC][0] + "." + ListC[positionC][1] + ListV[positionV];
				};
			};
			if ( ListC[positionC].length == 3 ) {
				if ( ListC[positionC].search(/(bl|br|cl|cr|dl|dr|fl|fr|gl|gr|kl|kr|pl|pr|tl|tr|ch|ll|rr)/g) == 1 ) {
					wordP = wordP + ListC[positionC][0] + "." + ListC[positionC][1] + ListC[positionC][2] + ListV[positionV];
				} else {
					wordP = wordP + ListC[positionC][0] + ListC[positionC][1] + "." + ListC[positionC][2] + ListV[positionV];
				};
			};
			if ( ListC[positionC].length == 4 ) {
				wordP = wordP + ListC[positionC][0] + ListC[positionC][1] + "." + ListC[positionC][2] + ListC[positionC][3] + ListV[positionV];
			};
			if ( ListC[positionC].length > 4 ) {
				wordP = wordP + "#" + ListC[positionC] + "#" + ListV[positionV]; // # ... # : MESSAGE OF ALERT
			};
			positionV = positionV + 1;
			positionC = positionC + 1;
		};
		// CONSONANTS PART III
		if ( ListC[positionC].length !== 0 && ListV[positionV].length == 0 ) {
			wordP = wordP + ListC[positionC];
		};
		// VOWEL PROCESS
		wordP = "Ý" + wordP + "Ý";
		wordP = wordP.replace(/(a|e|i|o|u|á|é|í|ó|ú|ü)\.?(h)/g,"$1$2");
		wordP = wordP.replace(/(h)\.?(a|e|i|o|u|á|é|í|ó|ú|ü)/g,"$1$2");
		wordP = wordP.replace(/(g|q)(u)(e|é|i|í)/g,"$1zz$3").replace(/ch/g,"chx");
		wordP = wordP.replace(/(g|q)(ü)(e|é|i|í)/g,"$1zu$3");
		// VOWELS PART I ( PSEUDO-DIPHTHONG )
		wordP = wordP.replace(/(a|e|o|á|é|í|ó|ú)(h?)(?=(a|e|o|á|é|í|ó|ú))/g,"$1.$2");
		wordP = wordP.replace(/(i)(h?)(?=(i))/g,"$1.$2");
		wordP = wordP.replace(/(u)(h?)(?=(u))/g,"$1.$2");
		// VOWELS PART II ( PSEUDO-TRIPHTHONG )
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h?)([^aeiouáéíóúh])/g,"$1$2$3.$4$5$6$7$8$9");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h?)(i|u)(h?)([^aeiouáéíóúh])/g,"$1$2$3.$4$5$6$7$8$9");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(i|u)(h?)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h?)([^aeiouáéíóúh])/g,"$1$2$3.$4$5$6$7$8$9");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(i|u)(h?)(i|u)(h?)(i|u)(h?)([^aeiouáéíóúh])/g,"$1$2$3.$4$5$6$7$8$9");
		// VOWELS PART III ( PSEUDO-QUADRIPHTHONG )
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h?)([^aeiouáéíóúh])/g,"$1$2$3$4$5.$6$7$8$9$10$11");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h?)([^aeiouáéíóúh])/g,"$1$2$3.$4$5$6$7$8$9$10$11");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h?)([^aeiouáéíóúh])/g,"$1$2$3$4$5.$6$7$8$9$10$11");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h?)([^aeiouáéíóúh])/g,"$1$2$3$4$5$6$7.$8$9$10$11");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h?)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h?)([^aeiouáéíóúh])/g,"$1$2$3$4$5.$6$7$8$9$10$11");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h?)(i|u)(h?)(i|u)(h?)([^aeiouáéíóúh])/g,"$1$2$3$4$5.$6$7$8$9$10$11");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h)(i|u)(h?)(i|u)(h?)([^aeiouáéíóúh])/g,"$1$2$3$4$5.$6$7$8$9$10$11");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h?)(i|u)(h?)([^aeiouáéíóúh])/g,"$1$2$3$4$5$6$7.$8$9$10$11");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(i|u)(h?)(i|u)(h)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h?)([^aeiouáéíóúh])/g,"$1$2$3$4$5.$6$7$8$9$10$11");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(i|u)(h?)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h?)(i|u)(h?)([^aeiouáéíóúh])/g,"$1$2$3.$4$5$6$7$8$9$10$11");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(i|u)(h?)(i|u)(h?)(i|u)(h?)(a|e|o|á|é|í|ó|ú)(h?)([^aeiouáéíóúh])/g,"$1$2$3$4$5.$6$7$8$9$10$11");
		wordP = wordP.replace(/([^aeiouáéíóúh])(h?)(i|u)(h?)(i|u)(h?)(i|u)(h?)(i|u)(h?)([^aeiouáéíóúh])/g,"$1$2$3$4$5.$6$7$8$9$10$11");
		// VOWELS PART IV ( PSEUDO-META-QUADRIPHTHONG )
		wordP = wordP.replace(/((h?[aeiouáéíóú]){5,})/g,"#$1#"); // # ... # : MESSAGE OF ALERT
		wordP = wordP.replace(/(g|q)(zz)/g,"$1u").replace(/chx/g,"ch");
		wordP = wordP.replace(/(g|q)(zu)/g,"$1ü");
		wordP = wordP.replace(/Ý/g,"");
		// RESULT + PROCESSED WORD
		result = result + wordP + "  ";
		positionT = positionT + 1;
	};
	// RESULT SETTINGS
	result = result.replace(/(\d)( )*(\,|\;|\.|\:)?( )*(?=(\d))/g,"$1$3");
	result = result.replace(/Þ/g,"\n").replace(/ *\n */g,"\n").replace(/\n{3,}/g,"\n\n");
	result = result.replace(/ *\Ç */g,".").replace(/Æ/g,".").replace(/Â( )*(\.)*/g,"");
	result = result.replace(/Ü/g,"ü").trim();
	// RESULT
	return result;
};
// DICTIONARY OF EXCEPTIONS
// function Dictionary(word){if(dictionary[word]){let word=dictionary[word];return word}};
const dictionary = {
	"sr": "sr.Â",
	"sl": "sl.Â",
	"sra": "sra.Â",
	"sla": "sla.Â",
	"etc": "eta.Â",
	"etk": "eta.Â",
	"pág": "pág.Â",
	"páj": "páj.Â",
	"atte": "atte.Â",
	"aprox": "aprox.Â",
	"aplox": "aplox.Â",
	"aproks": "aprok.Â",
	"aploks": "aplok.Â",
	"aprocs": "aproc.Â",
	"aplocs": "aploc.Â",
	"sublunar": "sub.lu.nar",
	"chihuahua": "chi.hua.hua",
	"chiuaua": "chi.ua.ua",
	"ciuaua": "ci.ua.ua",
	"kiuaua": "ki.ua.ua",
	"ahuehuete": "a.hue.hue.te",
	"aueuete": "a.ue.ue.te",
	"chihuahuita": "chi.hua.hui.ta",
	"chiuauita": "chi.ua.ui.ta",
	"ciuauita": "ci.ua.ui.ta",
	"kiuauita": "ki.ua.ui.ta",
	"geniohioideo": "ge.nio.hioi.deo",
	"jenioioideo": "je.nio.ioi.deo",
	"geniohioides": "ge.nio.hioi.des",
	"jenioioides": "je.nio.ioi.des",
	"chihuahuense": "chi.hua.huen.se",
	"chiuauense": "chi.ua.uen.se",
	"ciuauense": "ci.ua.uen.se",
	"kiuauense": "ki.ua.uen.se",
	"postromántico": "post.ro.mán.ti.co",
	"postlomántico": "post.lo.mán.ti.co",
	"postromántiko": "post.ro.mán.ti.ko",
	"postlomántiko": "post.lo.mán.ti.ko",
	"subintendencia": "sub.in.ten.den.cia",
	"subintendenzia": "sub.in.ten.den.zia",
	"subintendensia": "sub.in.ten.den.sia",
	"huía": "hu.í.a",
	"uía": "u.í.a",
	"fluía": "flu.í.a",
	"buhío": "bu.hí.o",
	"buío": "bu.í.o",
	"argüía": "ar.gü.í.a",
	"arguía": "ar.gu.í.a",
	"alguía": "al.gu.í.a",
	"ushuaia": "u.shua.ia",
	"usuaia": "u.sua.ia",
	"cruento": "cru.en.to",
	"cluento": "clu.en.to",
	"kruento": "kru.en.to",
	"kluento": "klu.en.to",
	"rehuíos": "rehu.í.os",
	"reuíos": "reu.í.os",
	"leuíos": "leu.í.os",
	"rehuíais": "rehu.í.ais",
	"reuíais": "reu.í.ais",
	"leuíais": "leu.í.ais",
	"constituíos": "cons.ti.tu.í.os",
	"konstituíos": "kons.ti.tu.í.os"
};
module.exports = { Separator };