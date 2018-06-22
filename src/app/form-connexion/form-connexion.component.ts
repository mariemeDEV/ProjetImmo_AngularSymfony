import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Interfaces/utilisateur';
import { BienService } from '../Services/bien.service';
import { Router } from "@angular/router";
import { Client } from '../Interfaces/client';


@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent implements OnInit {
userExist : boolean = false;
user   : Client;
client : Client;


  constructor(private serviceConnection : BienService,private router:Router) { }

  ngOnInit() {
  }

  connecterUser(form){
  //console.log(form);
  //form.email,form.pwd
  this.user = {
    "id"          : null,
    "nom_complet" : "",
    "num_piece"   : null,
    "telephone"   : "",
    "adresse"     : "",
    "email"       : form.email,
    "password"    : form.pwd
  }
  
    this.serviceConnection.getClient(this.user).subscribe(dataClient=>{
      console.log(dataClient.message);
        if(dataClient.message=="success"){
          this.router.navigate(['clientPage']);
        }else{
          alert("Cet utilisateur n'existe pas")
        }
     });
  }
 
  }

  


