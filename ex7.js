let altura = parseInt(prompt("Altura: "));
let largura = parseInt(prompt("Largura: "));

for(let j=1; j<=altura; j++){
    for(let i=1; i<=largura; i++){
      alert("* ")
      await aguarde(150);
    }
    alert("\n")
    await aguarde(300);
  }


