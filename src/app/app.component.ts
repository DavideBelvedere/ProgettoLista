import { Component, ViewChild } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { HeaderService } from './headerService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection = "home";

  constructor(private headerService: HeaderService) {
    this.headerService.menuSelected$.subscribe((id:string)=>{//chiama una funzione al subscribe
      this.currentSection = id;
    });
  }
}
