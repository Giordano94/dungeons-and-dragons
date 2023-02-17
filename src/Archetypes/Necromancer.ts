import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _NecromancerEnergy: EnergyType;
  private static _instanceOfNecromancer = 0;

  constructor(name: string) {
    super(name);
    this._NecromancerEnergy = 'mana';
    Necromancer._instanceOfNecromancer += 1;
  }

  public get energyType(): EnergyType {
    return this._NecromancerEnergy;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._instanceOfNecromancer;
  }
}