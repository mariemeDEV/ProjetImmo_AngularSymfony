import { Localite } from '../Interfaces/localite';
import { TypeBien } from '../Interfaces/type-bien';
import { BienImages } from '../Interfaces/bien-images';

export interface Bien {
id : number;
nombien     : string;
etatbien    : boolean;
descriptionbien : string;
prixloction : string;
idlocalite  : Localite;
idtypebien  : TypeBien

}
