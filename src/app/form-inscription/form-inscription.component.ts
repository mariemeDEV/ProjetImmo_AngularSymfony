import { Component, OnInit } from '@angular/core';
import { NgForm,FormsModule} from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { BienService } from '../Services/bien.service';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { Bien } from '../Interfaces/bien';
import { Client } from '../Interfaces/client';
import { Reservation } from '../Interfaces/reservation';


@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {
idBienReserv : number;
reservataire : Client;
reservation  : Reservation;
formReservation ;
donnees;

constructor(private service: BienService, private formIns: CatalogueComponent) {}

ngOnInit() {

}

  reserver(form: NgForm){
    this.formReservation = form;
    this.idBienReserv = this.formIns.idObtained;
    console.log(this.idBienReserv);
    console.log(this.formReservation.nomComplet)
    this.reservataire = {
      'id'          : null,
      'nom_complet' : this.formReservation.nomComplet,
      'num_piece'   : this.formReservation.numPiece,
      'telephone'   : this.formReservation.telephone,
      'adresse'     : this.formReservation.adresse,
      'email'       : this.formReservation.email,
      'password'    : this.formReservation.password
    }

    this.service.saveClient(this.reservataire,this.idBienReserv).subscribe(donnees=>{
        donnees.object;
        console.log(donnees);
    }) 
    alert("Votre reservation a étè bien prise en compte");
  }
}
