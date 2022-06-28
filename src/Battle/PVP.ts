import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _oponent: Fighter;

  constructor(player: Fighter, oponent: Fighter) {
    super(player);

    this._oponent = oponent;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._oponent.lifePoints > 0) {
      this.player.attack(this._oponent);
      this._oponent.attack(this.player);
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;