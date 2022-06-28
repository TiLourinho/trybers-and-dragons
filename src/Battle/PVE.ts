import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _environment: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, environment: (SimpleFighter | Fighter)[]) {
    super(player);

    this._environment = environment;
  }

  fight(): number {
    this._environment.forEach((elem) => {
      while (this.player.lifePoints > 0 && elem.lifePoints > 0) {
        this.player.attack(elem);
        elem.attack(this.player);
      }
    });

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;