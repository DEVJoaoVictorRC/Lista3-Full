const andares = Number(prompt("Digite o número de andares da pirâmide:"));

for (let linha = 1; linha <= andares; linha++) {
  let linhaTexto = "";

  // Adiciona espaços
  for (let espacos = 1; espacos <= andares - linha; espacos++) {
    linhaTexto += " ";
  }

  // Adiciona estrelas
  for (let estrelas = 1; estrelas <= (2 * linha - 1); estrelas++) {
    linhaTexto += "*";
  }

  console.log(linhaTexto);
}