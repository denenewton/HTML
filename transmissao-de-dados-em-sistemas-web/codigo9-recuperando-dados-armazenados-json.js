//Cria uma variável para receber o conteúdo armazenado com localStorage
var jsonText = localStorage.getItem("stringJSON");
//Converte em um objeto Javascript
jsOBJ = JSON.parse(jsonText);

//Exibe o conteúdo do objeto JS com o alert
alert('Agência: ' + jsOBJ.agencia + ' Tipo: ' + jsOBJ.tipo + ' Nome: ' + jsOBJ.nome + ' Número: ' + jsOBJ.numero);