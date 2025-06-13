let tempo;

  // Validação de entrada
  do {
    tempo = Number(prompt("Digite um tempo (em segundos):"));
  } while (tempo < 1 || tempo > 59);

  // Contador com intervalo
  let i = 0;
  const intervalo = setInterval(() => {
    console.clear();
    console.log(`${i} s`);

    if (i >= tempo) {
      clearInterval(intervalo);
      console.log("fim");
    }

    i++;
  }, 1000);
