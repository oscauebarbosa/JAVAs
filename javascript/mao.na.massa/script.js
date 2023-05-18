const btnCalcular = document.getElementById('btn-calcular');
btnCalcular.addEventListener('click', function(event) {
	event.preventDefault();
	var peso = parseFloat(document.getElementById('peso').value);
	var altura = parseFloat(document.getElementById('altura').value) / 100;
	var imc = calcularImc(peso, altura);
	var resultado = document.getElementById('resultado');
	resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
});

function calcularImc(peso, altura) {
	return (peso / (altura * altura));
}