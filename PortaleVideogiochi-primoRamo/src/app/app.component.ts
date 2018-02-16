import { Component } from '@angular/core';
import { MenuService } from './Menu.service';
import { GameItem } from '../GameItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentSection="home";
  gameSelected: string;

  constructor(private menuService: MenuService){
    this.menuService.sectionSelected$.subscribe(id=>{
      this.currentSection = id;
    });
  }

  currentGame(item: string){
    this.gameSelected = item;
    this.menuService.setSelection("dettaglio");

  }
}
