export class Pokemon {
  private name: string;
  private baseExperence: number;
  private type: string;
  private id: number;

  constructor (name: string, baseExperence: number, type: string, id: number) {
    this.name = name
    this.baseExperence = baseExperence
    this.type = type
    this.id = id
  }
}
