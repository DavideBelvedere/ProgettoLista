import { Component, ViewChild } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { HeaderService } from './headerService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection = "Home";

  constructor(private headerService: HeaderService) {
    this.headerService.menuSelected$.subscribe((id:string)=>{//chiama una funzione al subscribe che ha in ingresso il parametro id
      this.currentSection = id;
    });
  }
}
