const entrada = document.querySelector(".cuadro-de-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
	const textoEncriptar = encriptar(entrada.value);
	mensaje.value = textoEncriptar;
}

function encriptar(strEncriptado){
	let matrizArray = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
	strEncriptado = strEncriptado.toLowerCase();
	for (let i = 0; i < matrizArray.length ; i++) {
		if(strEncriptado.includes(matrizArray[i][0])){
			strEncriptado = strEncriptado.replaceAll(matrizArray[i][0], matrizArray[i][1])
		}
	}
	return strEncriptado;
}

function desencriptar(strDesencriptado){
	let matrizArray = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
	strDesencriptado = strDesencriptado.toLowerCase();
	for (let i = 0; i < matrizArray.length ; i++) {
		if(strDesencriptado.includes(matrizArray[i][0])){
			strDesencriptado = strDesencriptado.replaceAll(matrizArray[i][1], matrizArray[i][0])
		}
	}
	return strDesencriptado;
}

function btnDesencriptar(){
	const textoDesencriptar = desencriptar(entrada.value);
	mensaje.value = textoDesencriptar;
}

function copiarTexto(){
	let contenido = document.querySelector(".mensaje");
	contenido.select();
	document.execCommand('copy'); 
}
console.log('js se esta ejecutando con exito')