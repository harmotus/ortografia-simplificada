'use strict';

// node uso.js

let texto = 'Se escribe como se pronuncia y se pronuncia como se escribe';
let ortografia = require('../js/ortografia-simplificada.js');
let textoIntegralmK = ortografia.Simplificar(texto,1,0,0,0,0,0,0,0);
let textoIntegralmC = ortografia.Simplificar(texto,1,0,0,0,0,0,0,1);

console.log("Modo K : " + textoIntegralmK);
console.log("Modo C : " + textoIntegralmC);

// Modo K : Se eskribe komo se pronunzia i se pronunzia komo se eskribe
// Modo C : Se escribe como se pronunzia i se pronunzia como se escribe
