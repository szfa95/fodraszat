import { Visit } from "./visit";
import { Hairdresser } from "./hairdresser";

export class User {
    constructor(
      public userId: string,
      public name: string,
      public email: string
    ) {}
  
    booking(visit: Visit, name: string): Hairdresser | undefined {
      const hairdresser = visit.findAppointmentByName(name);
      if (hairdresser) {
        visit.removeAppointment(name);
      }
      return hairdresser;
    }
  }