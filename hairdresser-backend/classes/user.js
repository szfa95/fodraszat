"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
    booking(visit, name) {
        const hairdresser = visit.findAppointmentByName(name);
        if (hairdresser) {
            visit.removeAppointment(name);
        }
        return hairdresser;
    }
}
exports.User = User;
