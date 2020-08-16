import { Alexa } from './Alexa';

type Power = 'Gasoline' | 'Electric' | 'Hybrid';

interface Machine {
    is0n(): boolean;
}

export class Vehcile implements Machine{
    constructor(
        private started: boolean,
        private seat: number,
        private power: Power,
        private speed: number
    ) {
        started = true;
    }

    is0n() {
        return this.started;
    }

    getSeat() {
        return this.seat;
    }

    getPower() {
        return this.power;
    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(speed: number) {
        this.speed = speed;
    }
}

export class Car extends Vehcile {
    drift() {
        Alexa.play('Deja Vu');
    }
}

export class Motorcycle extends Vehcile {
}