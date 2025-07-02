const player1 = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  nome: "Luigi",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 4,
  pontos: 0,
};

const player3 = {
  nome: "Bowser",
  velocidade: 5,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0,
};

const player4 = {
  nome: "Peach",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 2,
  pontos: 0,
};

const player5 = {
  nome: "Yoshi",
  velocidade: 2,
  manobrabilidade: 4,
  poder: 3,
  pontos: 0,
};

const player6 = {
  nome: "Donkey kong",
  velocidade: 2,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1; //floor arredonda
}

async function getRandomBlock(params) {
  let random = Math.random();
  let result = "";

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    //sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    //sortear numero no dado
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.velocidade;
      totalTestSkill2 = diceResult2 + character2.velocidade;

      await logRollResult(
        character1.nome,
        "velocidade",
        diceResult1,
        character1.velocidade
      );

      await logRollResult(
        character2.nome,
        "velocidade",
        diceResult2,
        character2.velocidade
      );
    }
    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.manobrabilidade;
      totalTestSkill2 = diceResult2 + character2.manobrabilidade;

      await logRollResult(
        character1.nome,
        "manobrabilidade",
        diceResult1,
        character1.manobrabilidade
      );

      await logRollResult(
        character2.nome,
        "manobrabilidade",
        diceResult2,
        character2.manobrabilidade
      );
    }
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.poder;
      let powerResult2 = diceResult2 + character2.poder;
    }
  }
}

(async function main() {
  console.log(
    `🏁🚥 Corrida entre ${player1.nome} e ${player2.nome} começando...\n`
  );

  await playRaceEngine(player1, player2); // essa função vai esperar terminar de executar antes de fazer qualquer outro conteudo
})(); // responsavel por chamar as outras funções, auto-invocável
