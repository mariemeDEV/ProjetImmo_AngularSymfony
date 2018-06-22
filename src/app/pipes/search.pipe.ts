import { Pipe, PipeTransform } from '@angular/core';
import { Bien } from '../Interfaces/bien';



@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(biens:Bien[],args:string,id:number): Bien[]{
    if(args === "Localite"){
      return biens.filter(bien=>                                                                                                                                                                                                                                                                                 
        bien.idlocalite.id == id
      );
    }if(args === "TypeBien"){
      return biens.filter(bien=>                                                                                                                                                                                                                                                                                 
        bien.idtypebien.id == id
      );
    }
    return biens;
  } 

}
