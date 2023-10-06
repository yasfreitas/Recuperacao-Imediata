    document.getElementById("calculadora").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    var soma = n1 + n2;
    var sub = n1 - n2;
    var multi = n1 * n2;
    var divisao = n1 / n2;
    
    alert("Resultado da Adição: " + soma + "\n" +
        "Resultado da Subtração: " + sub + "\n" +
        "Resultado da Multiplicação: " + multi + "\n" +
        "Resultado da Divisão: " + divisao);
    });