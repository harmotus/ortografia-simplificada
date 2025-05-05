'use strict';

// node uso.js

let texto = 'Se escribe como se pronuncia y se pronuncia como se escribe';
let ortografia = require('../js/ortografia-simplificada.js');
let textoIntegral = ortografia.Simplificar(texto,1,0,0,0,0,0,0);

console.log(textoIntegral);

// Se escribe como se pronunzia i se pronunzia como se escribe
