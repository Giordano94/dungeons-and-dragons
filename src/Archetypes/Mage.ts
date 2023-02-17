import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _mageEnergy: EnergyType;
  private static _instanceOfMage = 0;

  constructor(name: string) {
    super(name);
    this._mageEnergy = 'mana';
    Mage._instanceOfMage += 1;
  }

  public get energyType(): EnergyType {
    return this._mageEnergy;
  }

  public static createdArchetypeInstances(): number {
    return Mage._instanceOfMage;
  }
}