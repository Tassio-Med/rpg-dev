import { EnergyType } from '../Energy';

export default abstract class Archetypes {
  private _special: number;
  private _cost: number;

  constructor(private _name: string) {
    this._special = 0;
    this._cost = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  get name() { return this._name; }

  get special() { return this._special; }

  get cost() { return this._cost; }

  abstract get energyType(): EnergyType;
}