import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { HttpModule } from '@angular/common/http'

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";
import { MatTabsModule } from "@angular/material/tabs";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { RechercheComponent } from './recherche/recherche.component';
import { BienService } from './Services/bien.service';
import { ReservationComponent } from './reservation/reservation.component';
import { DetailsComponent } from './details/details.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { SearchPipe } from './pipes/search.pipe';
import { ClientPageComponent } from './client-page/client-page.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { AgentAdminComponent } from './agent-admin/agent-admin.component';
import { AdminConnexionComponent } from './admin-connexion/admin-connexion.component'
//Routage

const routes:Routes=[
  { path : 'catalogue',component:CatalogueComponent },
  { path : 'clientPage' , component:ClientPageComponent},
  {path  : 'adminAgentPage',component:AgentAdminComponent},
  { path   : 'connexion',component:AdminConnexionComponent },
  // { path : 'reservation',component:ReservationComponent},
  // { path : 'reservation/:id',component:ReservationComponent},
  { path : '' ,redirectTo:'/catalogue', pathMatch:'full' },
]


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatalogueComponent,
    FormConnexionComponent,
    RechercheComponent,
    ReservationComponent,
    DetailsComponent,
    FormInscriptionComponent,
    SearchPipe,
    ClientPageComponent,
    AgentAdminComponent,
    AdminConnexionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    HttpModule,
    NgxPaginationModule

  ],
  exports: [ 
    RouterModule
  ],
  providers: [
    BienService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
