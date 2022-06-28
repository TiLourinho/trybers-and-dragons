import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP, PVE } from './Battle';

const player1 = new Character('Dhrar');
const player2 = new Character('Nyllia');
const player3 = new Character('Pathryus');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

let i = 1;
while (i <= 5) {
  player1.levelUp();
  i += 1;
}

const runBattles = (battles: Battle[]) => {
  battles.forEach((elem) => {
    elem.fight();
  });
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};