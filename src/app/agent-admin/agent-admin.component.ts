import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BienService } from '../Services/bien.service';
import { Reservation } from '../Interfaces/reservation';
import * as jsPDF from 'jspdf';
import { Client } from '../Interfaces/client';
@Component({
  selector: 'app-agent-admin',
  templateUrl: './agent-admin.component.html',
  styleUrls: ['./agent-admin.component.css']
})
export class AgentAdminComponent implements OnInit {
listeReservations : Reservation[];
valideContrat     : boolean  = false;
reservations      : boolean  = true;
showPDF           : boolean  = false
client            : Client;
buttonStatus = true;
caution : number;
  constructor(private reserveServ:BienService) { }

  ngOnInit() {
    this.listeReservation();
    // this.infosClient(this.client)
  }
  listeReservation(){
    this.reserveServ.listeReservations().subscribe(dataReserv=>{
      console.log(dataReserv.data);
      this.listeReservations = dataReserv.data as Reservation[]
    })
    return  this.listeReservations;
  }
  infosClient(client){
    this.valideContrat = true;
    this.reservations  = false
    this.client = client;
    this.caution = 2 * client.bien.prixloction
   //console.log(client);
    return this.client,this.caution;
  }
  removeReserv(){
    alert("supprimé")
  }
 @ViewChild('pdfContent') pdfContent: ElementRef
  downloadPDF(){
    let doc = new jsPDF();
    let specialElement = {
      '#editor' : function(element,renderer){
        return true;
      }
    };
    let content = this.pdfContent.nativeElement;
    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
    });
     doc.save("contrat.pdf")
  // doc.output('contratjhgfds')
  }
  activeSave(){
    this.buttonStatus = false;
  }
  desactiveSave(){
    this.buttonStatus = true;
  }


}
