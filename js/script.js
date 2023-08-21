const enviar = document.getElementById("btn_enviar");
const limpar = document.getElementById("btn_limpar");

function calcular_IMC(parm1, parm2){
  return parm1 / (parm2 ** 2 )
}

enviar.addEventListener("click", () => {
  let altura = parseFloat(document.getElementById("txt_altura").value);
  let peso = parseFloat(document.getElementById("txt_peso").value);
  let classificacao;
  let tabela = document.getElementById("table");
  let valor = calcular_IMC(peso, altura);
  
  if(valor < 18.5){
    table.style.backgroundColor = "#FFFF00"
    classificacao = "Abaixo do peso normal"
  } else if(valor >= 25 && valor <= 29.9){
    table.style.backgroundColor = "#FFFF00"
    classificacao = "Exesso de peso"
  } else if(valor >= 30 && valor <= 34.9){
    table.style.backgroundColor = "#FF6347"
    classificacao = "Obesidade clase I"
  }else if(valor >= 35 && valor <= 39.9){
    table.style.backgroundColor = "#FF6347"
    classificacao = "Obesidade classe II"
  } else if(valor >= 40){
    table.style.backgroundColor = "#FF6347"
    classificacao = "Obesidade classe III"
  } else {
    table.style.backgroundColor = "#00FF7F"
    classificacao = "Peso normal"
  }

  document.getElementById("li_nome").textContent = "Nome: " + document.getElementById("txt_nome").value ;
  document.getElementById("li_idade").textContent = "Idade: " + document.getElementById("txt_idade").value;
  document.getElementById("li_sexo").textContent = document.getElementById("txt_sexo").value;
  document.getElementById("li_altura").textContent = altura;
  document.getElementById("li_peso").textContent = peso;
  document.getElementById("li_classificacao").textContent = classificacao;
  )
});

limpar.addEventListener("click", () => {
  document.getElementById("li_nome").textContent = " ";
  document.getElementById("li_idade").textContent = " ";
  document.getElementById("li_sexo").textContent = " ";
  document.getElementById("li_altura").textContent = " ";
  document.getElementById("li_peso").textContent = " ";
  document.getElementById("li_classificacao").textContent = " ";
});

