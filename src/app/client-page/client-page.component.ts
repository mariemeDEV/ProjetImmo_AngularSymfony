import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  generatePDF(){
    const doc = new jsPDF();
    doc.text("test.pdf",10,10);

  }

}
