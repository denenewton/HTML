//Cria um objeto Javacript
var objtoJS   = {agencia: "5678-9", tipo: "física", nome: "Maria José", numero: "222.222-22"};

//Converte o objeto Javascript em texto JSON
var textoJson = JSON.stringify(objtoJS);

//Armazenando os dados no navegador
localStorage.setItem("stringJSON", textoJson);