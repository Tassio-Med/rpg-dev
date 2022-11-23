import Race from './Race';

export default class Dwarf extends Race {
  private static _pop = 0;
  private _maxLifePoints: number;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._pop += 1;
  }

  static createdRacesInstances(): number { return this._pop; }

  get maxLifePoints(): number { return this._maxLifePoints; }
}