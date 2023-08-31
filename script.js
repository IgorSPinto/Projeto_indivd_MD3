// biblioteca para a leitura das infomrçoes inseridas pelo usuario
import readline from "readline";

// cria uma interface para leitura de entrada do usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// array para armazenar as propriedades de CSS inseridas pelo usuario
const propriedades = [];

// funçao para solicitar propriedades ao usuario
function solicitarPropriedade() {
  rl.question('Digite uma propriedade de CSS (ou digite "SAIR" para finalizar): ', (propriedade) => {
    if (propriedade.toUpperCase() === 'SAIR') {
      // encerra a leitura e exibe as propriedades ordenadas quando "SAIR" eh digitado no terminal
      rl.close();
    } else {
      // adiciona a propriedade ao array e continua solicitando mais propriedades
      propriedades.push(propriedade);
      solicitarPropriedade();
    }
  });
}

// funçao a ser executada quando a leitura eh encerrada
rl.on('close', () => {
  
    // ordena as propriedades em ordem alfabética, o .sort gera a lista em ordem alfabetica
  propriedades.sort();
  
  // exibe as propriedades ordenadas uma por linha
  console.log('Propriedades ordenadas de A-Z:');
  propriedades.forEach((propriedade) => {
    console.log(propriedade);
  });
});

// inicia a solicitação de propriedades ao usuário
solicitarPropriedade();
