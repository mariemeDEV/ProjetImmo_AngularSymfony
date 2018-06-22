import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-admin-connexion',
  templateUrl: './admin-connexion.component.html',
  styleUrls: ['./admin-connexion.component.css']
})
export class AdminConnexionComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  connectAdmin(f){
    console.log(f);
    this.route.navigate(['adminAgentPage']);

  }

}
