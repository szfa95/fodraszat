import { Hairdresser } from "../classes/hairdresser";

export interface Table {
  addAppointment(hairdresser: Hairdresser): void;
  removeAppointment(name: string): void;
  findAppointmentByName(name: string): Hairdresser | undefined;
  listAllAppointment(): Hairdresser[];
}