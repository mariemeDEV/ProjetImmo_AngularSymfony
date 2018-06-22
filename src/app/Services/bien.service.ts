import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bien } from '../Interfaces/bien';
import { Client } from '../Interfaces/client';
//import { FormInscriptionComponent } from '../form-inscription/form-inscription.component';


@Injectable()
export class BienService {
ApiUrl  : string ="http://127.0.0.1:8000";
bodyIns : any;
reservataire;
data;


  constructor(private http: Http,private client: HttpClient) {}

  getListeBiens():Observable<any>{
    return this. client.get(this.ApiUrl+'/liste');
  }

  getListeLocalites():Observable<any>{
    return this.client.get(this.ApiUrl+'/listeLocalites');
  }

  getListeTypesBien():Observable<any>{
    return this.client.get(this.ApiUrl + "/listeTypesBiens");
  }

  detailsBien(id:number):Observable<any>{
    return(this.client.get(this.ApiUrl+`/bienDetails/${id}`));
  }

  saveClient(reservataire:Client,id:number):Observable<any>{
    console.log(id);
    return(this.client.post<Client>(this.ApiUrl + `/ajouterClient/${id}`,reservataire));
  }
  getClient(user):Observable<any>{
    return(this.client.post(this.ApiUrl+`/getClient`,user))
  }
  listeReservations():Observable<any>{
    return(this.client.get(this.ApiUrl+"/getReservations"));
  }

  // connectUser():Observable<Client[]>{
  //   return(this.client.get<Client[]>(this.ApiUrl+ "/listeClients"));
  // }

}


