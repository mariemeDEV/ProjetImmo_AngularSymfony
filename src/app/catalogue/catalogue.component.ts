import { Component, OnInit, Input } from '@angular/core';
import { BienService } from '../Services/bien.service';
import { Bien } from '../Interfaces/bien';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SearchPipe } from '../pipes/search.pipe';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

constructor(private biens_s: BienService,private route:ActivatedRoute,private router: Router) { }

  listeBiens  : Bien[];
  choisirBien : boolean = false;
  bien        : Bien
  idObtained  : number;
  p           : number    = 1;
  args          = "" ;
  pipeArgId     = "";
  enableSearch  = true;
  
  @Input() b  : Bien;

  ngOnInit() {
    this.getAllBiens();
  }

  getAllBiens(){
      this.biens_s.getListeBiens().subscribe(queryResult=>{
        console.log(queryResult)
        this.listeBiens=queryResult.data as Bien[]
      });
   return this.listeBiens
  }

  reserverBien(idBien){
    this.enableSearch = false;
    if(!this.choisirBien){
      this.choisirBien = true;
      this.idObtained  = idBien;
    }                                                                                                                         
    return this.idObtained;
  }
 
//Recherche emet l'id du type de bien et l'id de la localite et les texts TypeBien et Localite
pipeArgs(pipeArgs){
    this.args       = pipeArgs.arg;
    this.pipeArgId  = pipeArgs.id;
    console.log(this.args)
    console.log(this.pipeArgId)
  }
  


}
