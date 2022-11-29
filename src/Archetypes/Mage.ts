import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Mage extends Archetypes {
  private static _pop = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Mage._pop += 1;
  }

  static createdArchetypeInstances(): number { return this._pop; }

  get energyType(): EnergyType { return this._energy; }
}