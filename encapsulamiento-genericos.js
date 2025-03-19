"use strict";
class Lottery {
    constructor(name) {
        this.name = name;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    result() {
        return `For: ${this.name} the ticket is ${this.ticket}`;
    }
}
let lottery = new Lottery('Jhon');
lottery.setTicket(7);
console.log(lottery.result());
