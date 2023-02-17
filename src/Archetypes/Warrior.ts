import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _WarriorEnergy: EnergyType;
  private static _instanceOfWarrior = 0;

  constructor(name: string) {
    super(name);
    this._WarriorEnergy = 'stamina';
    Warrior._instanceOfWarrior += 1;
  }

  public get energyType(): EnergyType {
    return this._WarriorEnergy;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._instanceOfWarrior;
  }
}