/*let num1 = prompt("Digite o primeiro número inteiro: ");
let num2 = prompt("Digite o segundo número inteiro: ");


if(num1 % 2 ==0){
    num1++
}
else if(num1 < num2){
    for( i = (num1-1) ; i < num2; i+=2)
        alert(i, " ")
}*/



    let numero1 = Number(prompt("Digite o primeiro número inteiro:"));
    let numero2 = Number(prompt("Digite o segundo número inteiro:"));
  
    if (numero1 % 2 === 0) {
      numero1++;
    }
    if (numero2 % 2 === 0) {
      numero2++;
    }
  
    if (numero1 < numero2) {
      for (let i = numero1 - 1; i < numero2; i += 2) {
        console.log(i);
      }
    } else if (numero1 > numero2) {
      for (let i = numero2 - 1; i < numero1; i += 2) {
        console.log(i);
      }
    } else {
      console.log("Você colocou números iguais");
    }