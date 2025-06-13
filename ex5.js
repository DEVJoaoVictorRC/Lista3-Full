const login_correto = "RamosJv";
  const senha_correta = "9999";
  let tentativas = 0;

  alert("Seja bem-vindo!");

  while (tentativas < 3) {
    const login_digitado = prompt("Digite seu login:");
    const senha_digitada = prompt("Insira sua senha:");

    if (login_digitado === login_correto && senha_digitada === senha_correta) {
      alert("Acesso permitido!");
      break;
    } else {
      tentativas++;

      if (login_digitado !== login_correto) {
        alert("Login incorreto.");
      }

      if (senha_digitada !== senha_correta) {
        alert("Senha incorreta.");
      }

      if (tentativas === 2) {
        alert("Última tentativa, mais um erro e seu acesso será bloqueado!");
      }

      if (tentativas === 3) {
        alert("Acesso bloqueado. Número de tentativas excedido.");
      }
    }
  }