import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Ranger extends Archetypes {
  private static _pop = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Ranger._pop += 1;
  }

  static createdArchetypeInstances(): number { return this._pop; }

  get energyType(): EnergyType { return this._energy; }
}