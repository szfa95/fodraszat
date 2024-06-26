import { Hairdresser } from "./hairdresser";
import { Table } from "../interfaces/interface";

export class Visit implements Table {
  private hairdresser: Hairdresser[] = [];

  addAppointment(hairdresser: Hairdresser): void {
    this.hairdresser.push(hairdresser);
  }

  removeAppointment(name: string): void {
    this.hairdresser = this.hairdresser.filter(hairdresser => hairdresser.name !== name);
  }

  findAppointmentByName(name: string): Hairdresser | undefined {
    return this.hairdresser.find(hairdresser => hairdresser.name === name);
  }

  listAllAppointment(): Hairdresser[] {
    return this.hairdresser;
  }
}