
    const numero_secreto = Number(prompt("Jogador 1, escolha um número secreto:"));
    alert("\n\nLimpe a tela para o Jogador 2\n\n");
  
    const tentativa = Number(prompt("Jogador 2, tente adivinhar o número:"));
    const diferenca = tentativa - numero_secreto;
  
    if (tentativa === numero_secreto) {
      alert("Parabéns! Você acertou!");
    } else {
      if (tentativa < numero_secreto) {
        alert("Muito baixo.");
      } else {
        alert("Muito alto.");
      }
  
      if (abs(diferenca) <= 2) {
        alert("Tá quente!");
      } else if (abs(diferenca) <= 5) {
        alert("Quase lá!");
      } else {
        alert("Tá frio...");
      }
    }
  
   