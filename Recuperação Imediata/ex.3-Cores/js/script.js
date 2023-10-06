
function adicionar() {
    var cor = document.getElementById("inputColor").value;

    if (cor == "") {
        alert("Digite uma cor: ");
        return;
    }
    var corNova = document.createElement("li");
    corNova.textContent = cor;

    var cores = document.getElementById("cores");
    cores.appendChild(corNova);
    document.getElementById("inputColor").value = "";
}