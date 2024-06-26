"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visit = void 0;
class Visit {
    constructor() {
        this.hairdresser = [];
    }
    addAppointment(hairdresser) {
        this.hairdresser.push(hairdresser);
    }
    removeAppointment(name) {
        this.hairdresser = this.hairdresser.filter(hairdresser => hairdresser.name !== name);
    }
    findAppointmentByName(name) {
        return this.hairdresser.find(hairdresser => hairdresser.name === name);
    }
    listAllAppointment() {
        return this.hairdresser;
    }
}
exports.Visit = Visit;
