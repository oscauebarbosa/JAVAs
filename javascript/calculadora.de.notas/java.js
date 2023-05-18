function calcularMedia() {
    var notas = [];
    for (var i = 1; i <= 5; i++) {
      var nota = parseFloat(document.getElementById('nota' + i).value);
      notas.push(nota);
    }
  
    var soma = 0;
    for (var i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
  
    var media = soma / notas.length;
  
    document.getElementById('media').textContent = 'Média: ' + media.toFixed(2);
}

function calcularMedia() {
    var notas = [];
    for (var i = 1; i <= 5; i++) {
    var nota = parseFloat(document.getElementById('nota' + i).value);
    notas.push(nota);
    }

    var soma = 0;
    for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    var media = soma / notas.length;

    document.getElementById('media').textContent = 'Média: ' + media.toFixed(2);

    var resultado = '';
    if (media >= 7) {
        resultado = 'Aprovado';
    } else if (media >= 5 && media < 7) {
        resultado = 'Ficou de Exame';
    } else {
        resultado = 'Reprovado';
    }

  document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}
