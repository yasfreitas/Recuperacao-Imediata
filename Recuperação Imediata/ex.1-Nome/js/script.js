
document.getElementById("cadastro").addEventListener("submit", function (event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;      
    alert("Seja bem-vindo(a) " + nome);
});