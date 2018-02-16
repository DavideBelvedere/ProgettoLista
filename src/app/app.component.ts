import { Component, ViewChild } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { HeaderService } from './headerService';
import { DetailService } from './detailService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection = "Home";
  detailId="";
  constructor(private headerService: HeaderService, private detailService: DetailService ) {
    this.headerService.menuSelected$.subscribe((id:string)=>{//chiama una funzione al subscribe che ha in ingresso il parametro id
      this.currentSection = id;
    });

    this.detailService.detailId$.subscribe((id:string)=>{//chiama una funzione al subscribe che ha in ingresso il parametro id
      this.detailId=id;
    });
  }
}
