function somaMult() {
  let soma = 0;
  let divisiveis = [];
  var numero = parseInt(document.getElementById('numero').value);

  var alerta = document.getElementById('alerta');
  var resultado = document.getElementById('resultado');
  var numeros = document.getElementById('numeros');


  if(!Number.isInteger(numero) || numero < 0){
    return alerta.innerText = "Você precisa digitar um número positivo e inteiro!";
    
  }
  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      divisiveis.push(i);
        soma += i;
    }
  }
  resultado.innerText = "Resultado: " + soma 
  numeros.innerText = "Divisiveis: " + divisiveis 
}