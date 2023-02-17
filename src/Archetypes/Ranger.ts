import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _RangerEnergy: EnergyType;
  private static _instanceOfRanger = 0;

  constructor(name: string) {
    super(name);
    this._RangerEnergy = 'stamina';
    Ranger._instanceOfRanger += 1;
  }

  public get energyType(): EnergyType {
    return this._RangerEnergy;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._instanceOfRanger;
  }
}