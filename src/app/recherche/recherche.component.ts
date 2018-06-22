import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { BienService } from '../Services/bien.service';
import { NgForm,FormsModule} from '@angular/forms';
import { Localite } from '../Interfaces/localite';
import { TypeBien } from '../Interfaces/type-bien';
import { SearchPipe } from '../pipes/search.pipe';




@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
localites :   Localite[];
typeBiens :   TypeBien[];
//Données à transmettre au catalogue pour les critéres de recherche
@Output() public pipeArgs   : EventEmitter<any>    = new EventEmitter();
@Output() public test  = new EventEmitter();
  constructor(private service : BienService) { }

  ngOnInit() {
    this.service.getListeLocalites().subscribe(dataLocalites=>{
      this.localites = dataLocalites.data as Localite[]
     //console.log(dataLocalites.data)
    });
    this.service.getListeTypesBien().subscribe(dataTypeBiens=>{
      this.typeBiens = dataTypeBiens.data as TypeBien[]
     //console.log(dataTypeBiens.data);
    });
  }

  getTest(){
    this.test.emit("ok");
   // alert("ok");
    //console.log(this.test);
  }

  getArgsSearch(idOption,selectedOption){
  // console.log(idOption);
  // console.log(selectedOption);
  //console.log(this.pipeArgs.observers);
   this.pipeArgs.emit({"id":idOption,"arg":selectedOption});
   
  }
  // getTypeBienSearched(form):void{
  //  // console.log(form.type);
  //   this.typeBienSearched.emit(form.type);
  // }
//

}
