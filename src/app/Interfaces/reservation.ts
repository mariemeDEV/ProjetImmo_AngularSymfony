import { Bien } from '../Interfaces/bien';
import { Client } from '../Interfaces/client';

export interface Reservation {
    id : number,
    dateReservation: Date,
    etatReservation: number,
    idbien: Bien,
    idclient: Client
}
